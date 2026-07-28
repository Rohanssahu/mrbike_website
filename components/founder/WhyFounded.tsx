import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TodoPlaceholder } from "@/components/shared/TodoPlaceholder";

const HEADING_ID = "why-founded-heading";

/** Why MR Bike Doctor was created (Phase 4 §7) — the founder's own account, owner-supplied. */
export function WhyFounded() {
  return (
    <Section className="bg-muted/30" aria-labelledby={HEADING_ID}>
      <SectionHeading
        id={HEADING_ID}
        eyebrow="Origin Story"
        title="Why MR Bike Doctor Was Created"
      />
      <div className="mt-6 max-w-3xl">
        <TodoPlaceholder what="origin story" />
      </div>
    </Section>
  );
}
