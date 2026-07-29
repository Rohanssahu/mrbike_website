/**
 * Knowledge Graph relationship layer (Phase 4 §16, Phase 7).
 *
 * Company → Services → Brands → Models → Cities → Areas → Blogs → FAQs is
 * currently expressed as ad-hoc `.find()`/`.filter()` joins repeated across
 * `app/(marketing)/**\/page.tsx`. This module centralizes those joins into
 * one reusable relationship per entity, so every route and every schema
 * builder (`itemListSchema`/`collectionPageSchema`) reads the same graph
 * instead of re-deriving it. Built entirely on top of the `lib/content/*`
 * access layer — no new data, no new source of truth.
 */
import { getAllBrands, getBrandBySlug, getModelsByBrand } from "./brands";
import { getAreasByCity, getCityBySlug, getLiveCities } from "./cities";
import { getFaqsByTag } from "./faqs";
import { getComparedService, getRelatedServices, getServiceBySlug } from "./services";
import { getPostsByEntityTag } from "./blog";

export function getServiceRelations(slug: string) {
  const service = getServiceBySlug(slug);
  if (!service) return undefined;

  return {
    service,
    relatedServices: getRelatedServices(slug),
    comparedService: getComparedService(service),
    faqs: getFaqsByTag(`service:${slug}`),
    posts: getPostsByEntityTag("relatedServiceSlugs", slug),
  };
}

export function getBrandRelations(slug: string) {
  const brand = getBrandBySlug(slug);
  if (!brand) return undefined;

  return {
    brand,
    models: getModelsByBrand(slug),
    faqs: getFaqsByTag(`brand:${slug}`),
    posts: getPostsByEntityTag("relatedBrandSlugs", slug),
  };
}

export function getCityRelations(slug: string) {
  const city = getCityBySlug(slug);
  if (!city) return undefined;

  return {
    city,
    areas: getAreasByCity(slug),
    brands: getAllBrands(),
    faqs: getFaqsByTag(`city:${slug}`),
    posts: getPostsByEntityTag("relatedCitySlugs", slug),
  };
}

/** Company-level rollup — used by hub pages' `ItemList`/`CollectionPage` schema. */
export function getSiteEntityGraph() {
  return {
    brands: getAllBrands(),
    liveCities: getLiveCities(),
  };
}
