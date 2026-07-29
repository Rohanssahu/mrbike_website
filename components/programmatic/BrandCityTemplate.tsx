import type { BrandRecord, CityRecord, FaqRecord } from "@/lib/content";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ComparisonTable } from "@/components/shared/ComparisonTable";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { KeyFacts } from "@/components/shared/KeyFacts";
import { QuickAnswer } from "@/components/shared/QuickAnswer";
import { Section } from "@/components/shared/Section";

import { buildBrandCityPath } from "./eligibility";

interface BrandCityTemplateProps {
  brand: BrandRecord;
  city: CityRecord;
  faqs: FaqRecord[];
}

/**
 * Programmatic SEO template (Phase 4 §17, Phase 7) — "{Brand} Service in
 * {City}". **Not wired to any `app/` route.** Prepared per the task's
 * "templates only, do not generate pages" instruction: the shape is ready,
 * but no combination in this codebase currently passes
 * `isBrandCityEligible()` (components/programmatic/eligibility.ts), so
 * generating real pages from it today would violate Section 17's doorway-
 * page guardrail.
 *
 * To go live for a real combination once one becomes eligible: create
 * `app/(marketing)/brands/[brand]/in/[city]/page.tsx`, drive
 * `generateStaticParams` from `getEligibleBrandCityCombos()`, and render
 * this component — mirroring the existing `/brands/[brand]/page.tsx`
 * pattern one join deeper.
 */
export function BrandCityTemplate({ brand, city, faqs }: BrandCityTemplateProps) {
  const path = buildBrandCityPath(brand.slug, city.slug);

  return (
    <>
      <Section className="pb-0 md:pb-0" aria-labelledby="brand-city-heading">
        <Breadcrumbs
          className="mb-6"
          items={[
            { name: "Home", path: "/" },
            { name: "Brands", path: "/brands" },
            { name: brand.name, path: `/brands/${brand.slug}` },
            { name: `${brand.name} Service in ${city.name}`, path },
          ]}
        />

        <h1 id="brand-city-heading" className="font-heading text-foreground text-4xl font-bold sm:text-5xl">
          {brand.name} Service in {city.name}
        </h1>

        <div className="mt-6">
          <QuickAnswer>
            {`MR Bike Doctor services ${brand.name} motorcycles in ${city.name}, ${city.state} — doorstep, booked entirely through the app. Recommended service interval is every ${brand.serviceIntervalKm.min}–${brand.serviceIntervalKm.max} km.`}
          </QuickAnswer>
        </div>

        <div className="mt-6">
          <KeyFacts
            facts={[
              { label: "Brand", value: brand.name },
              { label: "City", value: `${city.name}, ${city.state}` },
              {
                label: "Typical service interval",
                value: `${brand.serviceIntervalKm.min}–${brand.serviceIntervalKm.max} km`,
              },
            ]}
          />
        </div>
      </Section>

      <Section aria-label={`${brand.name} at a glance in ${city.name}`}>
        <ComparisonTable
          caption={`${brand.name} in ${city.name}`}
          columns={[brand.name]}
          rows={[
            { label: "Engine", values: [brand.engineNote] },
            { label: "Drive type", values: [brand.driveType] },
          ]}
        />
      </Section>

      {faqs.length > 0 && (
        <Section className="bg-muted/30">
          <FaqAccordion faqs={faqs} title={`${brand.name} in ${city.name} — FAQs`} />
        </Section>
      )}
    </>
  );
}
