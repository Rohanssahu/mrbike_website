import Image from "next/image";

import teamIllustration from "@/assets/illustrations/about/team-illustration.svg";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

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

      <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-[3fr_2fr]">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {WHAT_WE_ARE.map((point) => (
            <li key={point} className="border-border bg-card text-muted-foreground rounded-lg border p-4 text-sm">
              {point}
            </li>
          ))}
        </ul>

        <Image
          src={teamIllustration}
          alt=""
          aria-hidden="true"
          className="mx-auto w-full max-w-sm lg:max-w-none"
        />
      </div>

      <div className="text-muted-foreground mt-8 max-w-3xl space-y-4 leading-relaxed">
        <p>
          MR Bike Doctor started with a simple observation: most bike owners don&apos;t have a
          bike problem, they have a time problem. Between work, family, and everything else
          pulling at a normal day, riding across town to a service centre — and riding back later
          to collect the bike — is a chore nobody looks forward to.
        </p>
        <p>
          That gap between &ldquo;my bike needs servicing&rdquo; and &ldquo;I actually have time
          to deal with it&rdquo; is where small mechanical issues quietly turn into bigger, more
          expensive ones.
        </p>
        <p>
          MR Bike Doctor exists to close that gap. Instead of asking riders to rearrange their day
          around a workshop visit, we bring a verified mechanic to them — home, office, or
          wherever the bike is parked — through a simple booking flow in the MR Bike Doctor app,
          with clear updates and an itemized invoice at the end.
        </p>
      </div>
    </Section>
  );
}
