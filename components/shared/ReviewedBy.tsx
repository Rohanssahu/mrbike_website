import Link from "next/link";
import { ShieldCheck } from "lucide-react";

interface ReviewedByProps {
  name: string;
  title?: string;
  /** Link to the reviewer's own page (e.g. `/about/founder`) — pair with `personSchema()`'s `reviewedBy`-style attribution. */
  path?: string;
}

/**
 * EEAT reviewer byline (Phase 4 §14/§19) — "content authored or reviewed by
 * a named, credentialed person." Not wired into any page yet: no page in
 * this codebase has a real, sourced reviewer today (the Founder entity is
 * still a `TodoPlaceholder`, per `docs/phase-4-direction-change.md` §7).
 * Ready to use the moment a real reviewer exists — never pass a placeholder
 * name/title here.
 */
export function ReviewedBy({ name, title, path }: ReviewedByProps) {
  const content = (
    <span className="flex items-center gap-1.5">
      <ShieldCheck className="size-4" aria-hidden="true" />
      Reviewed by {name}
      {title && ` · ${title}`}
    </span>
  );

  return (
    <div className="text-muted-foreground text-sm">
      {path ? (
        <Link href={path} className="hover:text-foreground">
          {content}
        </Link>
      ) : (
        content
      )}
    </div>
  );
}
