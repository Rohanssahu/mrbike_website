import { POPULAR_SERVICES, type ServiceRecord } from "@/components/home/PopularServices/mock-data";
import { getFaqsByTag, type FaqRecord } from "@/lib/content/faqs";

const RELATED_SERVICE_SLUGS: Record<string, string[]> = {
  "bike-service": ["premium-service", "engine-oil-change", "chain-cleaning"],
  "doorstep-bike-service": ["bike-service", "bike-repair", "bike-pickup-drop"],
  "emergency-bike-service": ["puncture-repair", "battery-replacement", "bike-pickup-drop"],
  "bike-pickup-drop": ["bike-repair", "premium-service", "doorstep-bike-service"],
  "bike-repair": ["doorstep-bike-service", "emergency-bike-service", "bike-pickup-drop"],
  "premium-service": ["bike-service", "engine-oil-change", "bike-wash"],
  "engine-oil-change": ["bike-service", "chain-cleaning", "premium-service"],
  "battery-replacement": ["emergency-bike-service", "bike-repair", "doorstep-bike-service"],
  "brake-repair": ["bike-service", "wheel-alignment", "tyre-replacement"],
  "chain-cleaning": ["bike-service", "engine-oil-change", "bike-wash"],
  "wheel-alignment": ["tyre-replacement", "brake-repair", "bike-service"],
  "bike-wash": ["chain-cleaning", "bike-service", "premium-service"],
  "tyre-replacement": ["puncture-repair", "wheel-alignment", "brake-repair"],
  "puncture-repair": ["tyre-replacement", "emergency-bike-service", "wheel-alignment"],
};

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
  const relatedSlugs = RELATED_SERVICE_SLUGS[slug] ?? [];
  return relatedSlugs
    .map((relatedSlug) => getServiceBySlug(relatedSlug))
    .filter((service): service is ServiceRecord => Boolean(service))
    .slice(0, limit);
}

export function getServiceProcess(service: ServiceRecord): string[] {
  return (
    service.steps ?? [
      `Select ${service.name} in the MR Bike Doctor app and enter your bike and location details.`,
      "Review the available slot and upfront price before confirming the booking.",
      "A verified mechanic inspects the bike and confirms any required parts or additional work before proceeding.",
      `The mechanic completes the ${service.name.toLowerCase()} checklist and performs a final check before handover.`,
      "The completed work is recorded in the app for future reference.",
    ]
  );
}

export function getServiceFaqs(service: ServiceRecord): FaqRecord[] {
  const taggedFaqs = getFaqsByTag(`service:${service.slug}`).filter((faq) => !faq.isPlaceholder);
  const standardFaqs: FaqRecord[] = [
    {
      id: `faq_${service.slug}-price`,
      categorySlug: "booking-the-app",
      question: `What is the price range for ${service.name}?`,
      answer: `The verified price range is not published on this page because it can vary by bike, parts, and the work required. The MR Bike Doctor app shows the applicable price before you confirm the booking.`,
    },
    {
      id: `faq_${service.slug}-duration`,
      categorySlug: "service",
      question: `How long does ${service.name} take?`,
      answer: `The typical service time is ${service.durationMinutes.min}–${service.durationMinutes.max} minutes. The actual time can change if inspection identifies additional work or parts are required.`,
    },
    {
      id: `faq_${service.slug}-parts-warranty`,
      categorySlug: "service",
      question: `Are genuine parts and warranty included with ${service.name}?`,
      answer:
        "When a replacement is required, confirm the part brand, specification, price, and applicable manufacturer or service warranty before approving the work. MR Bike Doctor does not publish a universal warranty period because terms can vary by part and service.",
    },
  ];
  const questions = new Set(taggedFaqs.map((faq) => faq.question));
  return [...taggedFaqs, ...standardFaqs.filter((faq) => !questions.has(faq.question))];
}

export function getComparedService(service: ServiceRecord): ServiceRecord | undefined {
  return service.comparisonSlug ? getServiceBySlug(service.comparisonSlug) : undefined;
}

export type { ServiceRecord };
