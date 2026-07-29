import Image from "next/image";

import technologyIllustration from "@/assets/illustrations/about/technology-illustration.svg";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

const HEADING_ID = "mission-heading";

/** Mission (Phase 4 §6) — the problem being solved, owner-supplied. */
export function Mission() {
  return (
    <Section aria-labelledby={HEADING_ID}>
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[3fr_2fr]">
        <div>
          <SectionHeading id={HEADING_ID} eyebrow="Mission" title="Why MR Bike Doctor exists" />
          <div className="text-muted-foreground mt-6 max-w-3xl space-y-4 leading-relaxed">
            <p>
              Getting a bike serviced shouldn&apos;t cost half a Saturday. Yet for most riders,
              that&apos;s exactly what it takes — finding time to drop the bike off, waiting
              around or arranging a second trip, and hoping the mechanic actually did what they
              said they would.
            </p>
            <p>
              We built MR Bike Doctor because that friction is avoidable. With a smartphone in
              every rider&apos;s pocket, there&apos;s no reason bike servicing should still run on
              walk-ins and word-of-mouth — it can work the way any other modern service does: book
              it, track it, and get on with your day.
            </p>
            <p>
              Our mission is to make quality bike servicing as easy to access as any app-based
              service, without asking riders to compromise on trust or transparency to get there.
            </p>
          </div>
        </div>

        <Image
          src={technologyIllustration}
          alt=""
          aria-hidden="true"
          className="mx-auto w-full max-w-sm lg:max-w-none"
        />
      </div>
    </Section>
  );
}
