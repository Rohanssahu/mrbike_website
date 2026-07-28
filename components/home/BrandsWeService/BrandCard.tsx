import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import type { BrandRecord } from "./mock-data";

interface BrandCardProps {
  brand: BrandRecord;
  className?: string;
}

/**
 * A single brand tile. The whole card is one link (not a card + nested
 * button) so it stays one accessible, keyboard-reachable control.
 */
export function BrandCard({ brand, className }: BrandCardProps) {
  return (
    <Link
      href={`/brands/${brand.slug}`}
      className={cn(
        "group border-border bg-card hover:border-primary/40 flex w-40 shrink-0 flex-col items-center gap-3 rounded-xl border p-5 text-center transition-all hover:shadow-md sm:w-auto sm:shrink",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="bg-muted text-foreground flex size-14 items-center justify-center rounded-full text-base font-semibold"
      >
        {brand.initials}
      </span>

      <div className="flex flex-col gap-0.5">
        <span className="font-heading text-foreground text-sm font-semibold">{brand.name}</span>
        <span className="text-muted-foreground text-xs">{brand.modelCount} models supported</span>
      </div>

      <span className="text-primary mt-auto flex items-center gap-1 text-xs font-medium group-hover:underline">
        View Models
        <ArrowRight className="size-3" aria-hidden="true" />
      </span>
    </Link>
  );
}
