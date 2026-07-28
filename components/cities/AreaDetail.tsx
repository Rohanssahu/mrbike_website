import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import type { CityRecord } from "@/components/home/CitiesWeServe/mock-data";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TodoPlaceholder } from "@/components/shared/TodoPlaceholder";

import type { AreaRecord } from "./mock-data";

interface AreaDetailProps {
  city: CityRecord;
  area: AreaRecord;
}

const LOCAL_HEADING_ID = "area-local-heading";

/** /cities/[city]/[area] — informational area page, no serviceability widget (Phase 4 §13 item 3). */
export function AreaDetail({ city, area }: AreaDetailProps) {
  return (
    <>
      <Section className="pb-0 md:pb-0" aria-labelledby="area-detail-heading">
        <Link
          href={`/cities/${city.slug}`}
          className="text-muted-foreground hover:text-foreground mb-6 inline-flex items-center gap-1 text-sm"
        >
          <ArrowLeft className="size-3.5" aria-hidden="true" />
          All {city.name} Areas
        </Link>

        <h1
          id="area-detail-heading"
          className="font-heading text-foreground text-4xl font-bold sm:text-5xl"
        >
          Bike Service in {area.name}, {city.name}
        </h1>
        <p className="text-muted-foreground mt-3 max-w-2xl text-lg">
          Doorstep bike servicing and repair for riders in {area.name}, booked through the MR Bike
          Doctor app.
        </p>
      </Section>

      <Section aria-labelledby={LOCAL_HEADING_ID}>
        <SectionHeading
          id={LOCAL_HEADING_ID}
          eyebrow="Local Coverage"
          title={`Service details for ${area.name}`}
        />
        <div className="mt-6 max-w-3xl">
          <TodoPlaceholder what={`${area.name} local coverage details`} />
        </div>
      </Section>
    </>
  );
}
