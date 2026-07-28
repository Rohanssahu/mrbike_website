import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

import type { FaqCategoryRecord, FaqRecord } from "./mock-data";

interface FaqCategorySectionProps {
  category: FaqCategoryRecord;
  faqs: FaqRecord[];
}

/** One FAQ category as an accordion — pair with `faqPageSchema()` for the matching structured data. */
export function FaqCategorySection({ category, faqs }: FaqCategorySectionProps) {
  if (faqs.length === 0) return null;

  return (
    <Section aria-labelledby={`faq-${category.slug}-heading`}>
      <SectionHeading id={`faq-${category.slug}-heading`} eyebrow="FAQ" title={category.name} />
      <div className="mt-6 max-w-3xl">
        <Accordion>
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>
                <p>{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
