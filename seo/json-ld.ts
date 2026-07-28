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
