import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface TrustBadgeProps {
  icon: LucideIcon;
  value: string;
  label: string;
  sublabel?: string;
  className?: string;
}

/** A single "icon + big number + label" tile used by the Trust & Numbers band. */
export function TrustBadge({ icon: Icon, value, label, sublabel, className }: TrustBadgeProps) {
  return (
    <div
      className={cn(
        "border-border bg-card flex min-w-40 shrink-0 snap-start flex-col gap-2 rounded-xl border p-4 sm:min-w-0 sm:shrink sm:flex-row sm:items-center sm:gap-4 sm:border-0 sm:border-l sm:bg-transparent sm:p-0 sm:pl-8 sm:first:border-l-0 sm:first:pl-0",
        className,
      )}
    >
      <span className="flex size-5 shrink-0 items-center justify-center sm:bg-primary/10 sm:size-11 sm:rounded-full">
        <Icon className="text-primary size-5" aria-hidden="true" />
      </span>
      <div className="flex flex-col">
        <span className="font-heading text-foreground text-2xl font-semibold sm:text-3xl">
          {value}
        </span>
        <span className="text-muted-foreground text-sm">{label}</span>
        {sublabel && <span className="text-muted-foreground/80 text-xs">{sublabel}</span>}
      </div>
    </div>
  );
}
