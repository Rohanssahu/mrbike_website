import { ArrowLeft, CheckCircle2, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import urbanServiceIllustration from "@/assets/illustrations/cities/urban-service.svg";
import { RelatedPostsByEntity } from "@/components/blog/RelatedPostsByEntity";
import type { CityRecord } from "@/components/home/CitiesWeServe/mock-data";
import { CUSTOMER_REVIEWS } from "@/components/home/CustomerReviews/mock-data";
import { ReviewCard } from "@/components/home/CustomerReviews/ReviewCard";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { KeyFacts } from "@/components/shared/KeyFacts";
import { LinkTile } from "@/components/shared/LinkTile";
import { QuickAnswer } from "@/components/shared/QuickAnswer";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { getAllBrands, getAllServices, getFaqsByTag } from "@/lib/content";
import { cn } from "@/lib/utils";

import type { AreaRecord } from "./mock-data";

interface CityDetailProps {
  city: CityRecord;
  areas: AreaRecord[];
}

const AREAS_HEADING_ID = "city-areas-heading";
const SERVICES_HEADING_ID = "city-services-heading";
const BRANDS_HEADING_ID = "city-brands-heading";

/** /cities/[city] — informational city page, no serviceability widget (Phase 4 §13 item 3, extended Phase 6). */
export function CityDetail({ city, areas }: CityDetailProps) {
  const isLive = city.status === "live";
  const StatusIcon = isLive ? CheckCircle2 : Clock;
  const faqs = getFaqsByTag(`city:${city.slug}`);
  const services = getAllServices();
  const brands = getAllBrands();
  const reviews = CUSTOMER_REVIEWS.filter((review) =>
    review.cityName.endsWith(`, ${city.name}`),
  ).slice(0, 3);

  return (
    <>
      <Section
        className="relative overflow-hidden pb-0 md:pb-0"
        aria-labelledby="city-detail-heading"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <Image
            src={urbanServiceIllustration}
            alt=""
            className="absolute top-1/2 right-0 w-full max-w-md -translate-y-1/2 opacity-[0.07] sm:max-w-lg"
          />
        </div>

        <Breadcrumbs
          className="mb-6"
          items={[
            { name: "Home", path: "/" },
            { name: "Cities", path: "/cities" },
            { name: city.name, path: `/cities/${city.slug}` },
          ]}
        />

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
            Doorstep Bike Service in {city.name}
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

        <div className="mt-6 max-w-2xl">
          <QuickAnswer>
            {isLive
              ? `MR Bike Doctor provides doorstep bike servicing, repairs, roadside help, and Bike Pickup & Drop across listed areas of ${city.name}, ${city.state}. Choose a service and enter your exact address in the app to confirm current availability.`
              : `MR Bike Doctor isn't live in ${city.name}, ${city.state} yet. The app is expanding city by city — download it to get notified the moment doorstep service launches here.`}
          </QuickAnswer>
        </div>

        <div className="mt-6 max-w-2xl">
          <KeyFacts
            facts={[
              { label: "State", value: city.state },
              { label: "Status", value: isLive ? "Live" : "Coming Soon" },
              ...(isLive ? [{ label: "Areas covered", value: `${areas.length}+` }] : []),
            ]}
          />
        </div>
      </Section>

      {isLive && areas.length > 0 && (
        <Section aria-labelledby={AREAS_HEADING_ID}>
          <SectionHeading
            id={AREAS_HEADING_ID}
            eyebrow="Areas We Serve"
            title={`${city.name} areas currently listed for service`}
            description="Select your area for nearby landmarks, local availability guidance, pickup and drop information, services, reviews, and FAQs."
          />

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <li key={area.id}>
                <LinkTile href={`/cities/${city.slug}/${area.slug}`} label={area.name} />
              </li>
            ))}
          </ul>

          <p className="text-muted-foreground mt-8 max-w-3xl text-sm">
            Serviceability and time slots depend on the exact address and selected job. Confirm both
            in the app before booking.
          </p>
        </Section>
      )}

      {isLive && (
        <>
          <Section className="bg-muted/30" aria-labelledby={SERVICES_HEADING_ID}>
            <SectionHeading
              id={SERVICES_HEADING_ID}
              eyebrow="Popular Services"
              title={`Popular bike services in ${city.name}`}
            />
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <LinkTile href={`/services/${service.slug}`} label={service.name} />
                </li>
              ))}
            </ul>
          </Section>

          <Section aria-labelledby={BRANDS_HEADING_ID}>
            <SectionHeading
              id={BRANDS_HEADING_ID}
              eyebrow="Brands We Service"
              title={`Bike brands serviced in ${city.name}`}
            />
            <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {brands.map((brand) => (
                <li key={brand.id}>
                  <LinkTile href={`/brands/${brand.slug}`} label={brand.name} />
                </li>
              ))}
            </ul>
          </Section>

          <Section className="bg-muted/30" aria-labelledby="city-pickup-drop-heading">
            <SectionHeading
              id="city-pickup-drop-heading"
              eyebrow="Pickup & Drop"
              title={`Bike Pickup & Drop in ${city.name}`}
              description="For work that requires a workshop visit, choose Bike Pickup & Drop and enter your address in the app to check availability."
            />
            <Link
              href="/services/bike-pickup-drop"
              className="text-primary mt-6 inline-flex text-sm font-semibold hover:underline"
            >
              View Bike Pickup & Drop
            </Link>
          </Section>

          {reviews.length > 0 && (
            <Section aria-labelledby="city-reviews-heading">
              <SectionHeading
                id="city-reviews-heading"
                eyebrow="Customer Reviews"
                title={`What ${city.name} riders say`}
              />
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} className="w-full" />
                ))}
              </div>
            </Section>
          )}

          <Section className="bg-muted/30">
            <RelatedPostsByEntity field="relatedCitySlugs" slug={city.slug} />
          </Section>

          {faqs.length > 0 && (
            <Section>
              <FaqAccordion faqs={faqs} title={`${city.name} FAQs`} />
            </Section>
          )}
        </>
      )}
    </>
  );
}
