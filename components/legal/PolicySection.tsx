import type { ReactNode } from "react";

import { Section } from "@/components/shared/Section";

interface PolicySectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

/**
 * One section of a *finalized* legal page — unlike `LegalSection`, the body
 * is real, business-supplied content rather than a pending-review notice.
 */
export function PolicySection({ id, title, children }: PolicySectionProps) {
  return (
    <Section aria-labelledby={id}>
      <h2 id={id} className="font-heading text-foreground text-xl font-semibold">
        {title}
      </h2>
      <div className="text-muted-foreground mt-4 flex max-w-3xl flex-col gap-4 text-sm leading-relaxed">
        {children}
      </div>
    </Section>
  );
}
