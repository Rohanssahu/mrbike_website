import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TodoPlaceholder } from "@/components/shared/TodoPlaceholder";

const HEADING_ID = "vision-heading";

/** Vision (Phase 4 §6) — where the company is going, owner-supplied. */
export function Vision() {
  return (
    <Section className="bg-muted/30" aria-labelledby={HEADING_ID}>
      <SectionHeading id={HEADING_ID} eyebrow="Vision" title="Where we're headed" />
      <div className="mt-6 max-w-3xl">
        <TodoPlaceholder what="company vision" />
      </div>
    </Section>
  );
}
