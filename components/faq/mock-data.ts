export interface FaqCategoryRecord {
  id: string;
  slug: string;
  name: string;
}

export const FAQ_CATEGORIES: FaqCategoryRecord[] = [
  { id: "faqcat_booking", slug: "booking-the-app", name: "Booking & The App" },
  { id: "faqcat_service", slug: "service", name: "Service" },
  { id: "faqcat_coverage", slug: "coverage", name: "Cities & Coverage" },
  { id: "faqcat_account", slug: "account", name: "Account & Support" },
];

export interface FaqRecord {
  id: string;
  categorySlug: string;
  question: string;
  /** When true, the answer body is a placeholder rather than real policy/ops detail. */
  isPlaceholder?: boolean;
  answer: string;
}

/**
 * General, site-wide FAQ content (Phase 4 §6/§13 item 5). Answers restate
 * only what's already established elsewhere in this codebase (booking is
 * app-only, mechanics are verified, pricing shown upfront) — anything
 * requiring real operational/legal specifics (payment methods, refund
 * policy) is explicitly marked as a placeholder rather than guessed.
 */
export const FAQS: FaqRecord[] = [
  {
    id: "faq_how-to-book",
    categorySlug: "booking-the-app",
    question: "How do I book a bike service?",
    answer:
      "Booking only happens in the MR Bike Doctor app — download it, choose a service, and confirm a time. This website is for browsing services and information only.",
  },
  {
    id: "faq_pricing-upfront",
    categorySlug: "booking-the-app",
    question: "Is pricing shown before I confirm a booking?",
    answer: "Yes — the app shows pricing upfront before you confirm, so there's no surprise bill.",
  },
  {
    id: "faq_payment-methods",
    categorySlug: "booking-the-app",
    question: "What payment methods are accepted?",
    isPlaceholder: true,
    answer: "TODO: Replace with real payment methods information.",
  },
  {
    id: "faq_verified-mechanics",
    categorySlug: "service",
    question: "Are the mechanics verified?",
    answer: "Yes — every mechanic is background-checked before joining the verified service network.",
  },
  {
    id: "faq_service-warranty",
    categorySlug: "service",
    question: "Is there a warranty on service work?",
    isPlaceholder: true,
    answer: "TODO: Replace with real service warranty information.",
  },
  {
    id: "faq_cancellation-refund",
    categorySlug: "service",
    question: "What is your cancellation and refund policy?",
    isPlaceholder: true,
    answer: "TODO: Replace with real cancellation and refund policy information.",
  },
  {
    id: "faq_city-availability",
    categorySlug: "coverage",
    question: "Is doorstep service available in my city?",
    answer:
      "MR Bike Doctor is live in select cities today and expanding city by city — check the Cities We Serve page, or download the app to get notified when service launches near you.",
  },
  {
    id: "faq_city-not-listed",
    categorySlug: "coverage",
    question: "My city isn't listed yet — what can I do?",
    answer:
      "Download the app and turn on notifications — you'll be notified as soon as MR Bike Doctor launches in your city.",
  },
  {
    id: "faq_delete-account",
    categorySlug: "account",
    question: "How do I delete my account and data?",
    answer: "See the Delete Account page for instructions.",
  },
  {
    id: "faq_contact-support",
    categorySlug: "account",
    question: "How do I contact support?",
    answer: "Visit the Contact page, or use the Help section inside the app.",
  },
];
