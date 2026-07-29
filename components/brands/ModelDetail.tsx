import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import type { BrandRecord } from "@/components/home/BrandsWeService/mock-data";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { KeyFacts } from "@/components/shared/KeyFacts";
import { QuickAnswer } from "@/components/shared/QuickAnswer";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TodoPlaceholder } from "@/components/shared/TodoPlaceholder";
import { getFaqsByTag } from "@/lib/content";

import type { BikeModelRecord } from "./mock-data";

interface ModelDetailProps {
  brand: BrandRecord;
  model: BikeModelRecord;
}

const MAINTENANCE_HEADING_ID = "model-maintenance-heading";

/** /brands/[brand]/[model] — informational model page, no pricing/booking (Phase 4 §13 item 3, extended Phase 6). */
export function ModelDetail({ brand, model }: ModelDetailProps) {
  const faqs = getFaqsByTag(`brand:${brand.slug}`);

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
          Doorstep servicing and repairs for the {brand.name} {model.name}, from a verified
          mechanic network.
        </p>

        <div className="mt-6">
          <QuickAnswer>
            {`The ${brand.name} ${model.name} uses ${brand.engineNote.toLowerCase()} with ${brand.driveType.toLowerCase()}. As with other ${brand.name} models, a general service interval of ${brand.serviceIntervalKm.min}–${brand.serviceIntervalKm.max} km is a reasonable starting point — check the owner's manual for the exact factory schedule.`}
          </QuickAnswer>
        </div>

        <div className="mt-6">
          <KeyFacts
            facts={[
              { label: "Brand", value: brand.name },
              { label: "Engine", value: brand.engineNote },
              { label: "Drive type", value: brand.driveType },
              {
                label: "Typical service interval",
                value: `${brand.serviceIntervalKm.min}–${brand.serviceIntervalKm.max} km`,
              },
            ]}
          />
        </div>
      </Section>

      <Section aria-labelledby={MAINTENANCE_HEADING_ID}>
        <SectionHeading
          id={MAINTENANCE_HEADING_ID}
          eyebrow="Maintenance"
          title={`${model.name} maintenance guidance`}
          description={`General guidance for ${brand.name}'s ${brand.engineNote.toLowerCase()}, which applies to the ${model.name} — not a model-exact factory schedule.`}
        />

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {brand.maintenanceTips.map((tip) => (
            <div key={tip} className="border-border bg-card text-muted-foreground rounded-lg border p-4 text-sm">
              {tip}
            </div>
          ))}
        </div>

        <div className="mt-6 max-w-3xl">
          <TodoPlaceholder what={`the ${brand.name} ${model.name}'s exact factory service schedule and parts costs`} />
        </div>
      </Section>

      {faqs.length > 0 && (
        <Section className="bg-muted/30">
          <FaqAccordion faqs={faqs} title={`${brand.name} FAQs`} />
        </Section>
      )}
    </>
  );
}
