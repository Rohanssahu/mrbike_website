import { UserCircle2 } from "lucide-react";

import { Section } from "@/components/shared/Section";
import { TodoPlaceholder } from "@/components/shared/TodoPlaceholder";

const HEADING_ID = "founder-profile-heading";

/** Founder profile header (Phase 4 §7) — photo, name, and designation are required placeholders until real data is supplied. */
export function FounderProfile() {
  return (
    <Section className="pb-0 md:pb-0" aria-labelledby={HEADING_ID}>
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <span
          className="bg-muted text-muted-foreground flex size-32 shrink-0 items-center justify-center rounded-2xl"
          role="img"
          aria-label="Founder photo placeholder"
        >
          <UserCircle2 className="size-16" aria-hidden="true" />
        </span>

        <div className="flex flex-1 flex-col gap-3">
          <p className="text-primary text-sm font-semibold">Meet the Founder</p>
          <h1
            id={HEADING_ID}
            className="font-heading text-foreground text-4xl font-bold sm:text-5xl"
          >
            Founder Name — TODO
          </h1>
          <TodoPlaceholder what="founder photo, name, and designation" />
        </div>
      </div>
    </Section>
  );
}
