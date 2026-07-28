import { ScrollGrid } from "@/components/shared/ScrollGrid";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

import { CITIES } from "./mock-data";
import { CityCard } from "./CityCard";

const HEADING_ID = "cities-we-serve-heading";

/**
 * Cities We Serve (Phase 3 §2) — internal-linking backbone into city/area
 * pages. Fully data-driven: adding a City record is the whole "launch" here.
 */
export function CitiesWeServe() {
  return (
    <Section className="bg-muted/30" aria-labelledby={HEADING_ID}>
      <SectionHeading
        id={HEADING_ID}
        eyebrow="Cities We Serve"
        title="Live in Hyderabad, expanding city by city"
        description="We're growing deliberately — here's where doorstep service is live today, and where we're headed next."
      />

      <ScrollGrid gridCols="sm:grid-cols-2 lg:grid-cols-4" className="mt-10">
        {CITIES.map((city) => (
          <li key={city.id} className="flex snap-start">
            <CityCard city={city} />
          </li>
        ))}
      </ScrollGrid>
    </Section>
  );
}
