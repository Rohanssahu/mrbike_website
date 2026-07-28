import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

import { HOW_IT_WORKS_STEPS } from "./mock-data";
import { TimelineStep } from "./TimelineStep";

const HEADING_ID = "how-it-works-heading";

/** How It Works (Phase 3 §2) — the literal 1-6 booking flow. */
export function HowItWorks() {
  return (
    <Section className="bg-muted/30" aria-labelledby={HEADING_ID}>
      <SectionHeading
        id={HEADING_ID}
        eyebrow="How It Works"
        title="Doorstep service in six simple steps"
        description="From choosing a service to a digital invoice in your inbox — here's exactly what happens."
      />

      <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {HOW_IT_WORKS_STEPS.map((step, index) => (
          <TimelineStep key={step.id} step={step} index={index} />
        ))}
      </ol>
    </Section>
  );
}
