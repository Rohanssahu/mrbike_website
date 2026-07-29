import { Quote } from "lucide-react";

import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

import { FOUNDER_NAME } from "./FounderProfile";

const HEADING_ID = "founder-message-heading";

/** A short, direct message from the founder to visitors/customers (Phase 4 §7). */
export function FounderMessage() {
  return (
    <Section className="bg-muted/30" aria-labelledby={HEADING_ID}>
      <SectionHeading
        id={HEADING_ID}
        eyebrow="A Message From the Founder"
        title="Message from Founder"
      />
      <div className="border-border bg-card mt-6 max-w-3xl rounded-2xl border p-6">
        <Quote className="text-primary size-6" aria-hidden="true" />
        <div className="text-muted-foreground mt-3 flex flex-col gap-4 text-base">
          <p>
            Thank you for trusting MR Bike Doctor with something as practical — and as personal —
            as your bike. I know a bike isn&rsquo;t just transport for most people; it&rsquo;s how
            they get to work, pick up their kids, or simply move through their day, and handing it
            over for servicing takes a certain amount of trust.
          </p>
          <p>
            My commitment to you is simple: we will keep making that easier — easier to book,
            easier to track, easier to understand what you&rsquo;re paying for and why. If
            something isn&rsquo;t working the way it should, I want to hear about it, because this
            company only gets better by paying attention to what riders actually experience.
          </p>
          <p>
            We&rsquo;re still early in building this, and every rider who chooses MR Bike Doctor
            helps us understand what to improve next. Thank you for being part of that.
          </p>
          <p className="text-foreground font-semibold">— {FOUNDER_NAME}, Founder</p>
        </div>
      </div>
    </Section>
  );
}
