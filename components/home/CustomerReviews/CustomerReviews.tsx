import { ScrollGrid } from "@/components/shared/ScrollGrid";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

import { CUSTOMER_REVIEWS } from "./mock-data";
import { ReviewCard } from "./ReviewCard";

const HEADING_ID = "customer-reviews-heading";

/**
 * Customer Reviews (Phase 4 §4) — read as confirmation after the product has
 * already been explained by the sections above it. Only `featured` reviews
 * surface here, exactly as the real Review collection would be queried
 * (Phase 2.5 §7, amended by Phase 4 §9 — curated trust content, no longer
 * required to carry a website-verifiable `bookingId`). No autoplay: a
 * static, swipeable/scrollable strip only.
 */
export function CustomerReviews() {
  const featuredReviews = CUSTOMER_REVIEWS.filter((review) => review.featured);

  return (
    <Section className="bg-muted/30" aria-labelledby={HEADING_ID}>
      <SectionHeading
        id={HEADING_ID}
        eyebrow="Customer Reviews"
        title="What riders are saying"
        description="Real feedback from riders using the MR Bike Doctor app across Hyderabad."
      />

      <ScrollGrid gridCols="sm:grid-cols-2 lg:grid-cols-3" className="mt-10">
        {featuredReviews.map((review) => (
          <li key={review.id} className="flex snap-start">
            <ReviewCard review={review} />
          </li>
        ))}
      </ScrollGrid>
    </Section>
  );
}
