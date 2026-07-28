import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import type { SeoProps } from "@/types/seo";

/**
 * Builds a page's `Metadata` object on top of site-wide defaults.
 * Call from a route's `export const metadata` (or `generateMetadata`)
 * with only the fields that page needs to override.
 */
export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  image = "/og-image.png",
  noIndex = false,
}: SeoProps = {}): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const resolvedTitle = title ?? siteConfig.name;

  return {
    title: resolvedTitle,
    description,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type: "website",
      url,
      title: resolvedTitle,
      description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [{ url: image, width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [image],
    },
  };
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...buildMetadata(),
  title: {
    default: `${siteConfig.name} — Doorstep Bike Repair & Servicing App`,
    template: `%s | ${siteConfig.name}`,
  },
  keywords: siteConfig.keywords,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};
