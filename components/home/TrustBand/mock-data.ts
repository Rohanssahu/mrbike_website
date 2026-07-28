import { Bike, MapPin, ShieldCheck, Star, type LucideIcon } from "lucide-react";

export interface TrustStat {
  id: string;
  icon: LucideIcon;
  value: string;
  label: string;
  sublabel?: string;
}

/**
 * Compact proof strip (Phase 4 §4) — stats reframed off booking metrics:
 * app rating, verified mechanics, cities covered, brands supported. No stat
 * here is sourced from a live booking counter the website queries.
 */
export const TRUST_STATS: TrustStat[] = [
  {
    id: "rating",
    icon: Star,
    value: "4.8★",
    label: "App rating",
    sublabel: "12,000+ Play Store reviews",
  },
  {
    id: "garages",
    icon: ShieldCheck,
    value: "150+",
    label: "Verified mechanics",
    sublabel: "Background-checked & rated",
  },
  {
    id: "cities",
    icon: MapPin,
    value: "1",
    label: "City live",
    sublabel: "Hyderabad — more coming soon",
  },
  {
    id: "brands",
    icon: Bike,
    value: "8+",
    label: "Brands supported",
  },
];
