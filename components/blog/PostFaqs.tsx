import { FaqAccordion } from "@/components/shared/FaqAccordion";

import type { BlogFaqEntry } from "./mock-data";

interface PostFaqsProps {
  faqs: BlogFaqEntry[];
}

/** Article-scoped FAQ block — pair with `faqPageSchema()` (seo/json-ld.ts) on posts that have one. */
export function PostFaqs({ faqs }: PostFaqsProps) {
  return <FaqAccordion faqs={faqs} />;
}
