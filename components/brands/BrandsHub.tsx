import { BrandCard } from "@/components/home/BrandsWeService/BrandCard";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { getAllBrands } from "@/lib/content";

const HEADING_ID = "brands-hub-heading";

/** /brands hub — every supported brand, fully data-driven (Phase 4 §13 item 3). */
export function BrandsHub() {
  const brands = getAllBrands();

  return (
    <Section aria-labelledby={HEADING_ID}>
      <SectionHeading
        id={HEADING_ID}
        eyebrow="Brands We Service"
        title="Genuine expertise, whatever you ride"
        description="Our mechanics are trained across every major two-wheeler brand on the road."
      />

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {brands.map((brand) => (
          <BrandCard key={brand.id} brand={brand} className="w-full sm:w-full" />
        ))}
      </div>
    </Section>
  );
}
