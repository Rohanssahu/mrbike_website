import { Quote } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Rating } from "@/components/shared/Rating";
import { cn } from "@/lib/utils";
import { formatDate } from "@/utils/format-date";

import type { ReviewRecord } from "./mock-data";

interface ReviewCardProps {
  review: ReviewRecord;
  className?: string;
}

/** A single customer review — real name, real bike/service, star rating. */
export function ReviewCard({ review, className }: ReviewCardProps) {
  return (
    <Card className={cn("h-full w-72 shrink-0 sm:w-auto sm:shrink", className)}>
      <CardContent className="flex h-full flex-col gap-3">
        <Quote className="text-primary/30 size-6" aria-hidden="true" />
        <Rating value={review.rating} />
        <p className="text-foreground flex-1 text-sm">&ldquo;{review.bodyText}&rdquo;</p>
        <div className="border-border text-muted-foreground flex flex-col gap-0.5 border-t pt-3 text-xs">
          <span className="text-foreground font-medium">{review.authorName}</span>
          <span>
            {review.serviceName} · {review.cityName}
          </span>
          <time dateTime={review.createdAt}>{formatDate(review.createdAt)}</time>
        </div>
      </CardContent>
    </Card>
  );
}
