interface HowToStepsProps {
  steps: string[];
  title?: string;
}

/**
 * Ordered, numbered step list — AI engines parse and quote ordered lists
 * cleanly (Phase 4 §14). Pair with `howToSchema()` (seo/json-ld.ts) on any
 * page that renders one.
 */
export function HowToSteps({ steps, title = "Step by Step" }: HowToStepsProps) {
  if (steps.length === 0) return null;

  return (
    <div>
      <h2 className="font-heading text-foreground mb-4 text-xl font-semibold">{title}</h2>
      <ol className="flex flex-col gap-3">
        {steps.map((step, index) => (
          <li key={step} className="border-border bg-card flex gap-3 rounded-lg border p-4 text-sm">
            <span className="bg-primary text-primary-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold">
              {index + 1}
            </span>
            <span className="text-muted-foreground">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
