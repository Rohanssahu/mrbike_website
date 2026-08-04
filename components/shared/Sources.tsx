interface Source {
  label: string;
  url: string;
}

interface SourcesProps {
  sources: Source[];
}

/**
 * EEAT citation list (Phase 4 §14/§19) — visible external sources for a
 * claim, an authoritativeness signal AI engines weight when deciding what
 * to trust. Not wired into any page yet: no article in this codebase cites
 * an external source today (content is either generic bike-maintenance
 * knowledge or facts already established elsewhere in this site). Ready to
 * use once an article legitimately cites something external — never invent
 * a source to make a page look more authoritative than it is.
 */
export function Sources({ sources }: SourcesProps) {
  if (sources.length === 0) return null;

  return (
    <div className="border-border border-t pt-4">
      <h2 className="text-foreground mb-2 text-sm font-semibold">References</h2>
      <ul className="flex flex-col gap-1">
        {sources.map((source) => (
          <li key={source.url}>
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary text-sm underline underline-offset-2"
            >
              {source.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
