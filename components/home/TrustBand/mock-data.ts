import { Bike, MapPin, Wrench, type LucideIcon } from "lucide-react";

import { BRANDS } from "@/components/home/BrandsWeService/mock-data";
import { CITIES } from "@/components/home/CitiesWeServe/mock-data";
import { POPULAR_SERVICES } from "@/components/home/PopularServices/mock-data";

export interface TrustStat {
  id: string;
  icon: LucideIcon;
  value: string;
  label: string;
  sublabel?: string;
}

const LIVE_CITY_COUNT = CITIES.filter((city) => city.status === "live").length;

/**
 * Compact proof strip (Phase 4 §4). Every value here is computed from the
 * site's own real content arrays, not a typed-in number — "App rating" and
 * "Verified mechanics" stats were removed entirely in the Phase 5F/production
 * cleanup because no verified figure exists for either yet; per the site's
 * zero-fabrication rule they're omitted rather than shown as a placeholder
 * number. Reinstate once real, sourced figures are available.
 */
export const TRUST_STATS: TrustStat[] = [
  {
    id: "cities",
    icon: MapPin,
    value: String(LIVE_CITY_COUNT),
    label: LIVE_CITY_COUNT === 1 ? "City live" : "Cities live",
    sublabel: "Hyderabad — more coming soon",
  },
  {
    id: "brands",
    icon: Bike,
    value: `${BRANDS.length}+`,
    label: "Brands supported",
  },
  {
    id: "services",
    icon: Wrench,
    value: `${POPULAR_SERVICES.length}+`,
    label: "Services offered",
  },
];
