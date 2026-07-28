import { Section } from "@/components/shared/Section";

import { PendingLegalReview } from "./PendingLegalReview";

interface LegalHeroProps {
  title: string;
  intro: string;
}

/** Shared hero for legal/policy pages — the effective date is owner-supplied, never guessed. */
export function LegalHero({ title, intro }: LegalHeroProps) {
  return (
    <Section className="pb-0 md:pb-0" aria-labelledby="legal-hero-heading">
      <div className="max-w-3xl">
        <h1
          id="legal-hero-heading"
          className="font-heading text-foreground text-4xl font-bold sm:text-5xl"
        >
          {title}
        </h1>
        <p className="text-muted-foreground mt-4 text-lg">{intro}</p>
        <div className="mt-6 max-w-md">
          <PendingLegalReview what="the effective/last-updated date" />
        </div>
      </div>
    </Section>
  );
}
