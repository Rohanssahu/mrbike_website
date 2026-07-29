import { getAllBrands, getAllFaqs, getAllServices, getLiveCities } from "@/lib/content";
import type { BrandRecord, CityRecord, ServiceRecord } from "@/lib/content";

/**
 * Section 17's data-driven generation rule, made executable: a Brand+City
 * or Service+City combinatorial page is only eligible once there's real,
 * distinct backing content for that exact combination — concretely, at
 * least one FAQ tagged `brand:{slug}+city:{slug}` (or `service:{slug}+city:{slug}`).
 * Generic city/brand/service existence is NOT enough; that would be the
 * classic doorway-page anti-pattern Section 17 explicitly warns against.
 *
 * No combo-tagged FAQ exists in `components/faq/mock-data.ts` today, so both
 * `getEligible*Combos()` functions below correctly return an empty array —
 * this is expected, not a bug. They start returning real combos the moment
 * ops/content adds a genuinely combo-specific FAQ, testimonial, or local
 * stat tagged this way.
 */

function comboTag(a: string, b: string) {
  return `${a}+${b}`;
}

export function isBrandCityEligible(brandSlug: string, citySlug: string): boolean {
  return getAllFaqs().some((faq) => faq.tags?.includes(comboTag(`brand:${brandSlug}`, `city:${citySlug}`)));
}

export function isServiceCityEligible(serviceSlug: string, citySlug: string): boolean {
  return getAllFaqs().some((faq) =>
    faq.tags?.includes(comboTag(`service:${serviceSlug}`, `city:${citySlug}`)),
  );
}

export interface BrandCityCombo {
  brand: BrandRecord;
  city: CityRecord;
}

export interface ServiceCityCombo {
  service: ServiceRecord;
  city: CityRecord;
}

export function getEligibleBrandCityCombos(): BrandCityCombo[] {
  const combos: BrandCityCombo[] = [];
  for (const city of getLiveCities()) {
    for (const brand of getAllBrands()) {
      if (isBrandCityEligible(brand.slug, city.slug)) combos.push({ brand, city });
    }
  }
  return combos;
}

export function getEligibleServiceCityCombos(): ServiceCityCombo[] {
  const combos: ServiceCityCombo[] = [];
  for (const city of getLiveCities()) {
    for (const service of getAllServices()) {
      if (isServiceCityEligible(service.slug, city.slug)) combos.push({ service, city });
    }
  }
  return combos;
}

/** Proposed route shape — not yet a real route. See `components/programmatic/README.md`. */
export function buildBrandCityPath(brandSlug: string, citySlug: string): string {
  return `/brands/${brandSlug}/in/${citySlug}`;
}

export function buildServiceCityPath(serviceSlug: string, citySlug: string): string {
  return `/services/${serviceSlug}/in/${citySlug}`;
}
