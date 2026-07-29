import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

import { BrandsMarquee } from "./BrandsMarquee";

const HEADING_ID = "brands-we-service-heading";

/**
 * Brands We Service (Phase 3 §2) — serves brand-name search intent,
 * reassures brand loyalists. The marquee track bleeds edge-to-edge (it
 * intentionally sits outside `Container`) while the heading stays in the
 * normal padded content width, so `Section` isn't used here.
 */
export function BrandsWeService() {
  return (
    <section aria-labelledby={HEADING_ID} className="py-16 md:py-24">
      <Container>
        <SectionHeading
          id={HEADING_ID}
          eyebrow="Brands We Service"
          title="Genuine expertise, whatever you ride"
          description="Our mechanics are trained across every major two-wheeler brand on the road in Hyderabad."
        />
      </Container>

      <div className="mt-10">
        <BrandsMarquee />
      </div>
    </section>
  );
}
