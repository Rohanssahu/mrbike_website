import { MessageSquareHeart } from "lucide-react";

import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

import { CUSTOMER_REVIEWS } from "./mock-data";
import { ReviewCard } from "./ReviewCard";

const HEADING_ID = "customer-reviews-heading";

/**
 * Customer Reviews (Phase 4 §4). Renders reviews from `CUSTOMER_REVIEWS`
 * (Phase 2.5 §7, amended by Phase 4 §9 — no longer required to carry a
 * website-verifiable `bookingId`) — falls back to a "Coming Soon" state if
 * that list is ever emptied out again.
 */
export function CustomerReviews() {
  const featuredReviews = CUSTOMER_REVIEWS.filter((review) => review.featured);

  return (
    <Section className="bg-muted/30" aria-labelledby={HEADING_ID}>
      <SectionHeading
        id={HEADING_ID}
        eyebrow="Customer Reviews"
        title="What riders are saying"
        description="Real feedback from riders using the MR Bike Doctor app."
      />

      {featuredReviews.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredReviews.map((review) => (
            <ReviewCard key={review.id} review={review} className="w-full" />
          ))}
        </div>
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
