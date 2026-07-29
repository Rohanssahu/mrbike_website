import type { LucideIcon } from "lucide-react";
import { MapPin, ShieldCheck, Wrench } from "lucide-react";

import { siteConfig } from "@/config/site";

export interface HeroVariant {
  id: string;
  badgeIcon: LucideIcon;
  badge: string;
  heading: string;
  description: string;
  androidUrl: string;
  androidEyebrow: string;
  secondaryLabel: string;
  secondaryHref: string;
  tagIcon: LucideIcon;
  tag: string;
}

/**
 * Hero content variants — synced with PhonePreview's phone screens by index
 * (same order: Partner app first, customer app second) so the headline,
 * description, and CTA always match whichever app the phones are showing.
 */
export const HERO_VARIANTS: HeroVariant[] = [
  {
    id: "partner",
    badgeIcon: Wrench,
    badge: "For Garage Partners",
    heading: "Own a Garage? Run It With the MR Bike Doctor Partner App",
    description:
      "Accept bookings, track every job, and collect payments — the same app our partner garages use every day, now in Play Store internal testing.",
    androidUrl: siteConfig.partnerAndroid.url,
    androidEyebrow: "INTERNAL TESTING ON",
    secondaryLabel: "See Partner App",
    secondaryHref: "#partner-app-showcase-heading",
    tagIcon: ShieldCheck,
    tag: "Garage partner program",
  },
  {
    id: "customer",
    badgeIcon: MapPin,
    badge: "Now serving Hyderabad",
    heading: `Doorstep Bike Service, On the ${siteConfig.name} App`,
    description:
      "Verified mechanics come to your home or office in Hyderabad for an oil change, battery replacement, or full service — no garage visit required. Download the app to get started.",
    androidUrl: siteConfig.android.url,
    androidEyebrow: "GET IT ON",
    secondaryLabel: "Explore Services",
    secondaryHref: "/services",
    tagIcon: ShieldCheck,
    tag: "Verified mechanics",
  },
];
