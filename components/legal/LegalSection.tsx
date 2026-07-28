import type { ReactNode } from "react";

import { Section } from "@/components/shared/Section";
import { TodoPlaceholder } from "@/components/shared/TodoPlaceholder";

interface LegalSectionProps {
  id: string;
  title: string;
  /** What real legal content belongs here, e.g. "data collection practices" — passed to TodoPlaceholder. */
  what: string;
  /** Optional non-legal, safe framing copy shown above the placeholder (e.g. linking to /contact). */
  children?: ReactNode;
}

/**
 * One section of a legal page. The body is always a `TodoPlaceholder` —
 * privacy/terms/account-deletion specifics are legal commitments that must
 * come from the business's own counsel-reviewed policy, never be drafted
 * here.
 */
export function LegalSection({ id, title, what, children }: LegalSectionProps) {
  return (
    <Section aria-labelledby={id}>
      <h2 id={id} className="font-heading text-foreground text-xl font-semibold">
        {title}
      </h2>
      <div className="mt-4 flex max-w-3xl flex-col gap-4">
        {children}
        <TodoPlaceholder what={what} />
      </div>
    </Section>
  );
}
