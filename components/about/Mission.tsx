import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TodoPlaceholder } from "@/components/shared/TodoPlaceholder";

const HEADING_ID = "mission-heading";

/** Mission (Phase 4 §6) — the problem being solved, owner-supplied. */
export function Mission() {
  return (
    <Section aria-labelledby={HEADING_ID}>
      <SectionHeading id={HEADING_ID} eyebrow="Mission" title="Why MR Bike Doctor exists" />
      <div className="mt-6 max-w-3xl">
        <TodoPlaceholder what="company mission" />
      </div>
    </Section>
  );
}
