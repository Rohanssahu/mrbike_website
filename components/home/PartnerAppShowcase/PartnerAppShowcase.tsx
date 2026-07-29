"use client";

import Image from "next/image";
import { useState } from "react";

import partnerIcon from "@/assets/delerappscreenshot/deler_logo_app.png";
import featureGraphic from "@/assets/delerappscreenshot/Playstore_feature_graphiuc.png";
import { PhoneTour } from "@/components/home/AppShowcase/PhoneTour";
import { StepPanel } from "@/components/home/AppShowcase/StepPanel";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GooglePlayBadge } from "@/components/shared/StoreBadges";

import { PARTNER_APP_STEPS } from "./mock-data";

const HEADING_ID = "partner-app-showcase-heading";

/** Internal-testing Play Store link for the MR Bike Doctor Partner (garage/mechanic) app. */
export const PARTNER_ANDROID_URL = "https://play.google.com/apps/internaltest/4700941963525886328";

/**
 * Guided-tour preview of the MR Bike Doctor Partner app (garage/mechanic
 * side) — same animated-phone pattern as the customer AppShowcase, built
 * from real internal-testing screenshots, pointing garage owners to the
 * Play Store internal test track.
 */
export function PartnerAppShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section aria-labelledby={HEADING_ID} className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="from-primary-light/25 absolute inset-0 bg-gradient-to-b to-transparent" />
        <div className="bg-primary/20 absolute top-0 left-0 size-96 -translate-y-1/3 -translate-x-1/3 rounded-full blur-3xl" />
        <div className="bg-primary/10 absolute right-0 bottom-0 size-72 translate-x-1/3 translate-y-1/3 rounded-full blur-3xl" />
      </div>

      <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-center sm:gap-4">
        <Image src={partnerIcon} alt="" width={40} height={40} className="rounded-xl" aria-hidden="true" />
        <SectionHeading
          id={HEADING_ID}
          eyebrow="For Garage Partners"
          title="Own a garage? Run it with the MR Bike Doctor Partner app"
          description="Accept bookings, track every job, and collect payments — the same app our partner garages use every day, now in Play Store internal testing."
          align="center"
          className="sm:items-start sm:text-left"
        />
      </div>

      <div className="mt-12 grid items-center gap-12 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
        <div className="relative">
          <PhoneTour
            steps={PARTNER_APP_STEPS}
            activeIndex={activeIndex}
            onIndexChange={(index) => setActiveIndex(index)}
          />
          <div className="absolute -top-3 right-6 z-10 rounded-full bg-black/40 p-1 shadow-lg ring-2 ring-black/20 backdrop-blur-sm sm:right-10">
            <Image src={partnerIcon} alt="" width={32} height={32} className="rounded-full" aria-hidden="true" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 lg:items-start">
          <StepPanel steps={PARTNER_APP_STEPS} activeIndex={activeIndex} onSelect={setActiveIndex} />

          <div className="w-full max-w-md overflow-hidden rounded-2xl border border-white/10 shadow-lg">
            <Image
              src={featureGraphic}
              alt="MR Bike Doctor Partner — Grow your garage, deliver better service"
              className="h-auto w-full object-cover"
              sizes="(min-width: 768px) 448px, 100vw"
            />
          </div>

          <div className="flex flex-col items-center gap-2 lg:items-start">
            <GooglePlayBadge
              href={PARTNER_ANDROID_URL}
              eyebrow="INTERNAL TESTING ON"
              label="Google Play"
            />
            <p className="text-muted-foreground max-w-sm text-center text-sm lg:text-left">
              The Partner app is in Play Store internal testing — tap through to join as an early partner.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
