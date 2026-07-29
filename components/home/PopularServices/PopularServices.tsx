"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useMediaQuery } from "@/hooks";

import { POPULAR_SERVICES } from "./mock-data";
import { ServiceCard } from "./ServiceCard";

const HEADING_ID = "popular-services-heading";

function ViewAllCard() {
  return (
    <Link
      href="/services"
      className="border-border text-foreground hover:border-primary/40 hover:bg-muted flex w-64 shrink-0 flex-col items-center justify-center gap-2 rounded-xl border border-dashed p-6 text-center text-sm font-medium transition-colors"
    >
      View all services
      <ArrowRight className="size-4" aria-hidden="true" />
    </Link>
  );
}

/**
 * Services (Phase 4 §4) — informational, fully data-driven list of core
 * services. Every card links to `/services/[service]` and its CTA reads
 * "Learn More," never "Book Now" — booking only ever happens in the app.
 *
 * Auto-scrolls horizontally using the same loop technique as
 * `CustomerReviews`/`BrandsMarquee` (styles/globals.css) — the track renders
 * the service list (plus the "view all" card) twice and loops via
 * `translateX(0 → -50%)` so the seam is invisible.
 */
export function PopularServices() {
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [touchPaused, setTouchPaused] = useState(false);

  return (
    <Section aria-labelledby={HEADING_ID}>
      <SectionHeading
        id={HEADING_ID}
        eyebrow="Services"
        title="Everything your bike needs, at your doorstep"
        description="From a quick oil change to a full service, our verified mechanics bring the garage to you — booked through the MR Bike Doctor app."
      />

      {reducedMotion ? (
        <ul className="mt-10 flex flex-wrap justify-center gap-4">
          {POPULAR_SERVICES.map((service) => (
            <li key={service.id} className="flex">
              <ServiceCard service={service} />
            </li>
          ))}
          <li className="flex">
            <ViewAllCard />
          </li>
        </ul>
      ) : (
        <div className="relative mt-10 overflow-hidden">
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r to-transparent sm:w-32" />
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l to-transparent sm:w-32" />

          <div
            className="services-marquee-track flex w-max gap-4"
            style={touchPaused ? { animationPlayState: "paused" } : undefined}
            onTouchStart={() => setTouchPaused(true)}
            onTouchEnd={() => setTouchPaused(false)}
            onTouchCancel={() => setTouchPaused(false)}
          >
            {[0, 1].flatMap((copy) => [
              ...POPULAR_SERVICES.map((service) => (
                <ServiceCard key={`${service.id}-${copy}`} service={service} className="w-64 shrink-0" />
              )),
              <ViewAllCard key={`view-all-${copy}`} />,
            ])}
          </div>
        </div>
      )}
    </Section>
  );
}
