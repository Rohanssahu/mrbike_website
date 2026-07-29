import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

import { FOUNDER_NAME } from "./FounderProfile";

const HEADING_ID = "founder-biography-heading";

/** Founder Biography (Phase 4 §7) — background, experience, and how they came to start the company. */
export function FounderBiography() {
  return (
    <Section aria-labelledby={HEADING_ID}>
      <SectionHeading id={HEADING_ID} eyebrow="Biography" title="Founder Biography" />
      <div className="text-muted-foreground mt-6 flex max-w-3xl flex-col gap-4 text-base">
        <p>
          {FOUNDER_NAME} founded MR Bike Doctor after noticing the same problem play out again and
          again: riders who wanted their bikes serviced but simply couldn&rsquo;t find the time to
          visit a workshop, wait around, and go back later to collect it. Local mechanics would
          regularly get calls asking if someone could just come and pick the bike up instead — a
          request the traditional service-centre model was never built to handle.
        </p>
        <p>
          Rather than treat that as an inconvenience to work around, he saw it as a sign that bike
          servicing needed to be rebuilt around the customer&rsquo;s side of the experience. That
          meant designing a service around pickup, doorstep visits, transparent pricing, and
          real-time updates — all coordinated through a single app — instead of asking riders to
          adapt to how workshops have always run.
        </p>
        <p>
          As founder, his focus stays on the parts of the experience customers actually feel: how
          easy it is to book a service, how clearly progress is communicated, and how much they
          can trust what they&rsquo;re being charged for. MR Bike Doctor is built on the belief
          that good service and good technology shouldn&rsquo;t be a trade-off — riders should get
          both.
        </p>
      </div>
    </Section>
  );
}
