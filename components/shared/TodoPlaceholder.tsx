import type { ReactNode } from "react";
import { PenLine } from "lucide-react";

import { cn } from "@/lib/utils";

interface TodoPlaceholderProps {
  /** What real content belongs here, e.g. "founder" or "company mission" — used to compose the TODO message. */
  what: string;
  /** Overrides the auto-composed "Replace with real ... information" message entirely. */
  message?: string;
  children?: ReactNode;
  className?: string;
}

/**
 * Visually distinct marker for business-specific content that must never be
 * fabricated (founder bio, company history, milestones, stats). Renders a
 * literal "TODO: Replace with real ... information" line so a placeholder
 * can never be mistaken for real copy if a page ships before the business
 * supplies the actual content.
 */
export function TodoPlaceholder({ what, message, children, className }: TodoPlaceholderProps) {
  return (
    <div
      className={cn(
        "border-muted-foreground/30 bg-muted/40 text-muted-foreground flex flex-col gap-2 rounded-xl border border-dashed p-5 text-sm",
        className,
      )}
    >
      <div className="text-foreground flex items-center gap-2 font-semibold">
        <PenLine className="size-4 shrink-0" aria-hidden="true" />
        <span>{message ?? `TODO: Replace with real ${what} information.`}</span>
      </div>
      {children}
    </div>
  );
}
