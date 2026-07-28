import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TodoPlaceholder } from "@/components/shared/TodoPlaceholder";

const HEADING_ID = "founder-biography-heading";

/** Founder Biography (Phase 4 §7) — background, experience, and how they came to start the company. */
export function FounderBiography() {
  return (
    <Section aria-labelledby={HEADING_ID}>
      <SectionHeading id={HEADING_ID} eyebrow="Biography" title="Founder Biography" />
      <div className="mt-6 max-w-3xl">
        <TodoPlaceholder what="founder biography" />
      </div>
    </Section>
  );
}
