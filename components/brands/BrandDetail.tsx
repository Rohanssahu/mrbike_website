import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { RelatedPostsByEntity } from "@/components/blog/RelatedPostsByEntity";
import { getFaqsByTag } from "@/components/faq";
import type { BrandRecord } from "@/components/home/BrandsWeService/mock-data";
import { POPULAR_SERVICES } from "@/components/home/PopularServices/mock-data";
import { ComparisonTable } from "@/components/shared/ComparisonTable";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { LinkTile } from "@/components/shared/LinkTile";
import { QuickAnswer } from "@/components/shared/QuickAnswer";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

import type { BikeModelRecord } from "./mock-data";

interface BrandDetailProps {
  brand: BrandRecord;
  models: BikeModelRecord[];
}

const MODELS_HEADING_ID = "brand-models-heading";
const MAINTENANCE_HEADING_ID = "brand-maintenance-heading";
const SERVICES_HEADING_ID = "brand-services-heading";

/** /brands/[brand] — informational brand page, no pricing/booking (Phase 4 §13 item 3, extended Phase 6). */
export function BrandDetail({ brand, models }: BrandDetailProps) {
  const faqs = getFaqsByTag(`brand:${brand.slug}`);

  return (
    <>
      <Section className="pb-0 md:pb-0" aria-labelledby="brand-detail-heading">
        <Link
          href="/brands"
          className="text-muted-foreground hover:text-foreground mb-6 inline-flex items-center gap-1 text-sm"
        >
          <ArrowLeft className="size-3.5" aria-hidden="true" />
          All Brands
        </Link>

        <div className="flex items-start gap-4">
          <span
            aria-hidden="true"
            className="bg-muted text-foreground flex size-16 shrink-0 items-center justify-center rounded-full text-lg font-semibold"
          >
            {brand.initials}
          </span>
          <div>
            <h1
              id="brand-detail-heading"
              className="font-heading text-foreground text-4xl font-bold sm:text-5xl"
            >
              {brand.name} Service
            </h1>
            <p className="text-muted-foreground mt-3 max-w-2xl text-lg">{brand.description}</p>
          </div>
        </div>

        <div className="mt-6">
          <QuickAnswer>
            {`MR Bike Doctor services ${brand.name} motorcycles, including ${brand.engineNote.toLowerCase()}. Recommended service interval is every ${brand.serviceIntervalKm.min}–${brand.serviceIntervalKm.max} km, with ${brand.driveType.toLowerCase()} as the main recurring drivetrain maintenance point.`}
          </QuickAnswer>
        </div>
      </Section>

      {models.length > 0 && (
        <Section aria-labelledby={MODELS_HEADING_ID}>
          <SectionHeading
            id={MODELS_HEADING_ID}
            eyebrow="Popular Models"
            title={`${brand.name} models we service`}
            description="A few of the models we regularly work on — not an exhaustive list."
          />

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {models.map((model) => (
              <li key={model.id}>
                <LinkTile href={`/brands/${brand.slug}/${model.slug}`} label={model.name} />
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section className="bg-muted/30" aria-labelledby={MAINTENANCE_HEADING_ID}>
        <SectionHeading
          id={MAINTENANCE_HEADING_ID}
          eyebrow="Maintenance Guide"
          title={`Recommended maintenance for ${brand.name}`}
        />

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-foreground mb-3 text-sm font-semibold">Recommended Maintenance</h3>
            <ul className="flex flex-col gap-2">
              {brand.maintenanceTips.map((tip) => (
                <li
                  key={tip}
                  className="border-border bg-card text-muted-foreground rounded-lg border p-3 text-sm"
                >
                  {tip}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-foreground mb-3 text-sm font-semibold">Common Problems</h3>
            <ul className="flex flex-col gap-2">
              {brand.commonProblems.map((problem) => (
                <li
                  key={problem}
                  className="border-border bg-card text-muted-foreground rounded-lg border p-3 text-sm"
                >
                  {problem}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <ComparisonTable
            caption={`${brand.name} at a glance`}
            columns={[brand.name]}
            rows={[
              { label: "Engine", values: [brand.engineNote] },
              { label: "Drive type", values: [brand.driveType] },
              {
                label: "Typical service interval",
                values: [`${brand.serviceIntervalKm.min}–${brand.serviceIntervalKm.max} km`],
              },
            ]}
          />
        </div>
      </Section>

      <Section aria-labelledby={SERVICES_HEADING_ID}>
        <SectionHeading
          id={SERVICES_HEADING_ID}
          eyebrow="Available Services"
          title={`MR Bike Doctor services for ${brand.name}`}
        />
        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {POPULAR_SERVICES.map((service) => (
            <li key={service.id}>
              <LinkTile href={`/services/${service.slug}`} label={service.name} />
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-muted/30">
        <RelatedPostsByEntity field="relatedBrandSlugs" slug={brand.slug} />
      </Section>

      {faqs.length > 0 && (
        <Section>
          <FaqAccordion faqs={faqs} title={`${brand.name} FAQs`} />
        </Section>
      )}
    </>
  );
}
