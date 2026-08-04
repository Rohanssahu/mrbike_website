import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { RelatedPostsByEntity } from "@/components/blog/RelatedPostsByEntity";
import { BRAND_LOGOS } from "@/components/home/BrandsWeService/brandLogos";
import type { BrandRecord } from "@/components/home/BrandsWeService/mock-data";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ComparisonTable } from "@/components/shared/ComparisonTable";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { LinkTile } from "@/components/shared/LinkTile";
import { QuickAnswer } from "@/components/shared/QuickAnswer";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { getAllServices, getBrandFaqs, getFaqsByTag } from "@/lib/content";

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
  const faqs = [...getFaqsByTag(`brand:${brand.slug}`), ...getBrandFaqs(brand)];
  const services = getAllServices();
  const logo = BRAND_LOGOS[brand.slug];

  return (
    <>
      <Section className="pb-0 md:pb-0" aria-labelledby="brand-detail-heading">
        <Breadcrumbs
          className="mb-6"
          items={[
            { name: "Home", path: "/" },
            { name: "Brands", path: "/brands" },
            { name: brand.name, path: `/brands/${brand.slug}` },
          ]}
        />

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
            className="bg-muted flex size-16 shrink-0 items-center justify-center rounded-full p-3"
          >
            {logo ? (
              <Image src={logo} alt="" className="size-full object-contain" />
            ) : (
              <span className="text-foreground text-lg font-semibold">{brand.initials}</span>
            )}
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
            {`MR Bike Doctor provides maintenance information and service booking for ${brand.name} motorcycles. This guide covers common upkeep priorities across the brand's range; use the owner's manual for the exact model-year specifications and factory schedule.`}
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
                label: "General planning interval",
                values: [
                  `${brand.serviceIntervalKm.min.toLocaleString("en-IN")}–${brand.serviceIntervalKm.max.toLocaleString("en-IN")} km — verify against the model-year manual`,
                ],
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
          {services.map((service) => (
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
