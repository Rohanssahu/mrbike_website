import { Bike, CheckCircle2, MapPin, ShieldCheck, Star, type LucideIcon } from "lucide-react";

export interface TrustStat {
  id: string;
  icon: LucideIcon;
  value: string;
  label: string;
  sublabel?: string;
}

/** Compact proof strip (Phase 3 §6) — every trust dimension in one glance. */
export const TRUST_STATS: TrustStat[] = [
  {
    id: "rating",
    icon: Star,
    value: "4.8★",
    label: "Average rating",
    sublabel: "12,000+ verified reviews",
  },
  {
    id: "garages",
    icon: ShieldCheck,
    value: "150+",
    label: "Verified garages",
    sublabel: "Background-checked & rated",
  },
  {
    id: "bookings",
    icon: CheckCircle2,
    value: "50,000+",
    label: "Bookings completed",
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
