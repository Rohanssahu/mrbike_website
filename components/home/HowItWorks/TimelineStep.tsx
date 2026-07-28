import { cn } from "@/lib/utils";

import type { HowItWorksStep } from "./mock-data";

interface TimelineStepProps {
  step: HowItWorksStep;
  index: number;
  className?: string;
}

/** One numbered step in the How It Works flow. */
export function TimelineStep({ step, index, className }: TimelineStepProps) {
  const Icon = step.icon;

  return (
    <li
      className={cn("border-border bg-card flex flex-col gap-3 rounded-xl border p-5", className)}
    >
      <div className="flex items-center gap-3">
        <span className="bg-primary text-primary-foreground flex size-10 shrink-0 items-center justify-center rounded-full">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <span className="text-muted-foreground text-sm font-semibold" aria-hidden="true">
          Step {index + 1}
        </span>
      </div>
      <h3 className="font-heading text-foreground text-base font-semibold">{step.title}</h3>
      <p className="text-muted-foreground text-sm">{step.description}</p>
    </li>
  );
}
