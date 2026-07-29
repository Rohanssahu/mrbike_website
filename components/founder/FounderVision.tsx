import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

const HEADING_ID = "founder-vision-heading";

/**
 * Founder's personal vision for the industry (Phase 4 §7) — distinct from
 * the company-level Vision on /about; this is personal voice, not company copy.
 */
export function FounderVision() {
  return (
    <Section aria-labelledby={HEADING_ID}>
      <SectionHeading
        id={HEADING_ID}
        eyebrow="Vision"
        title="Vision for India's Bike Service Industry"
      />
      <div className="text-muted-foreground mt-6 flex max-w-3xl flex-col gap-4 text-base">
        <p>
          I want a future where no rider has to plan their day around a trip to the workshop. Bike
          servicing in India is still largely built on walk-ins, informal trust, and a fair amount
          of guesswork about pricing and timelines — and I believe technology can change that
          without losing what already works about a good local mechanic.
        </p>
        <p>
          My vision for MR Bike Doctor is to bring structure and transparency to an industry that
          has always run on relationships and word-of-mouth, while keeping the mechanic at the
          centre of it — not replacing them, but giving them a platform that makes their work
          visible, verifiable, and easier to trust. As more cities and riders come on board, I want
          booking a doorstep service to feel as ordinary as booking a cab, with every mechanic on
          the platform verified and every service backed by a clear digital record.
        </p>
        <p>
          This is a long-term project. It starts with getting the basics right — reliable pickups,
          honest invoices, mechanics who show up when they say they will — and builds from there.
        </p>
      </div>
    </Section>
  );
}
