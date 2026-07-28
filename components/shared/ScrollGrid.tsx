import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

interface ScrollGridProps extends ComponentProps<"ul"> {
  /** Tailwind `grid-cols` utilities applied from `sm` up, e.g. `"sm:grid-cols-2 lg:grid-cols-4"`. */
  gridCols: string;
}

/**
 * Generic card-list layout shared by every "browse N records" homepage
 * section: a horizontally scrollable, snap-scrolling strip on mobile, a
 * static grid from `sm` up. Callers supply `<li>` items.
 */
export function ScrollGrid({ gridCols, className, children, ...props }: ScrollGridProps) {
  return (
    <ul
      className={cn(
        "flex snap-x [scrollbar-width:none] gap-4 overflow-x-auto pb-2 sm:grid sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden",
        gridCols,
        className,
      )}
      {...props}
    >
      {children}
    </ul>
  );
}
