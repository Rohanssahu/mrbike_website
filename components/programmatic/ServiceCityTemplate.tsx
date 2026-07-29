import type { CityRecord, FaqRecord, ServiceRecord } from "@/lib/content";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { KeyFacts } from "@/components/shared/KeyFacts";
import { QuickAnswer } from "@/components/shared/QuickAnswer";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

import { buildServiceCityPath } from "./eligibility";

interface ServiceCityTemplateProps {
  service: ServiceRecord;
  city: CityRecord;
  faqs: FaqRecord[];
}

/**
 * Programmatic SEO template (Phase 4 §17, Phase 7) — "{Service} in {City}".
 * **Not wired to any `app/` route** — same status and activation path as
 * `BrandCityTemplate` (see that file's doc comment): no combination is
 * currently eligible per `isServiceCityEligible()`
 * (components/programmatic/eligibility.ts), so no page is generated from
 * this template yet.
 */
export function ServiceCityTemplate({ service, city, faqs }: ServiceCityTemplateProps) {
  const Icon = service.icon;
  const path = buildServiceCityPath(service.slug, city.slug);

  return (
    <>
      <Section className="pb-0 md:pb-0" aria-labelledby="service-city-heading">
        <Breadcrumbs
          className="mb-6"
          items={[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.name, path: `/services/${service.slug}` },
            { name: `${service.name} in ${city.name}`, path },
          ]}
        />

        <div className="flex items-start gap-4">
          <span className="bg-primary/10 text-primary flex size-14 shrink-0 items-center justify-center rounded-xl">
            <Icon className="size-7" aria-hidden="true" />
          </span>
          <h1
            id="service-city-heading"
            className="font-heading text-foreground text-4xl font-bold sm:text-5xl"
          >
            {service.name} in {city.name}
          </h1>
        </div>

        <div className="mt-6">
          <QuickAnswer>
            {`${service.quickAnswer} Available as a doorstep visit in ${city.name}, ${city.state}, booked through the MR Bike Doctor app.`}
          </QuickAnswer>
        </div>

        <div className="mt-6">
          <KeyFacts
            facts={[
              { label: "Service", value: service.name },
              { label: "City", value: `${city.name}, ${city.state}` },
              {
                label: "Typical duration",
                value: `${service.durationMinutes.min}–${service.durationMinutes.max} min`,
              },
            ]}
          />
        </div>
      </Section>

      <Section aria-labelledby="service-city-includes-heading">
        <SectionHeading
          id="service-city-includes-heading"
          eyebrow="What's Included"
          title={`What ${service.name} covers in ${city.name}`}
          description={service.longDescription}
        />
        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {service.whatsIncluded.map((item) => (
            <li key={item} className="border-border bg-card text-muted-foreground rounded-lg border p-4 text-sm">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {faqs.length > 0 && (
        <Section className="bg-muted/30">
          <FaqAccordion faqs={faqs} title={`${service.name} in ${city.name} — FAQs`} />
        </Section>
      )}
    </>
  );
}
