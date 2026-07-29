"use client";

import { useState } from "react";

import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useMediaQuery } from "@/hooks";

import { APP_FEATURES } from "./mock-data";
import { FeatureTile } from "./FeatureTile";

const HEADING_ID = "app-features-heading";

/**
 * Auto-scrolling app-features marquee. The track renders the feature list
 * twice and loops via the shared `.marquee-track` keyframe (globals.css) so
 * the seam is invisible. Hover-pause is plain CSS; touch-pause needs JS since
 * there's no CSS equivalent of `:hover` for a press-and-hold on mobile.
 */
export function AppFeatures() {
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [touchPaused, setTouchPaused] = useState(false);

  return (
    <Section className="bg-muted/30" aria-labelledby={HEADING_ID}>
      <SectionHeading
        id={HEADING_ID}
        eyebrow="App Features"
        title="Everything you need, in one app"
        description="From the first tap to the final invoice — here's what the MR Bike Doctor app handles for you."
      />

      {reducedMotion ? (
        <div className="mx-auto mt-10 flex max-w-7xl flex-wrap justify-center gap-4">
          {APP_FEATURES.map((feature) => (
            <FeatureTile key={feature.id} feature={feature} className="w-[260px]" />
          ))}
        </div>
      ) : (
        <div className="relative mt-10 overflow-hidden">
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r to-transparent sm:w-32" />
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l to-transparent sm:w-32" />

          <div
            className="marquee-track flex w-max gap-4"
            style={touchPaused ? { animationPlayState: "paused" } : undefined}
            onTouchStart={() => setTouchPaused(true)}
            onTouchEnd={() => setTouchPaused(false)}
            onTouchCancel={() => setTouchPaused(false)}
          >
            {[...APP_FEATURES, ...APP_FEATURES].map((feature, index) => (
              <FeatureTile
                key={`${feature.id}-${index}`}
                feature={feature}
                className="w-[260px] shrink-0"
              />
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
