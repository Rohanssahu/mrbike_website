/**
 * Typed, validated access to environment variables.
 * Import from here instead of touching `process.env` directly elsewhere.
 */
function requireEnv(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback;
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function canonicalSiteUrl(value: string): string {
  const url = new URL(value);
  url.protocol = "https:";
  url.hostname = url.hostname.replace(/^www\./, "");
  url.pathname = "/";
  url.search = "";
  url.hash = "";
  return url.toString().replace(/\/$/, "");
}

export const env = {
  siteUrl: canonicalSiteUrl(requireEnv("NEXT_PUBLIC_SITE_URL", "https://mrbikedoctor.com")),
  iosAppUrl: process.env.NEXT_PUBLIC_IOS_APP_URL ?? "",
  androidAppUrl: process.env.NEXT_PUBLIC_ANDROID_APP_URL ?? "",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "",
  clarityProjectId: process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID ?? "",
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
  bingSiteVerification: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ?? "",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "support@mrbikedoctor.com",
  contactPhone: process.env.NEXT_PUBLIC_CONTACT_PHONE?.trim() || "+91 72075 45464",
} as const;
