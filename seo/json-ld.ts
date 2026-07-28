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

/**
 * Person schema for the Founder page. Accepts placeholder values today
 * (Phase 4 §7's Founder entity has no real data yet) — callers should pass
 * real name/jobTitle/image once the business supplies them.
 */
export function personSchema(person: {
  name: string;
  jobTitle?: string;
  description?: string;
  image?: string;
  path?: string;
}): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    ...(person.jobTitle && { jobTitle: person.jobTitle }),
    ...(person.description && { description: person.description }),
    ...(person.image && { image: new URL(person.image, siteConfig.url).toString() }),
    ...(person.path && { url: new URL(person.path, siteConfig.url).toString() }),
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}
