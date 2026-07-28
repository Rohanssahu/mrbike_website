import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import type { BrandRecord } from "@/components/home/BrandsWeService/mock-data";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TodoPlaceholder } from "@/components/shared/TodoPlaceholder";

import type { BikeModelRecord } from "./mock-data";

interface ModelDetailProps {
  brand: BrandRecord;
  model: BikeModelRecord;
}

const MAINTENANCE_HEADING_ID = "model-maintenance-heading";

/** /brands/[brand]/[model] — informational model page, no pricing/booking (Phase 4 §13 item 3). */
export function ModelDetail({ brand, model }: ModelDetailProps) {
  return (
    <>
      <Section className="pb-0 md:pb-0" aria-labelledby="model-detail-heading">
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
      </Section>

      <Section aria-labelledby={MAINTENANCE_HEADING_ID}>
        <SectionHeading
          id={MAINTENANCE_HEADING_ID}
          eyebrow="Maintenance"
          title={`${model.name} maintenance info`}
        />
        <div className="mt-6 max-w-3xl">
          <TodoPlaceholder what={`${brand.name} ${model.name} maintenance schedule and cost`} />
        </div>
      </Section>
    </>
  );
}
