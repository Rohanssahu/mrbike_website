import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TodoPlaceholder } from "@/components/shared/TodoPlaceholder";

const HEADING_ID = "founder-vision-heading";

/**
 * Founder's personal vision for the industry (Phase 4 §7) — distinct from
 * the company-level Vision on /about; this is personal voice, not company copy.
 */
export function FounderVision() {
  return (
    <Section aria-labelledby={HEADING_ID}>
      <SectionHeading
        id={HEADING_ID}
        eyebrow="Vision"
        title="Vision for India's Bike Service Industry"
      />
      <div className="mt-6 max-w-3xl">
        <TodoPlaceholder what="founder's vision for the industry" />
      </div>
    </Section>
  );
}
