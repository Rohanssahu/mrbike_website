import { ScrollGrid } from "@/components/shared/ScrollGrid";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

import { BrandCard } from "./BrandCard";
import { BRANDS } from "./mock-data";

const HEADING_ID = "brands-we-service-heading";

/** Brands We Service (Phase 3 §2) — serves brand-name search intent, reassures brand loyalists. */
export function BrandsWeService() {
  return (
    <Section aria-labelledby={HEADING_ID}>
      <SectionHeading
        id={HEADING_ID}
        eyebrow="Brands We Service"
        title="Genuine expertise, whatever you ride"
        description="Our mechanics are trained across every major two-wheeler brand on the road in Hyderabad."
      />

      <ScrollGrid gridCols="sm:grid-cols-4" className="mt-10">
        {BRANDS.map((brand) => (
          <li key={brand.id} className="flex snap-start">
            <BrandCard brand={brand} />
          </li>
        ))}
      </ScrollGrid>
    </Section>
  );
}
