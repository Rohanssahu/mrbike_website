import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import type { BrandRecord } from "@/components/home/BrandsWeService/mock-data";
import { LinkTile } from "@/components/shared/LinkTile";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

import type { BikeModelRecord } from "./mock-data";

interface BrandDetailProps {
  brand: BrandRecord;
  models: BikeModelRecord[];
}

const MODELS_HEADING_ID = "brand-models-heading";

/** /brands/[brand] — informational brand page, no pricing/booking (Phase 4 §13 item 3). */
export function BrandDetail({ brand, models }: BrandDetailProps) {
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
    </>
  );
}
