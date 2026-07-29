import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

/**
 * Responsive wrapper for a row of stat-like tiles: a horizontally scrollable
 * strip on mobile, a centered flex row from `sm` up. Uses flex-wrap + justify-center
 * rather than a fixed-column grid so a small stat count (2-5 tiles) hugs the
 * middle instead of leaving unused grid tracks as dead space. Generic over any
 * stat/trust tile content — not specific to the Trust band.
 */
export function StatsGrid({ className, children, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex snap-x [scrollbar-width:none] gap-6 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:gap-x-12 sm:gap-y-8 sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
