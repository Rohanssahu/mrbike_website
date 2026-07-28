import { ShieldAlert } from "lucide-react";

import { cn } from "@/lib/utils";

interface PendingLegalReviewProps {
  /** What real legal content belongs here, e.g. "data collection practices." */
  what: string;
  className?: string;
}

/**
 * Legal-page-specific placeholder, distinct from the generic
 * `TodoPlaceholder`. Privacy/terms/account-deletion content is a legal
 * commitment that must come from the business's own counsel-reviewed
 * policy — this is never drafted here, and is labeled "Pending Legal
 * Review" rather than a developer-facing "TODO" since it's user-facing
 * copy on a page a real visitor may read before launch.
 */
export function PendingLegalReview({ what, className }: PendingLegalReviewProps) {
  return (
    <div
      className={cn(
        "border-muted-foreground/30 bg-muted/40 flex flex-col gap-2 rounded-xl border border-dashed p-5 text-sm",
        className,
      )}
    >
      <div className="text-foreground flex items-center gap-2 font-semibold">
        <ShieldAlert className="size-4 shrink-0" aria-hidden="true" />
        <span>Pending Legal Review</span>
      </div>
      <p className="text-muted-foreground">
        This section — {what} — has not yet been reviewed and finalized by counsel. Do not treat
        this page as a complete or binding policy until it&rsquo;s replaced with reviewed legal
        content.
      </p>
    </div>
  );
}
