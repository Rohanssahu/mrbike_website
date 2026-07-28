import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

/**
 * Responsive wrapper for a row of stat-like tiles: a horizontally scrollable
 * strip on mobile, a static grid from `sm` up. Generic over any stat/trust
 * tile content — not specific to the Trust band.
 */
export function StatsGrid({ className, children, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex snap-x [scrollbar-width:none] gap-6 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0 lg:grid-cols-5 [&::-webkit-scrollbar]:hidden",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
