import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

const HEADING_ID = "vision-heading";

/** Vision (Phase 4 §6) — where the company is going. */
export function Vision() {
  return (
    <Section className="bg-muted/30" aria-labelledby={HEADING_ID}>
      <SectionHeading id={HEADING_ID} eyebrow="Vision" title="Where we're headed" />
      <div className="text-muted-foreground mt-6 max-w-3xl space-y-4 leading-relaxed">
        <p>
          We see a future where getting a bike serviced is no more effortful than booking a cab —
          a few taps in an app, a verified mechanic at your doorstep, and a bike that&apos;s
          running well again without a single trip to a workshop.
        </p>
        <p>
          That future depends on building real trust into every part of the experience: verified
          mechanics, transparent pricing, honest invoicing, and a digital record of every service a
          bike has ever had. As more riders and mechanics join the platform, we want MR Bike Doctor
          to become the dependable, technology-first way bike servicing works in India — not by
          replacing good mechanics, but by making it far easier for riders to find and trust them.
        </p>
      </div>
    </Section>
  );
}
