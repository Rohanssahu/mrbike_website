import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

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
      <div className="text-muted-foreground mt-6 flex max-w-3xl flex-col gap-4 text-base">
        <p>
          The idea for MR Bike Doctor didn&rsquo;t come from a business plan — it came from a
          pattern that kept repeating. Bike owners with jobs, families, and full schedules would
          want their bike serviced, but getting it done meant carving out hours they didn&rsquo;t
          have: riding to the workshop, waiting or making a second trip, and hoping the mechanic
          remembered what needed fixing.
        </p>
        <p>
          What made it clearer was hearing it from the mechanics&rsquo; side too. Customers would
          call local workshops directly and ask if someone could just come pick the bike up,
          because going in person wasn&rsquo;t realistic for them. That request came up often
          enough that it stopped feeling like an edge case — it was a real, recurring gap between
          what customers needed and what the existing system offered.
        </p>
        <p>
          MR Bike Doctor was built to close that gap. If a rider can order food, book a cab, or
          schedule a home repair from their phone, there was no reason bike servicing had to be the
          one exception left running on phone calls and walk-ins. That&rsquo;s the problem this
          company set out to solve — and it&rsquo;s still the problem we work on every day.
        </p>
      </div>
    </Section>
  );
}
