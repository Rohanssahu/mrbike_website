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
  /**
   * Polymorphic scoping tags — `service:{slug}`, `brand:{slug}`,
   * `city:{slug}` — power the "Related FAQs" block and `FAQPage` schema on
   * Service/Brand/City pages (Phase 4 §14/§15's FAQ architecture: one
   * shared FAQ pool, tagged and reused, not a separate FAQ set authored
   * per page).
   */
  tags?: string[];
}

/**
 * General, site-wide FAQ content (Phase 4 §6/§13 item 5), extended with
 * `tags` as the "FAQ engine" for Phase 6 — a shared pool that Service,
 * Brand, and City page templates query by tag (`getFaqsByTag`) rather than
 * each page authoring its own FAQ copy. Answers restate only what's already
 * established elsewhere in this codebase, or widely-known general
 * maintenance knowledge — anything requiring real operational/legal
 * specifics is explicitly marked as a placeholder rather than guessed.
 */
export const FAQS: FaqRecord[] = [
  {
    id: "faq_how-to-book",
    categorySlug: "booking-the-app",
    question: "How do I book a bike service?",
    answer:
      "Booking only happens in the MR Bike Doctor app — download it, choose a service, and confirm a time. This website is for browsing services and information only.",
    tags: ["service:bike-service", "topic:general"],
  },
  {
    id: "faq_pricing-upfront",
    categorySlug: "booking-the-app",
    question: "Is pricing shown before I confirm a booking?",
    answer: "Yes — the app shows pricing upfront before you confirm, so there's no surprise bill.",
    tags: ["topic:general"],
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
    tags: ["topic:general"],
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
    id: "faq_how-often-service",
    categorySlug: "service",
    question: "How often should I service my bike?",
    answer:
      "Most bikes need a full service every 2,500–3,000 km or roughly every 3 months, whichever comes first — riding conditions and the bike's engine type can shift that range.",
    tags: ["service:bike-service", "topic:general"],
  },
  {
    id: "faq_best-engine-oil",
    categorySlug: "service",
    question: "Which engine oil is best for my bike?",
    answer:
      "The oil grade and viscosity your bike manufacturer specifies matters more than the brand — stick to the manual's recommendation rather than choosing by price or marketing.",
    tags: ["service:engine-oil-change"],
  },
  {
    id: "faq_what-is-doorstep-service",
    categorySlug: "service",
    question: "What is doorstep bike service?",
    answer:
      "Doorstep bike service means a mechanic comes to your home, office, or wherever your bike is parked, instead of you riding it to a workshop — covering routine jobs like oil changes and general servicing.",
    tags: ["service:doorstep-bike-service"],
  },
  {
    id: "faq_service-cost",
    categorySlug: "service",
    question: "How much does bike servicing cost?",
    answer:
      "Cost depends on the type of service, whether parts need replacing, and the bike's engine size — the app shows the exact price upfront before you confirm a booking.",
    tags: ["service:bike-service", "topic:cost-guides"],
  },
  {
    id: "faq_service-duration",
    categorySlug: "service",
    question: "How long does a bike service take?",
    answer:
      "A standard bike service typically takes 60–90 minutes; quicker jobs like an oil change or chain cleaning usually take 20–30 minutes.",
    tags: ["service:bike-service"],
  },
  {
    id: "faq_general-vs-premium",
    categorySlug: "service",
    question: "What's the difference between General Service and Premium Service?",
    answer:
      "Premium Service includes everything in a standard bike service plus a deeper inspection pass and a detailed service report — General Service covers the core multi-point checkup.",
    tags: ["service:bike-service", "service:premium-service"],
  },
  {
    id: "faq_royal-enfield-interval",
    categorySlug: "service",
    question: "How often should a Royal Enfield be serviced?",
    answer:
      "Royal Enfield's air-cooled engines are typically serviced every 2,500–3,000 km — sticking to that interval matters more than on liquid-cooled engines, since air-cooled engines run hotter in traffic.",
    tags: ["brand:royal-enfield"],
  },
  {
    id: "faq_city-availability",
    categorySlug: "coverage",
    question: "Is doorstep service available in my city?",
    answer:
      "MR Bike Doctor is live in select cities today and expanding city by city — check the Cities We Serve page, or download the app to get notified when service launches near you.",
    tags: ["topic:general"],
  },
  {
    id: "faq_city-not-listed",
    categorySlug: "coverage",
    question: "My city isn't listed yet — what can I do?",
    answer:
      "Download the app and turn on notifications — you'll be notified as soon as MR Bike Doctor launches in your city.",
    tags: ["topic:general"],
  },
  {
    id: "faq_hyderabad-availability",
    categorySlug: "coverage",
    question: "Is MR Bike Doctor available in Hyderabad?",
    answer:
      "Yes — Hyderabad is MR Bike Doctor's first live city, with doorstep servicing available in select areas today and expanding.",
    tags: ["city:hyderabad"],
  },
  {
    id: "faq_delete-account",
    categorySlug: "account",
    question: "How do I delete my account and data?",
    answer: "See the Delete Account page for instructions.",
    tags: ["topic:general"],
  },
  {
    id: "faq_contact-support",
    categorySlug: "account",
    question: "How do I contact support?",
    answer: "Visit the Contact page, or use the Help section inside the app.",
    tags: ["topic:general"],
  },
];

/** The FAQ engine's core query — every entity page (Service/Brand/City) calls this instead of authoring its own FAQ copy. */
export function getFaqsByTag(tag: string): FaqRecord[] {
  return FAQS.filter((faq) => faq.tags?.includes(tag));
}
