import { siteConfig } from "@/config/site";

export type JsonLdSchema = Record<string, unknown>;

export function organizationSchema(): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: new URL("/logo.png", siteConfig.url).toString(),
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

export function websiteSchema(): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: siteConfig.locale.replace("_", "-"),
  };
}

/** Informational Service schema (Phase 4 §10) — not a bookable/transactional Offer. */
export function serviceSchema(service: {
  name: string;
  description: string;
  path: string;
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
  };
}

/** LocalBusiness schema for a live City/Area page (Phase 4 §10) — only render for cities actually live. */
export function localBusinessSchema(place: {
  name: string;
  path: string;
  addressLocality: string;
  addressRegion?: string;
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
      logo: {
        "@type": "ImageObject",
        url: new URL("/logo.png", siteConfig.url).toString(),
      },
    },
  };
}

/** FAQPage schema — only emit on pages that render a matching visible FAQ block (Phase 4 §14). */
export function faqPageSchema(faqs: Array<{ question: string; answer: string }>): JsonLdSchema {
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
export function webPageSchema(page: { name: string; description: string; path: string }): JsonLdSchema {
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
      logo: {
        "@type": "ImageObject",
        url: new URL("/logo.png", siteConfig.url).toString(),
      },
    },
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
