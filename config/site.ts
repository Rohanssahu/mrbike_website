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
  themeColor: "#0C1650",
  contactEmail: env.contactEmail,
  contactPhone: env.contactPhone,
  address: {
    streetAddress: "Beside Infosys SEZ Campus, Pocharam",
    addressLocality: "Secunderabad",
    addressRegion: "Telangana",
    postalCode: "500088",
    addressCountry: "IN",
  },
  social: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/mr-bike-doctor-b48573219/" },
    { name: "Facebook", url: "https://www.facebook.com/mrbikedoctor" },
    { name: "Instagram", url: "https://www.instagram.com/mrbikedoctor" },
    { name: "Twitter", url: "https://twitter.com/mrbikedoctor" },
    { name: "YouTube", url: "https://www.youtube.com/@mrbikedoctor" },
  ],
  ios: { url: env.iosAppUrl },
  android: { url: env.androidAppUrl },
  // Play Store internal-testing link for the MR Bike Doctor Partner (garage/mechanic) app.
  partnerAndroid: { url: "https://play.google.com/apps/internaltest/4700941963525886328" },
  // No partner iOS app yet — badge renders as "coming soon" until this is set.
  partnerIos: { url: "" },
};
