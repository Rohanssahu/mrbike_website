import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

interface RatingProps {
  /** Out of 5, e.g. `4.8`. */
  value: number;
  reviewCount?: number;
  size?: "sm" | "md";
  className?: string;
}

/**
 * Accessible star rating: the visual stars are decorative (`aria-hidden`) and
 * the numeric value + review count are exposed as the element's accessible
 * name, so screen readers hear "Rated 4.8 out of 5 from 128 reviews" once,
 * not five unlabeled star icons.
 */
export function Rating({ value, reviewCount, size = "sm", className }: RatingProps) {
  const filledStars = Math.round(value);
  const starSize = size === "sm" ? "size-3.5" : "size-4";
  const label =
    reviewCount != null
      ? `Rated ${value} out of 5 from ${reviewCount.toLocaleString("en-IN")} reviews`
      : `Rated ${value} out of 5`;

  return (
    <span
      className={cn("inline-flex items-center gap-1.5", className)}
      role="img"
      aria-label={label}
    >
      <span className="flex items-center gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={cn(
              starSize,
              index < filledStars ? "text-warning fill-current" : "text-muted-foreground/30",
            )}
          />
        ))}
      </span>
      <span className="text-foreground text-sm font-medium">{value.toFixed(1)}</span>
      {reviewCount != null && (
        <span className="text-muted-foreground text-sm">
          ({reviewCount.toLocaleString("en-IN")})
        </span>
      )}
    </span>
  );
}
