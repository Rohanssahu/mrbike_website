export interface SocialLink {
  name: string;
  url: string;
}

export interface SiteConfig {
  name: string;
  legalName: string;
  shortName: string;
  domain: string;
  url: string;
  description: string;
  keywords: string[];
  locale: string;
  themeColor: string;
  contactEmail: string;
  contactPhone: string;
  social: SocialLink[];
  ios: { url: string };
  android: { url: string };
}
