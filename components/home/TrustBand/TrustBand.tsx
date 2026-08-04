import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StatsGrid } from "@/components/shared/StatsGrid";
import { TrustBadge } from "@/components/shared/TrustBadge";

import { TRUST_STATS } from "./mock-data";

/** Trust & Numbers band (Phase 3 §6) — a compact proof strip, not a repeat of Brands/Cities/Reviews. */
export function TrustBand() {
  return (
    <Section className="py-10 md:py-14" aria-labelledby="homepage-trust-heading">
      <SectionHeading
        id="homepage-trust-heading"
        eyebrow="Built for Bike Owners"
        title="Reliable bike care, without the garage runaround"
        description="Choose the service your bike needs, get support for leading motorcycle brands, and manage the job through one app."
      />
      <StatsGrid className="mt-10">
        {TRUST_STATS.map((stat) => (
          <TrustBadge
            key={stat.id}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
            sublabel={stat.sublabel}
          />
        ))}
      </StatsGrid>
    </Section>
  );
}
