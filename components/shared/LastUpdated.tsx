interface LastUpdatedProps {
  /** ISO date string — the entity's own real date (published/edited), never a fabricated one. */
  date: string;
  label?: string;
}

/**
 * EEAT "freshness" signal (Phase 4 §14/§19) — Google and AI answer engines
 * both weight a visibly current update date. Renders a semantic `<time>` so
 * the date is machine-readable, not just styled text.
 */
export function LastUpdated({ date, label = "Last updated" }: LastUpdatedProps) {
  const formatted = new Date(date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <span className="text-muted-foreground text-sm">
      {label}: <time dateTime={date}>{formatted}</time>
    </span>
  );
}
