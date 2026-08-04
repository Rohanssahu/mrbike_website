import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { RelatedPostsByEntity } from "@/components/blog/RelatedPostsByEntity";
import type { BrandRecord } from "@/components/home/BrandsWeService/mock-data";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { KeyFacts } from "@/components/shared/KeyFacts";
import { LinkTile } from "@/components/shared/LinkTile";
import { QuickAnswer } from "@/components/shared/QuickAnswer";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  getAllServices,
  getModelFaqs,
  getModelMaintenanceContent,
  getModelsByBrand,
} from "@/lib/content";

import type { BikeModelRecord } from "./mock-data";

interface ModelDetailProps {
  brand: BrandRecord;
  model: BikeModelRecord;
}

const MAINTENANCE_HEADING_ID = "model-maintenance-heading";
const SERVICES_HEADING_ID = "model-services-heading";

/** /brands/[brand]/[model] — informational model page, no pricing/booking (Phase 4 §13 item 3, extended Phase 6). */
export function ModelDetail({ brand, model }: ModelDetailProps) {
  const faqs = getModelFaqs(brand, model);
  const maintenance = getModelMaintenanceContent(brand, model);
  const quickAnswer = `${maintenance.focus} Exact specifications and factory intervals vary by model year and variant, so the owner's manual remains the authority.`;
  const relatedModels = getModelsByBrand(brand.slug).filter((item) => item.slug !== model.slug);
  const relatedServices = getAllServices().filter((service) =>
    ["bike-service", "engine-oil-change", "bike-repair", "bike-pickup-drop"].includes(service.slug),
  );

  return (
    <>
      <Section className="pb-0 md:pb-0" aria-labelledby="model-detail-heading">
        <Breadcrumbs
          className="mb-6"
          items={[
            { name: "Home", path: "/" },
            { name: "Brands", path: "/brands" },
            { name: brand.name, path: `/brands/${brand.slug}` },
            { name: model.name, path: `/brands/${brand.slug}/${model.slug}` },
          ]}
        />

        <Link
          href={`/brands/${brand.slug}`}
          className="text-muted-foreground hover:text-foreground mb-6 inline-flex items-center gap-1 text-sm"
        >
          <ArrowLeft className="size-3.5" aria-hidden="true" />
          All {brand.name} Models
        </Link>

        <h1
          id="model-detail-heading"
          className="font-heading text-foreground text-4xl font-bold sm:text-5xl"
        >
          {brand.name} {model.name} Service
        </h1>
        <p className="text-muted-foreground mt-3 max-w-2xl text-lg">
          Maintenance guidance, service intervals, inspection priorities, and booking links for the{" "}
          {brand.name} {model.name}.
        </p>

        <div className="mt-6">
          <QuickAnswer>{quickAnswer}</QuickAnswer>
        </div>

        <div className="mt-6">
          <KeyFacts
            facts={[
              { label: "Brand", value: brand.name },
              {
                label: "Service interval",
                value: "Check model-year owner's manual",
              },
              { label: "Guide type", value: "Maintenance planning, not specifications" },
            ]}
          />
        </div>
      </Section>

      <Section aria-labelledby={MAINTENANCE_HEADING_ID}>
        <SectionHeading
          id={MAINTENANCE_HEADING_ID}
          eyebrow="Maintenance"
          title={`${model.name} maintenance guidance`}
          description={maintenance.focus}
        />

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {brand.maintenanceTips.map((tip) => (
            <div
              key={tip}
              className="border-border bg-card text-muted-foreground rounded-lg border p-4 text-sm"
            >
              {tip}
            </div>
          ))}
        </div>

        <div className="border-border bg-card mt-8 rounded-xl border p-5">
          <h3 className="font-heading text-foreground font-semibold">Service interval guidance</h3>
          <p className="text-muted-foreground mt-2 text-sm">{maintenance.intervalNote}</p>
        </div>
      </Section>

      <Section className="bg-muted/30" aria-labelledby="model-problems-heading">
        <SectionHeading
          id="model-problems-heading"
          eyebrow="Inspection Guide"
          title={`Common maintenance problems to watch for on a ${model.name}`}
          description="These are symptom-led inspection prompts based on the wider brand category—not claims that this model has a known defect."
        />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {maintenance.commonProblems.map((problem) => (
            <li
              key={problem}
              className="border-border bg-card text-muted-foreground rounded-lg border p-4 text-sm"
            >
              {problem}
            </li>
          ))}
        </ul>
      </Section>

      <Section aria-labelledby={SERVICES_HEADING_ID}>
        <SectionHeading
          id={SERVICES_HEADING_ID}
          eyebrow="Related Services"
          title={`Services for the ${brand.name} ${model.name}`}
        />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {relatedServices.map((service) => (
            <li key={service.id}>
              <LinkTile href={`/services/${service.slug}`} label={service.name} />
            </li>
          ))}
        </ul>
      </Section>

      {relatedModels.length > 0 && (
        <Section className="bg-muted/30" aria-labelledby="related-models-heading">
          <SectionHeading
            id="related-models-heading"
            eyebrow="Related Models"
            title={`More ${brand.name} maintenance guides`}
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {relatedModels.map((relatedModel) => (
              <li key={relatedModel.id}>
                <LinkTile
                  href={`/brands/${brand.slug}/${relatedModel.slug}`}
                  label={`${brand.name} ${relatedModel.name}`}
                />
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section>
        <RelatedPostsByEntity field="relatedBrandSlugs" slug={brand.slug} />
      </Section>

      {faqs.length > 0 && (
        <Section className="bg-muted/30">
          <FaqAccordion faqs={faqs} title={`${brand.name} ${model.name} FAQs`} />
        </Section>
      )}
    </>
  );
}
