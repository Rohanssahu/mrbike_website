export interface ReviewRecord {
  id: string;
  authorName: string;
  rating: number;
  bodyText: string;
  serviceName: string;
  cityName: string;
  /** ISO date string. */
  createdAt: string;
  featured: boolean;
}

/**
 * Intentionally empty. This previously held fabricated reviewer names and
 * quotes, which is exactly the kind of fake testimonial the site's
 * zero-fabrication rule forbids — removed entirely in the Phase 5F
 * production cleanup, not just hidden from the UI. `CustomerReviews.tsx`
 * renders a "Coming Soon" state while this is empty. Populate with real
 * reviews (Play Store export or backend review data) to bring the section
 * back.
 */
export const CUSTOMER_REVIEWS: ReviewRecord[] = [];
