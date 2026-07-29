export interface SocialLink {
  name: string;
  url: string;
}

export interface PostalAddress {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
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
  address?: PostalAddress;
  social: SocialLink[];
  ios: { url: string };
  android: { url: string };
  partnerAndroid: { url: string };
}
