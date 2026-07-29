"use client";

import Image from "next/image";
import { useState } from "react";

import logo from "@/assets/brand/logo.png";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { siteConfig } from "@/config/site";

import { APP_STEPS } from "./mock-data";
import { PhoneTour } from "./PhoneTour";
import { StepPanel } from "./StepPanel";
import { StoreBadges } from "./StoreBadges";

const HEADING_ID = "app-showcase-heading";

/**
 * Guided-tour preview of the MR Bike Doctor app (homepage) — a single
 * animated phone that autoplays through every real screen (sign in → set
 * location → browse → track a booking → get help → manage your profile),
 * synced with plain-language step labels so a first-time visitor understands
 * the app without reading long paragraphs.
 */
export function AppShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section aria-labelledby={HEADING_ID} className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="from-primary-light/25 absolute inset-0 bg-gradient-to-b to-transparent" />
        <div className="bg-primary/20 absolute top-0 right-0 size-96 -translate-y-1/3 translate-x-1/3 rounded-full blur-3xl" />
        <div className="bg-primary/10 absolute bottom-0 left-0 size-72 -translate-x-1/3 translate-y-1/3 rounded-full blur-3xl" />
      </div>

      <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-center sm:gap-4">
        <Image src={logo} alt="" width={40} height={40} className="rounded-xl" aria-hidden="true" />
        <SectionHeading
          id={HEADING_ID}
          eyebrow="Experience the App"
          title={`See the ${siteConfig.name} app in action`}
          description="From signing in to tracking your mechanic's arrival — here's exactly what doorstep bike service looks like inside the app."
          align="center"
          className="sm:items-start sm:text-left"
        />
      </div>

      <div className="mt-12 grid items-center gap-12 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
        <div className="relative">
          <PhoneTour
            steps={APP_STEPS}
            activeIndex={activeIndex}
            onIndexChange={(index) => setActiveIndex(index)}
          />
          <div className="absolute -top-3 right-6 z-10 rounded-full bg-black/40 p-1 shadow-lg ring-2 ring-black/20 backdrop-blur-sm sm:right-10">
            <Image src={logo} alt="" width={32} height={32} className="rounded-full" aria-hidden="true" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 lg:items-start">
          <StepPanel steps={APP_STEPS} activeIndex={activeIndex} onSelect={setActiveIndex} />
          <StoreBadges />
        </div>
      </div>
    </Section>
  );
}
