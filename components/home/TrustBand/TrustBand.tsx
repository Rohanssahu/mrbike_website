import { Section } from "@/components/shared/Section";
import { StatsGrid } from "@/components/shared/StatsGrid";
import { TrustBadge } from "@/components/shared/TrustBadge";

import { TRUST_STATS } from "./mock-data";

/** Trust & Numbers band (Phase 3 §6) — a compact proof strip, not a repeat of Brands/Cities/Reviews. */
export function TrustBand() {
  return (
    <Section className="py-10 md:py-14" aria-label="MR Bike Doctor by the numbers">
      <StatsGrid>
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
