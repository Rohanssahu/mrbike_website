import { FAQ_CATEGORIES, FAQS, getFaqsByTag, type FaqCategoryRecord, type FaqRecord } from "@/components/faq/mock-data";

/**
 * Content access layer for the polymorphic FAQ entity (Phase 4 §21).
 * `getFaqsByTag` already lived here conceptually (Phase 6) — re-exported
 * through the access layer so every caller goes through one module.
 */
export { getFaqsByTag };

export function getAllFaqs(): FaqRecord[] {
  return FAQS;
}

export function getFaqCategories(): FaqCategoryRecord[] {
  return FAQ_CATEGORIES;
}

export type { FaqRecord, FaqCategoryRecord };
