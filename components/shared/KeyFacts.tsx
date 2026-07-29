interface KeyFact {
  label: string;
  value: string;
}

interface KeyFactsProps {
  facts: KeyFact[];
}

/**
 * Compact label/value fact grid — pairs with `QuickAnswer` (Phase 4 §14) as
 * a second, even more reliably extractable AI-search shape: a short list of
 * discrete facts (duration, service interval, drive type, status) reads
 * cleanly to an LLM without needing to parse prose. Generic over any
 * Service/Brand/Model/City fact set — not specific to one entity type.
 */
export function KeyFacts({ facts }: KeyFactsProps) {
  if (facts.length === 0) return null;

  return (
    <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {facts.map((fact) => (
        <div key={fact.label} className="border-border bg-card rounded-lg border p-3">
          <dt className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
            {fact.label}
          </dt>
          <dd className="text-foreground mt-1 text-sm font-semibold">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}
