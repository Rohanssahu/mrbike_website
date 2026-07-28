import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface LinkTileProps {
  href: string;
  label: string;
  className?: string;
}

/** A single "label + arrow" navigation row — used for browsing into a model, area, or similar child page. */
export function LinkTile({ href, label, className }: LinkTileProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group border-border bg-card hover:border-primary/40 focus-visible:ring-ring/50 flex items-center justify-between rounded-lg border p-4 text-sm transition-colors outline-none hover:shadow-sm focus-visible:ring-3",
        className,
      )}
    >
      <span className="font-heading text-foreground font-semibold">{label}</span>
      <ArrowRight className="text-muted-foreground group-hover:text-primary size-4" aria-hidden="true" />
    </Link>
  );
}
