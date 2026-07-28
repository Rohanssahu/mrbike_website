import Image from "next/image";

import { cn } from "@/lib/utils";

import type { AppFeature } from "./mock-data";

interface FeatureTileProps {
  feature: AppFeature;
  className?: string;
}

/** Icon + title + description tile — icon is a real app-icon image, not a generated glyph. */
export function FeatureTile({ feature, className }: FeatureTileProps) {
  return (
    <div
      className={cn("border-border bg-card flex flex-col gap-3 rounded-xl border p-5", className)}
    >
      <span className="bg-primary/10 flex size-11 items-center justify-center rounded-lg">
        <Image src={feature.icon} alt="" aria-hidden="true" className="size-6 object-contain" />
      </span>
      <h3 className="font-heading text-foreground text-base font-semibold">{feature.title}</h3>
      <p className="text-muted-foreground text-sm">{feature.description}</p>
    </div>
  );
}
