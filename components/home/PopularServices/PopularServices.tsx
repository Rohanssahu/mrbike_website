import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

import { POPULAR_SERVICES } from "./mock-data";
import { ServiceCard } from "./ServiceCard";

const HEADING_ID = "popular-services-heading";

/** Services (Phase 4 §4) — informational, fully data-driven grid of core services. Every card links to `/services/[service]` and its CTA reads "Learn More," never "Book Now" — booking only ever happens in the app. */
export function PopularServices() {
  return (
    <Section aria-labelledby={HEADING_ID}>
      <SectionHeading
        id={HEADING_ID}
        eyebrow="Services"
        title="Everything your bike needs, at your doorstep"
        description="From a quick oil change to a full service, our verified mechanics bring the garage to you — booked through the MR Bike Doctor app."
      />

      <ul className="mt-10 flex snap-x [scrollbar-width:none] gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden">
        {POPULAR_SERVICES.map((service) => (
          <li key={service.id} className="flex snap-start">
            <ServiceCard service={service} />
          </li>
        ))}
        <li className="flex snap-start">
          <Link
            href="/services"
            className="border-border text-foreground hover:border-primary/40 hover:bg-muted flex w-64 flex-col items-center justify-center gap-2 rounded-xl border border-dashed p-6 text-center text-sm font-medium transition-colors sm:w-auto"
          >
            View all services
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </li>
      </ul>
    </Section>
  );
}
