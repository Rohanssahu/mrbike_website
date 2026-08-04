import { ArrowLeft, BadgeCheck, Clock, FileCheck2, ReceiptText, ShieldCheck } from "lucide-react";
import Link from "next/link";

import { RelatedPostsByEntity } from "@/components/blog/RelatedPostsByEntity";
import { ServiceCard } from "@/components/home/PopularServices/ServiceCard";
import type { ServiceRecord } from "@/components/home/PopularServices/mock-data";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ComparisonTable } from "@/components/shared/ComparisonTable";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { HowToSteps } from "@/components/shared/HowToSteps";
import { KeyFacts } from "@/components/shared/KeyFacts";
import { QuickAnswer } from "@/components/shared/QuickAnswer";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { getComparedService, getServiceFaqs, getServiceProcess } from "@/lib/content";

interface ServiceDetailProps {
  service: ServiceRecord;
  related: ServiceRecord[];
}

const INCLUDES_HEADING_ID = "service-includes-heading";
const RELATED_HEADING_ID = "related-services-heading";

/** /services/[service] — informational detail page, no pricing/booking (Phase 4 §13 item 3/Phase 6). */
export function ServiceDetail({ service, related }: ServiceDetailProps) {
  const Icon = service.icon;
  const comparedService = getComparedService(service);
  const faqs = getServiceFaqs(service);
  const process = getServiceProcess(service);

  return (
    <>
      <Section className="pb-0 md:pb-0" aria-labelledby="service-detail-heading">
        <Breadcrumbs
          className="mb-6"
          items={[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.name, path: `/services/${service.slug}` },
          ]}
        />

        <Link
          href="/services"
          className="text-muted-foreground hover:text-foreground mb-6 inline-flex items-center gap-1 text-sm"
        >
          <ArrowLeft className="size-3.5" aria-hidden="true" />
          All Services
        </Link>

        <div className="flex items-start gap-4">
          <span className="bg-primary/10 text-primary flex size-14 shrink-0 items-center justify-center rounded-xl">
            <Icon className="size-7" aria-hidden="true" />
          </span>
          <div>
            <h1
              id="service-detail-heading"
              className="font-heading text-foreground text-4xl font-bold sm:text-5xl"
            >
              {service.name}
            </h1>
            <p className="text-muted-foreground mt-2 flex items-center gap-1 text-sm">
              <Clock className="size-4" aria-hidden="true" />
              Typically {service.durationMinutes.min}–{service.durationMinutes.max} minutes
            </p>
          </div>
        </div>

        <div className="mt-6">
          <QuickAnswer>{service.quickAnswer}</QuickAnswer>
        </div>

        <div className="mt-6">
          <KeyFacts
            facts={[
              {
                label: "Typical duration",
                value: `${service.durationMinutes.min}–${service.durationMinutes.max} min`,
              },
              { label: "Price range", value: "Shown in app before booking" },
              { label: "Warranty", value: "Terms confirmed before booking" },
              { label: "What's included", value: `${service.whatsIncluded.length} checks/tasks` },
              ...(service.aliases && service.aliases.length > 0
                ? [{ label: "Also known as", value: service.aliases.join(", ") }]
                : []),
            ]}
          />
        </div>
      </Section>

      <Section className="bg-muted/30" aria-labelledby="service-price-parts-heading">
        <SectionHeading
          id="service-price-parts-heading"
          eyebrow="Price, Parts & Warranty"
          title={`What to confirm before ${service.name}`}
          description="These details can vary by bike, diagnosis, and replacement part, so the page does not publish an invented price or universal warranty period."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="border-border bg-card rounded-xl border p-5">
            <ReceiptText className="text-primary size-6" aria-hidden="true" />
            <h3 className="font-heading text-foreground mt-3 font-semibold">Price range</h3>
            <p className="text-muted-foreground mt-2 text-sm">
              The app shows the applicable price before confirmation. The final amount can depend on
              the bike, inspection findings, and approved parts.
            </p>
          </div>
          <div className="border-border bg-card rounded-xl border p-5">
            <BadgeCheck className="text-primary size-6" aria-hidden="true" />
            <h3 className="font-heading text-foreground mt-3 font-semibold">Genuine Parts</h3>
            <p className="text-muted-foreground mt-2 text-sm">
              When replacement parts are needed, confirm the brand, specification, and price before
              approving fitment. No unverified universal parts claim is made on this page.
            </p>
          </div>
          <div className="border-border bg-card rounded-xl border p-5">
            <ShieldCheck className="text-primary size-6" aria-hidden="true" />
            <h3 className="font-heading text-foreground mt-3 font-semibold">Warranty</h3>
            <p className="text-muted-foreground mt-2 text-sm">
              Warranty coverage can vary by service and replacement part. Review the applicable
              terms in the app or with support before approving the work.
            </p>
          </div>
        </div>
      </Section>

      <Section aria-labelledby={INCLUDES_HEADING_ID}>
        <SectionHeading
          id={INCLUDES_HEADING_ID}
          eyebrow="What's Included"
          title="What this service covers"
          description={service.longDescription}
        />
        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {service.whatsIncluded.map((item) => (
            <li
              key={item}
              className="border-border bg-card text-muted-foreground rounded-lg border p-4 text-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <HowToSteps steps={process} title={`How ${service.name} Works`} />
      </Section>

      <Section className="bg-muted/30" aria-labelledby="service-trust-heading">
        <SectionHeading
          id="service-trust-heading"
          eyebrow="Service Trust"
          title="Clear checks before and after the work"
          description="The service journey is designed to keep the mechanic, scope, price, and completed work visible to the rider."
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: ShieldCheck,
              title: "Verified mechanic",
              text: "Mechanics are checked before joining the service network.",
            },
            {
              icon: ReceiptText,
              title: "Upfront pricing",
              text: "Review the displayed price before confirming the booking.",
            },
            {
              icon: BadgeCheck,
              title: "Work approval",
              text: "Confirm additional work or parts before they are fitted.",
            },
            {
              icon: FileCheck2,
              title: "Digital record",
              text: "Completed service information is retained in the app.",
            },
          ].map(({ icon: TrustIcon, title, text }) => (
            <li key={title} className="border-border bg-card rounded-xl border p-5">
              <TrustIcon className="text-primary size-6" aria-hidden="true" />
              <h3 className="font-heading text-foreground mt-3 font-semibold">{title}</h3>
              <p className="text-muted-foreground mt-2 text-sm">{text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {comparedService && (
        <Section aria-label={`${service.name} vs ${comparedService.name}`}>
          <h2 className="font-heading text-foreground mb-4 text-xl font-semibold">
            {service.name} vs. {comparedService.name}
          </h2>
          <ComparisonTable
            columns={[service.name, comparedService.name]}
            rows={[
              {
                label: "Typical duration",
                values: [
                  `${service.durationMinutes.min}–${service.durationMinutes.max} min`,
                  `${comparedService.durationMinutes.min}–${comparedService.durationMinutes.max} min`,
                ],
              },
              {
                label: "What's included",
                values: [
                  `${service.whatsIncluded.length} checks/tasks`,
                  `${comparedService.whatsIncluded.length} checks/tasks`,
                ],
              },
              {
                label: "Best for",
                values: [service.shortDescription, comparedService.shortDescription],
              },
            ]}
          />
        </Section>
      )}

      {faqs.length > 0 && (
        <Section className="bg-muted/30">
          <FaqAccordion faqs={faqs} title={`${service.name} FAQs`} />
        </Section>
      )}

      <Section>
        <RelatedPostsByEntity field="relatedServiceSlugs" slug={service.slug} />
      </Section>

      {related.length > 0 && (
        <Section className="bg-muted/30" aria-labelledby={RELATED_HEADING_ID}>
          <SectionHeading
            id={RELATED_HEADING_ID}
            eyebrow="Related Services"
            title="You might also need"
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
