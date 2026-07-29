import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FaqAccordionProps {
  faqs: Array<{ question: string; answer: string }>;
  title?: string;
}

/**
 * Generic FAQ accordion shared by blog posts and every entity template
 * (Service/Brand/City) — pair with `faqPageSchema()` (seo/json-ld.ts) on
 * any page that renders one, so the visible content and the structured
 * data always match (Phase 4 §14).
 */
export function FaqAccordion({ faqs, title = "Frequently Asked Questions" }: FaqAccordionProps) {
  if (faqs.length === 0) return null;

  return (
    <div>
      <h2 className="font-heading text-foreground mb-3 text-xl font-semibold">{title}</h2>
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
