import { Milestone } from "lucide-react";

import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TodoPlaceholder } from "@/components/shared/TodoPlaceholder";

const HEADING_ID = "company-timeline-heading";
const TIMELINE_SLOTS = ["milestone-1", "milestone-2", "milestone-3", "milestone-4"];

/** Company Timeline (Phase 4 §6) — placeholder milestone slots; real dates/events are owner-supplied. */
export function CompanyTimeline() {
  return (
    <Section aria-labelledby={HEADING_ID}>
      <SectionHeading
        id={HEADING_ID}
        eyebrow="Company Timeline"
        title="Key milestones"
        description="Founding, first city launch, app launch, and every city since."
      />

      <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {TIMELINE_SLOTS.map((id) => (
          <li key={id}>
            <TodoPlaceholder what="company milestone">
              <Milestone className="text-primary size-5" aria-hidden="true" />
            </TodoPlaceholder>
          </li>
        ))}
      </ol>
    </Section>
  );
}
