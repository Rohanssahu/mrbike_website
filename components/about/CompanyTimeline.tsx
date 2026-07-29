import { Milestone } from "lucide-react";

import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

const HEADING_ID = "company-timeline-heading";

/** Dummy placeholder milestones — swap in real dates/events when available. */
const TIMELINE_ITEMS = [
  {
    id: "founding",
    label: "Founding",
    description: "MR Bike Doctor is founded to bring verified bike servicing to riders' doorsteps.",
  },
  {
    id: "first-city-launch",
    label: "First City Launch",
    description: "Doorstep servicing goes live in our first city, connecting riders with verified mechanics.",
  },
  {
    id: "app-launch",
    label: "App Launch",
    description: "The MR Bike Doctor app launches, bringing booking, tracking, and invoicing into one place.",
  },
  {
    id: "every-city-since",
    label: "Every City Since",
    description: "The verified mechanic network keeps growing, bringing doorstep servicing to more riders.",
  },
];

/** Company Timeline (Phase 4 §6) — dummy milestones; real dates/events to be supplied later. */
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
        {TIMELINE_ITEMS.map(({ id, label, description }) => (
          <li
            key={id}
            className="border-border bg-card flex h-full flex-col gap-2 rounded-xl border p-5"
          >
            <Milestone className="text-primary size-5" aria-hidden="true" />
            <p className="text-foreground font-semibold">{label}</p>
            <p className="text-muted-foreground text-sm">{description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
