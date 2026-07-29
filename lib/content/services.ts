import { POPULAR_SERVICES, type ServiceRecord } from "@/components/home/PopularServices/mock-data";

/**
 * Content access layer for the Service entity (Phase 4 §21). Every route
 * reads through these functions instead of importing `POPULAR_SERVICES`
 * directly, so swapping the source (flat array → CMS → backend API) later
 * is a change inside this file only — no page/template touches the source.
 */
export function getAllServices(): ServiceRecord[] {
  return POPULAR_SERVICES;
}

export function getServiceBySlug(slug: string): ServiceRecord | undefined {
  return POPULAR_SERVICES.find((service) => service.slug === slug);
}

export function getRelatedServices(slug: string, limit = 3): ServiceRecord[] {
  return POPULAR_SERVICES.filter((service) => service.slug !== slug).slice(0, limit);
}

export function getComparedService(service: ServiceRecord): ServiceRecord | undefined {
  return service.comparisonSlug ? getServiceBySlug(service.comparisonSlug) : undefined;
}

export type { ServiceRecord };
