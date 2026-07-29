"use client";

import { useState } from "react";
import { MessageSquareHeart } from "lucide-react";

import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useMediaQuery } from "@/hooks";

import { CUSTOMER_REVIEWS } from "./mock-data";
import { ReviewCard } from "./ReviewCard";

const HEADING_ID = "customer-reviews-heading";

/**
 * Customer Reviews (Phase 4 §4). Renders reviews from `CUSTOMER_REVIEWS`
 * (Phase 2.5 §7, amended by Phase 4 §9 — no longer required to carry a
 * website-verifiable `bookingId`) — falls back to a "Coming Soon" state if
 * that list is ever emptied out again.
 *
 * Auto-scrolls horizontally using the same `.marquee-track` keyframe as
 * `BrandsMarquee` (styles/globals.css) — the track renders the review list
 * twice and loops via `translateX(0 → -50%)` so the seam is invisible.
 */
export function CustomerReviews() {
  const featuredReviews = CUSTOMER_REVIEWS.filter((review) => review.featured);
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [touchPaused, setTouchPaused] = useState(false);

  return (
    <Section className="bg-muted/30" aria-labelledby={HEADING_ID}>
      <SectionHeading
        id={HEADING_ID}
        eyebrow="Customer Reviews"
        title="What riders are saying"
        description="Real feedback from riders using the MR Bike Doctor app."
      />

      {featuredReviews.length > 0 ? (
        reducedMotion ? (
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {featuredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        ) : (
          <div className="relative mt-10 overflow-hidden">
            <div className="from-muted/30 pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r to-transparent sm:w-32" />
            <div className="from-muted/30 pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l to-transparent sm:w-32" />

            <div
              className="reviews-marquee-track flex w-max gap-4"
              style={touchPaused ? { animationPlayState: "paused" } : undefined}
              onTouchStart={() => setTouchPaused(true)}
              onTouchEnd={() => setTouchPaused(false)}
              onTouchCancel={() => setTouchPaused(false)}
            >
              {[...featuredReviews, ...featuredReviews].map((review, index) => (
                <ReviewCard
                  key={`${review.id}-${index}`}
                  review={review}
                  className="w-72 shrink-0 sm:w-72 sm:shrink-0"
                />
              ))}
            </div>
          </div>
        )
      ) : (
        <div className="border-muted-foreground/30 bg-card/50 mt-10 flex flex-col items-center gap-3 rounded-2xl border border-dashed p-10 text-center">
          <MessageSquareHeart className="text-muted-foreground size-8" aria-hidden="true" />
          <p className="text-foreground font-semibold">Customer Reviews Coming Soon</p>
          <p className="text-muted-foreground max-w-md text-sm">
            Real reviews from MR Bike Doctor riders will appear here after launch.
          </p>
        </div>
      )}
    </Section>
  );
}
