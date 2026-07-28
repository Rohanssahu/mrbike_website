import { cn } from "@/lib/utils";

import type { FeatureRecord } from "./mock-data";

interface FeatureCardProps {
  feature: FeatureRecord;
  className?: string;
}

/** Icon + title + description tile used by the Why Choose Us grid. */
export function FeatureCard({ feature, className }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <div
      className={cn("border-border bg-card flex flex-col gap-3 rounded-xl border p-5", className)}
    >
      <span className="bg-primary/10 text-primary flex size-11 items-center justify-center rounded-lg">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <h3 className="font-heading text-foreground text-base font-semibold">{feature.title}</h3>
      <p className="text-muted-foreground text-sm">{feature.description}</p>
    </div>
  );
}
