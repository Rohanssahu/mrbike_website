import { AREAS, type AreaRecord } from "@/components/cities/mock-data";
import { CITIES, type CityRecord } from "@/components/home/CitiesWeServe/mock-data";

/**
 * Content access layer for the City and Area entities (Phase 4 §21). Routes
 * and templates read through these functions rather than importing
 * `CITIES`/`AREAS` directly, so live city/area launch status can later be
 * sourced from the mobile backend without touching any page or component.
 */
export function getAllCities(): CityRecord[] {
  return CITIES;
}

export function getLiveCities(): CityRecord[] {
  return CITIES.filter((city) => city.status === "live");
}

export function getCityBySlug(slug: string): CityRecord | undefined {
  return CITIES.find((city) => city.slug === slug);
}

export function getAreasByCity(citySlug: string): AreaRecord[] {
  return AREAS.filter((area) => area.citySlug === citySlug);
}

export function getAreaBySlug(citySlug: string, areaSlug: string): AreaRecord | undefined {
  return AREAS.find((area) => area.citySlug === citySlug && area.slug === areaSlug);
}

export function getAllAreas(): AreaRecord[] {
  return AREAS;
}

export type { CityRecord, AreaRecord };
