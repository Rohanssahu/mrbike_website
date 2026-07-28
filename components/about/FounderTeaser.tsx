import { UserCircle2 } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TodoPlaceholder } from "@/components/shared/TodoPlaceholder";

const HEADING_ID = "founder-teaser-heading";

/** Short founder excerpt on /about, linking to the full profile (Phase 4 §6/§7). */
export function FounderTeaser() {
  return (
    <Section aria-labelledby={HEADING_ID}>
      <SectionHeading id={HEADING_ID} eyebrow="Founder" title="The person behind MR Bike Doctor" />

      <div className="border-border bg-card mt-8 flex flex-col items-start gap-6 rounded-2xl border p-6 sm:flex-row sm:items-center">
        <span
          className="bg-muted text-muted-foreground flex size-20 shrink-0 items-center justify-center rounded-full"
          role="img"
          aria-label="Founder photo placeholder"
        >
          <UserCircle2 className="size-10" aria-hidden="true" />
        </span>

        <div className="flex flex-1 flex-col gap-3">
          <TodoPlaceholder what="founder name and designation" />
          <div>
            <Button variant="outline" nativeButton={false} render={<Link href="/about/founder" />}>
              Meet the Founder
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
