import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

interface StatProps extends ComponentProps<"div"> {
  value: string;
  label: string;
}

/** A single "big number + short label" tile, e.g. in the Hero stats strip or Trust band. */
export function Stat({ value, label, className, ...props }: StatProps) {
  return (
    <div className={cn("flex flex-col gap-0.5", className)} {...props}>
      <span className="font-heading text-foreground text-2xl font-semibold sm:text-3xl">
        {value}
      </span>
      <span className="text-muted-foreground text-sm">{label}</span>
    </div>
  );
}
