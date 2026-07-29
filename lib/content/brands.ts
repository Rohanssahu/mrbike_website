import { BIKE_MODELS, type BikeModelRecord } from "@/components/brands/mock-data";
import { BRANDS, type BrandRecord } from "@/components/home/BrandsWeService/mock-data";

/**
 * Content access layer for the Brand and Bike Model entities (Phase 4 §21).
 * Routes and templates read through these functions rather than importing
 * `BRANDS`/`BIKE_MODELS` directly, so the data source can move to a CMS or
 * the mobile backend's API without touching any page or component.
 */
export function getAllBrands(): BrandRecord[] {
  return BRANDS;
}

export function getBrandBySlug(slug: string): BrandRecord | undefined {
  return BRANDS.find((brand) => brand.slug === slug);
}

export function getModelsByBrand(brandSlug: string): BikeModelRecord[] {
  return BIKE_MODELS.filter((model) => model.brandSlug === brandSlug);
}

export function getModelBySlug(brandSlug: string, modelSlug: string): BikeModelRecord | undefined {
  return BIKE_MODELS.find((model) => model.brandSlug === brandSlug && model.slug === modelSlug);
}

export function getAllModels(): BikeModelRecord[] {
  return BIKE_MODELS;
}

export type { BrandRecord, BikeModelRecord };
