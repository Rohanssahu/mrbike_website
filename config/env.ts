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

export const env = {
  siteUrl: requireEnv("NEXT_PUBLIC_SITE_URL", "https://mrbikedoctor.com").replace(/\/$/, ""),
  iosAppUrl: process.env.NEXT_PUBLIC_IOS_APP_URL ?? "",
  androidAppUrl: process.env.NEXT_PUBLIC_ANDROID_APP_URL ?? "",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "",
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "support@mrbikedoctor.com",
  contactPhone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "",
} as const;
