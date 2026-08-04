import { ArrowLeft, CheckCircle2, MapPin, Truck } from "lucide-react";
import Link from "next/link";

import type { CityRecord } from "@/components/home/CitiesWeServe/mock-data";
import { CUSTOMER_REVIEWS } from "@/components/home/CustomerReviews/mock-data";
import { ReviewCard } from "@/components/home/CustomerReviews/ReviewCard";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { KeyFacts } from "@/components/shared/KeyFacts";
import { LinkTile } from "@/components/shared/LinkTile";
import { QuickAnswer } from "@/components/shared/QuickAnswer";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { getAllServices } from "@/lib/content";

import type { AreaRecord } from "./mock-data";

interface AreaDetailProps {
  city: CityRecord;
  area: AreaRecord;
}

/** Unique local content for each operational Hyderabad service area. */
export function AreaDetail({ city, area }: AreaDetailProps) {
  const services = getAllServices().filter((service) =>
    area.relatedServiceSlugs.includes(service.slug),
  );
  const reviews = CUSTOMER_REVIEWS.filter((review) => review.cityName.startsWith(area.name)).slice(
    0,
    2,
  );

  return (
    <>
      <Section className="pb-0 md:pb-0" aria-labelledby="area-detail-heading">
        <Breadcrumbs
          className="mb-6"
          items={[
            { name: "Home", path: "/" },
            { name: "Cities", path: "/cities" },
            { name: city.name, path: `/cities/${city.slug}` },
            { name: area.name, path: `/cities/${city.slug}/${area.slug}` },
          ]}
        />

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
          Doorstep Bike Service in {area.name}, {city.name}
        </h1>
        <div className="mt-6 max-w-3xl">
          <QuickAnswer>{area.summary}</QuickAnswer>
        </div>
        <div className="mt-6 max-w-3xl">
          <KeyFacts
            facts={[
              { label: "Service area", value: `${area.name}, ${city.name}` },
              { label: "Availability", value: "Live — confirm address in app" },
              { label: "Booking", value: "MR Bike Doctor app" },
            ]}
          />
        </div>
      </Section>

      <Section aria-labelledby="availability-heading">
        <SectionHeading
          id="availability-heading"
          eyebrow="Service Availability"
          title={`Bike service coverage in ${area.name}`}
          description="Select your bike, service, and exact address in the app to see current availability and booking slots."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="border-border bg-card rounded-xl border p-6">
            <h3 className="font-heading text-foreground flex items-center gap-2 text-lg font-semibold">
              <MapPin className="text-primary size-5" aria-hidden="true" /> Nearby landmarks
            </h3>
            <ul className="text-muted-foreground mt-4 space-y-2 text-sm">
              {area.nearbyLandmarks.map((landmark) => (
                <li key={landmark}>• {landmark}</li>
              ))}
            </ul>
          </div>
          <div className="border-border bg-card rounded-xl border p-6">
            <h3 className="font-heading text-foreground flex items-center gap-2 text-lg font-semibold">
              <CheckCircle2 className="text-primary size-5" aria-hidden="true" /> Areas covered
            </h3>
            <ul className="text-muted-foreground mt-4 space-y-2 text-sm">
              {area.localCoverage.map((locality) => (
                <li key={locality}>• {locality}</li>
              ))}
            </ul>
            <p className="text-muted-foreground mt-4 text-xs">
              Coverage can vary by exact address and service; confirm serviceability in the app.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-muted/30" aria-labelledby="pickup-drop-heading">
        <div className="border-border bg-card rounded-xl border p-6 md:p-8">
          <Truck className="text-primary size-7" aria-hidden="true" />
          <h2
            id="pickup-drop-heading"
            className="font-heading text-foreground mt-4 text-2xl font-semibold"
          >
            Bike Pickup & Drop in {area.name}
          </h2>
          <p className="text-muted-foreground mt-3 max-w-3xl">{area.pickupDrop}</p>
          <Link
            href="/services/bike-pickup-drop"
            className="text-primary mt-4 inline-flex text-sm font-semibold hover:underline"
          >
            Learn about Bike Pickup & Drop
          </Link>
        </div>
      </Section>

      <Section aria-labelledby="related-services-heading">
        <SectionHeading
          id="related-services-heading"
          eyebrow="Related Services"
          title={`Popular bike services for ${area.name} riders`}
        />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.id}>
              <LinkTile href={`/services/${service.slug}`} label={service.name} />
            </li>
          ))}
        </ul>
      </Section>

      {reviews.length > 0 && (
        <Section className="bg-muted/30" aria-labelledby="local-reviews-heading">
          <SectionHeading
            id="local-reviews-heading"
            eyebrow="Customer Reviews"
            title={`Feedback from riders in ${area.name}`}
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} className="w-full" />
            ))}
          </div>
        </Section>
      )}

      <Section>
        <FaqAccordion faqs={area.faqs} title={`${area.name} bike service FAQs`} />
      </Section>
    </>
  );
}
