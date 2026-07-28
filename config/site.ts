import type { SiteConfig } from "@/types/site";
import { env } from "./env";

/**
 * Single source of truth for site-wide identity, used by the Metadata API,
 * JSON-LD builders, sitemap/robots generation, and any component that needs
 * to reference the brand (name, domain, contact info, socials).
 */
export const siteConfig: SiteConfig = {
  name: "MR Bike Doctor",
  legalName: "MR Bike Doctor",
  shortName: "Bike Doctor",
  domain: "mrbikedoctor.com",
  url: env.siteUrl,
  description:
    "MR Bike Doctor brings certified bike mechanics to your doorstep. Book doorstep bike repair, servicing, and maintenance through the MR Bike Doctor app.",
  keywords: [
    "bike repair",
    "doorstep bike service",
    "bicycle mechanic",
    "bike servicing app",
    "MR Bike Doctor",
  ],
  locale: "en_US",
  themeColor: "#0f172a",
  contactEmail: env.contactEmail,
  contactPhone: env.contactPhone,
  social: [],
  ios: { url: env.iosAppUrl },
  android: { url: env.androidAppUrl },
};
