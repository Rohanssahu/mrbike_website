import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import type { BlogFaqEntry } from "./mock-data";

interface PostFaqsProps {
  faqs: BlogFaqEntry[];
}

/** Article-scoped FAQ block — pair with `faqPageSchema()` (seo/json-ld.ts) on posts that have one. */
export function PostFaqs({ faqs }: PostFaqsProps) {
  return (
    <div>
      <h2 className="font-heading text-foreground mb-3 text-xl font-semibold">
        Frequently Asked Questions
      </h2>
      <Accordion>
        {faqs.map((faq) => (
          <AccordionItem key={faq.question} value={faq.question}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>
              <p>{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
