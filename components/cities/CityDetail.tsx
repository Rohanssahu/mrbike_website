import { ArrowLeft, ArrowRight, CheckCircle2, Clock } from "lucide-react";
import Link from "next/link";

import type { CityRecord } from "@/components/home/CitiesWeServe/mock-data";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TodoPlaceholder } from "@/components/shared/TodoPlaceholder";
import { cn } from "@/lib/utils";

import type { AreaRecord } from "./mock-data";

interface CityDetailProps {
  city: CityRecord;
  areas: AreaRecord[];
}

const AREAS_HEADING_ID = "city-areas-heading";

/** /cities/[city] — informational city page, no serviceability widget (Phase 4 §13 item 3). */
export function CityDetail({ city, areas }: CityDetailProps) {
  const isLive = city.status === "live";
  const StatusIcon = isLive ? CheckCircle2 : Clock;

  return (
    <>
      <Section className="pb-0 md:pb-0" aria-labelledby="city-detail-heading">
        <Link
          href="/cities"
          className="text-muted-foreground hover:text-foreground mb-6 inline-flex items-center gap-1 text-sm"
        >
          <ArrowLeft className="size-3.5" aria-hidden="true" />
          All Cities
        </Link>

        <div className="flex flex-wrap items-center gap-3">
          <h1
            id="city-detail-heading"
            className="font-heading text-foreground text-4xl font-bold sm:text-5xl"
          >
            Bike Service in {city.name}
          </h1>
          <Badge
            variant="outline"
            className={cn(
              "gap-1",
              isLive
                ? "border-success/30 bg-success/15 text-success"
                : "border-warning/30 bg-warning/15 text-warning",
            )}
          >
            <StatusIcon className="size-3.5" aria-hidden="true" />
            {isLive ? "Live" : "Coming Soon"}
          </Badge>
        </div>

        <p className="text-muted-foreground mt-3 max-w-2xl text-lg">
          {isLive
            ? `Doorstep bike servicing and repair, booked through the MR Bike Doctor app, across ${city.name}, ${city.state}.`
            : `MR Bike Doctor isn't live in ${city.name}, ${city.state} yet — download the app to get notified when doorstep service launches here.`}
        </p>
      </Section>

      {isLive && areas.length > 0 && (
        <Section aria-labelledby={AREAS_HEADING_ID}>
          <SectionHeading
            id={AREAS_HEADING_ID}
            eyebrow="Areas We Serve"
            title={`A few of the areas we currently serve in ${city.name}`}
          />

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <li key={area.id}>
                <Link
                  href={`/cities/${city.slug}/${area.slug}`}
                  className="group border-border bg-card hover:border-primary/40 flex items-center justify-between rounded-lg border p-4 text-sm transition-colors hover:shadow-sm"
                >
                  <span className="font-heading text-foreground font-semibold">{area.name}</span>
                  <ArrowRight
                    className="text-muted-foreground group-hover:text-primary size-4"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 max-w-3xl">
            <TodoPlaceholder what={`${city.name} service coverage details`} />
          </div>
        </Section>
      )}
    </>
  );
}
