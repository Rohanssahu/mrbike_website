import { siteConfig } from "@/config/site";

export type JsonLdSchema = Record<string, unknown>;

/** Generic `ImageObject` builder (Phase 7 — extends Phase 4 §10's schema table). */
export function imageObjectSchema(image: {
  url: string;
  width: number;
  height: number;
  caption?: string;
}): JsonLdSchema {
  return {
    "@type": "ImageObject",
    url: new URL(image.url, siteConfig.url).toString(),
    width: image.width,
    height: image.height,
    ...(image.caption && { caption: image.caption }),
  };
}

/**
 * `VideoObject` builder (Phase 7) — prepared, not invoked anywhere yet: no
 * page on the site embeds video content today. Wire this in once a real
 * video asset (e.g. a service-walkthrough or app-demo clip) exists; never
 * call it with placeholder/fake video data.
 */
export function videoObjectSchema(video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  contentUrl?: string;
  embedUrl?: string;
}): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.name,
    description: video.description,
    thumbnailUrl: new URL(video.thumbnailUrl, siteConfig.url).toString(),
    uploadDate: video.uploadDate,
    ...(video.contentUrl && { contentUrl: new URL(video.contentUrl, siteConfig.url).toString() }),
    ...(video.embedUrl && { embedUrl: new URL(video.embedUrl, siteConfig.url).toString() }),
  };
}

/**
 * `SpeakableSpecification` builder (Phase 4 §14) — points voice/AI-answer
 * crawlers at the most quotable passage on a page via CSS selector. Pair
 * with the `data-speakable` attributes already rendered by `QuickAnswer`
 * and `FaqAccordion` (components/shared) — the selectors here must match
 * what's actually visible, never an element that doesn't exist on the page.
 */
export function speakableSpecification(cssSelectors: string[]): JsonLdSchema {
  return {
    "@type": "SpeakableSpecification",
    cssSelector: cssSelectors,
  };
}

export const SPEAKABLE_SELECTORS = {
  quickAnswer: '[data-speakable="quick-answer"]',
  faqAnswer: '[data-speakable="faq-answer"]',
} as const;

/**
 * `ItemList` builder (Phase 7 — Knowledge Graph, Phase 4 §16/§17) — the
 * structured-data shape for any hub/index page listing entity records
 * (Services, Brands, Cities, Blog categories).
 */
export function itemListSchema(items: Array<{ name: string; path: string }>): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: new URL(item.path, siteConfig.url).toString(),
    })),
  };
}

/**
 * `CollectionPage` builder (Phase 7) — wraps a hub/index page's `ItemList`
 * with page-level identity (name/description/url), so crawlers see both
 * "this is a collection page" and "here's everything it collects" in one
 * schema. Used on `/services`, `/brands`, `/cities`, and blog category
 * archives.
 */
export function collectionPageSchema(page: {
  name: string;
  description: string;
  path: string;
  items: Array<{ name: string; path: string }>;
}): JsonLdSchema {
  const url = new URL(page.path, siteConfig.url).toString();
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: page.name,
    description: page.description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: page.items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: new URL(item.path, siteConfig.url).toString(),
      })),
    },
  };
}

/**
 * Reusable brand logo `ImageObject` (Phase 7) — points at the real 512×512
 * PWA icon (`public/icons/icon-512.png`), the only square brand mark that
 * actually exists on disk. Previously `organizationSchema()` referenced a
 * non-existent `/logo.png`, a 404 structured-data crawlers would have hit.
 */
export function organizationLogoImage(): JsonLdSchema {
  return imageObjectSchema({
    url: "/icons/icon-512.png",
    width: 512,
    height: 512,
    caption: `${siteConfig.name} logo`,
  });
}

export function organizationSchema(): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: organizationLogoImage(),
    description: siteConfig.description,
    email: siteConfig.contactEmail,
    ...(siteConfig.contactPhone && { telephone: siteConfig.contactPhone }),
    ...(siteConfig.address && {
      address: {
        "@type": "PostalAddress",
        ...siteConfig.address,
      },
    }),
    sameAs: siteConfig.social.map((link) => link.url),
  };
}

/**
 * `search`, when passed, only makes sense once a page actually resolves
 * `{path}?{queryParam}={search_term_string}` into filtered results server-
 * side or via the URL (Phase 4 §10 — SearchAction only stays if it powers
 * real on-site content search). `/blog`'s search reads its initial query
 * from the URL for exactly this reason — see `components/blog/BlogSearch.tsx`.
 */
export function websiteSchema(search?: { path: string; queryParam?: string }): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: siteConfig.locale.replace("_", "-"),
    ...(search && {
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${new URL(search.path, siteConfig.url).toString()}?${search.queryParam ?? "q"}={search_term_string}`,
        },
        "query-input": `required name=${search.queryParam ?? "q"}`,
      },
    }),
  };
}

/** Informational Service schema (Phase 4 §10) — not a bookable/transactional Offer. */
export function serviceSchema(service: {
  name: string;
  description: string;
  path: string;
  /** CSS selectors of the most quotable passage on the page (Phase 4 §14) — pass `SPEAKABLE_SELECTORS.quickAnswer` when the page renders a `QuickAnswer`. */
  speakable?: string[];
}): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: new URL(service.path, siteConfig.url).toString(),
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: "IN",
    ...(service.speakable && { speakable: speakableSpecification(service.speakable) }),
  };
}

/**
 * LocalBusiness schema for a live City/Area page (Phase 4 §10, extended
 * Phase 7 §19 — "Prepare LocalBusiness schema for future workshop data").
 * `geo`/`openingHours`/`telephone`/`priceRange`/`aggregateRating`/
 * `serviceRadiusKm` are all optional and only ever emitted when real
 * workshop data is passed in — never populated with placeholder values, so
 * existing call sites (which pass none of them) render exactly as before.
 */
export function localBusinessSchema(place: {
  name: string;
  path: string;
  addressLocality: string;
  addressRegion?: string;
  geo?: { latitude: number; longitude: number };
  openingHours?: string[];
  telephone?: string;
  priceRange?: string;
  /** Only ever set from a real, sourced rating — never a placeholder (Phase 4 §5F precedent on `softwareApplicationSchema`). */
  aggregateRating?: { ratingValue: number; reviewCount: number };
  serviceRadiusKm?: number;
}): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${siteConfig.name} — ${place.name}`,
    url: new URL(place.path, siteConfig.url).toString(),
    address: {
      "@type": "PostalAddress",
      addressLocality: place.addressLocality,
      ...(place.addressRegion && { addressRegion: place.addressRegion }),
      addressCountry: "IN",
    },
    ...(place.geo && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: place.geo.latitude,
        longitude: place.geo.longitude,
      },
    }),
    ...(place.openingHours && { openingHoursSpecification: place.openingHours }),
    ...(place.telephone && { telephone: place.telephone }),
    ...(place.priceRange && { priceRange: place.priceRange }),
    ...(place.aggregateRating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: place.aggregateRating.ratingValue,
        reviewCount: place.aggregateRating.reviewCount,
      },
    }),
    ...(place.geo &&
      place.serviceRadiusKm && {
        areaServed: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: place.geo.latitude,
            longitude: place.geo.longitude,
          },
          geoRadius: place.serviceRadiusKm * 1000,
        },
      }),
    parentOrganization: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

/** BlogPosting schema for a blog article (Phase 4 §10/§14). */
export function blogPostingSchema(post: {
  headline: string;
  description: string;
  path: string;
  authorName: string;
  datePublished: string;
}): JsonLdSchema {
  const url = new URL(post.path, siteConfig.url).toString();
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.headline,
    description: post.description,
    url,
    mainEntityOfPage: url,
    datePublished: post.datePublished,
    author: {
      "@type": "Organization",
      name: post.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: organizationLogoImage(),
    },
  };
}

/**
 * FAQPage schema — only emit on pages that render a matching visible FAQ
 * block (Phase 4 §14). Pass `speakable: [SPEAKABLE_SELECTORS.faqAnswer]`
 * when the page renders `FaqAccordion` (Phase 7).
 */
export function faqPageSchema(
  faqs: Array<{ question: string; answer: string }>,
  options?: { speakable?: string[] },
): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
    ...(options?.speakable && { speakable: speakableSpecification(options.speakable) }),
  };
}

/**
 * MobileApplication/SoftwareApplication schema for /download (Phase 4 §10).
 * Deliberately omits `aggregateRating` — a fabricated rating in structured
 * data (as opposed to editorial page copy) risks a manual action from
 * Google for fake review markup, so this only ever includes fields that
 * are true regardless of real store data (name, category, platform, free
 * price) until a real rating can be wired in.
 */
export function softwareApplicationSchema(): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: siteConfig.name,
    url: new URL("/download", siteConfig.url).toString(),
    operatingSystem: "Android, iOS",
    applicationCategory: "LifestyleApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
  };
}

/**
 * Generic WebPage schema for informational pages that aren't a more
 * specific type (Article/Service/LocalBusiness/etc.) — the baseline
 * "this URL is a real, described page" signal (Phase 4 §10/§14).
 */
export function webPageSchema(page: {
  name: string;
  description: string;
  path: string;
  speakable?: string[];
}): JsonLdSchema {
  const url = new URL(page.path, siteConfig.url).toString();
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.name,
    description: page.description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    ...(page.speakable && { speakable: speakableSpecification(page.speakable) }),
  };
}

/**
 * Article schema for long-form informational content that isn't a dated
 * blog post — Brand and Service pages, for example (Phase 4 §14). Unlike
 * `blogPostingSchema()`, this has no `datePublished` requirement, since
 * these pages are living reference content, not dated articles.
 */
export function articleSchema(article: {
  headline: string;
  description: string;
  path: string;
  speakable?: string[];
}): JsonLdSchema {
  const url = new URL(article.path, siteConfig.url).toString();
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.headline,
    description: article.description,
    url,
    mainEntityOfPage: url,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: organizationLogoImage(),
    },
    ...(article.speakable && { speakable: speakableSpecification(article.speakable) }),
  };
}

/**
 * HowTo schema for ordered, step-by-step content (Phase 4 §14) — only emit
 * on pages that render a matching visible, numbered step list (pair with
 * `HowToSteps`, components/shared/HowToSteps.tsx).
 */
export function howToSchema(howTo: { name: string; description: string; steps: string[] }): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: howTo.name,
    description: howTo.description,
    step: howTo.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      text: step,
    })),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.url).toString(),
    })),
  };
}

/** Person schema for the Founder page. */
export function personSchema(person: {
  name: string;
  jobTitle?: string;
  description?: string;
  image?: string;
  path?: string;
  sameAs?: string[];
}): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    ...(person.jobTitle && { jobTitle: person.jobTitle }),
    ...(person.description && { description: person.description }),
    ...(person.image && { image: new URL(person.image, siteConfig.url).toString() }),
    ...(person.path && { url: new URL(person.path, siteConfig.url).toString() }),
    ...(person.sameAs && person.sameAs.length > 0 && { sameAs: person.sameAs }),
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}
