import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TodoPlaceholder } from "@/components/shared/TodoPlaceholder";

const HEADING_ID = "company-story-heading";

/**
 * Only lists what's already true of the product elsewhere in this codebase
 * (mobile-first, doorstep, pickup & drop, emergency assistance, verified
 * network, customer-first) — the founding story itself is owner-supplied.
 */
const WHAT_WE_ARE = [
  "A technology-driven platform for bike servicing.",
  "A mobile-first experience, built around the MR Bike Doctor app.",
  "Convenient servicing that comes to you, not the other way around.",
  "Pickup & drop for bikes that need workshop attention.",
  "Emergency assistance when a bike breaks down unexpectedly.",
  "A verified service network of background-checked mechanics.",
  "A customer-first experience, from request to invoice.",
];

/** Company Story (Phase 4 §6) — safe descriptive content plus a placeholder for the actual founding narrative. */
export function CompanyStory() {
  return (
    <Section aria-labelledby={HEADING_ID}>
      <SectionHeading
        id={HEADING_ID}
        eyebrow="About MR Bike Doctor"
        title="A technology-driven bike service platform"
        description="MR Bike Doctor connects riders with verified bike mechanics through a mobile app, built around convenience, transparency, and doorstep service."
      />

      <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {WHAT_WE_ARE.map((point) => (
          <li key={point} className="border-border bg-card text-muted-foreground rounded-lg border p-4 text-sm">
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-8 max-w-3xl">
        <TodoPlaceholder what="company story" />
      </div>
    </Section>
  );
}
