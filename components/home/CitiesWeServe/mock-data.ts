export type CityStatus = "live" | "coming_soon";

export interface CityRecord {
  id: string;
  slug: string;
  name: string;
  state: string;
  status: CityStatus;
}

/**
 * Stand-in for the City collection (Phase 2.5 §3). Only Hyderabad is live —
 * every other entry is honestly "coming soon", per Phase 2 §7/§8 (never fake
 * a city as live ahead of ops readiness). Adding a record here is the whole
 * "launch" action; the section itself needs no code change to support it.
 *
 * No `areasCovered`/`garageCount` fields — those previously held invented
 * numbers (10 areas, 150+ garages) with no real source and were removed in
 * the Phase 5F production cleanup. `CityCard` computes a real area count
 * from `components/cities/mock-data.ts`'s `AREAS` instead.
 */
export const CITIES: CityRecord[] = [
  {
    id: "city_hyderabad",
    slug: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    status: "live",
  },
  {
    id: "city_bengaluru",
    slug: "bengaluru",
    name: "Bengaluru",
    state: "Karnataka",
    status: "coming_soon",
  },
  {
    id: "city_chennai",
    slug: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    status: "coming_soon",
  },
  {
    id: "city_vijayawada",
    slug: "vijayawada",
    name: "Vijayawada",
    state: "Andhra Pradesh",
    status: "coming_soon",
  },
];
