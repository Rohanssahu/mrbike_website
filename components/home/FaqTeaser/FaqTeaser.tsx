import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { FAQS } from "@/components/faq/mock-data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

const HEADING_ID = "home-faq-heading";
const PREVIEW_COUNT = 4;

/**
 * FAQ teaser (Phase 4 §4 — "FAQs" homepage section). Surfaces a handful of
 * real (non-placeholder) answers from `/faq` on the homepage — closes the
 * internal-linking gap flagged in the Phase 5F audit, since `/faq` was
 * previously reachable only from the footer.
 */
export function FaqTeaser() {
  const previewFaqs = FAQS.filter((faq) => !faq.isPlaceholder).slice(0, PREVIEW_COUNT);

  if (previewFaqs.length === 0) return null;

  return (
    <Section className="bg-muted/30" aria-labelledby={HEADING_ID}>
      <SectionHeading id={HEADING_ID} eyebrow="FAQs" title="Common questions, answered" />

      <div className="mt-8 max-w-3xl">
        <Accordion>
          {previewFaqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>
                <p>{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-8 flex justify-center">
        <Button variant="outline" nativeButton={false} render={<Link href="/faq" />}>
          View All FAQs
          <ArrowRight data-icon="inline-end" aria-hidden="true" />
        </Button>
      </div>
    </Section>
  );
}
