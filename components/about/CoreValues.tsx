import { Handshake, Heart, ShieldCheck, Target, type LucideIcon } from "lucide-react";

import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TodoPlaceholder } from "@/components/shared/TodoPlaceholder";

const HEADING_ID = "core-values-heading";

/** Iconography only — the values themselves are owner-defined and never invented here. */
const VALUE_SLOTS: Array<{ id: string; icon: LucideIcon }> = [
  { id: "value-1", icon: ShieldCheck },
  { id: "value-2", icon: Heart },
  { id: "value-3", icon: Handshake },
  { id: "value-4", icon: Target },
];

/** Core Values (Phase 4 §6) — placeholder slots; real values are owner-supplied. */
export function CoreValues() {
  return (
    <Section aria-labelledby={HEADING_ID}>
      <SectionHeading
        id={HEADING_ID}
        eyebrow="Core Values"
        title="What we stand for"
        description="The principles that guide every service MR Bike Doctor delivers."
      />

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {VALUE_SLOTS.map(({ id, icon: Icon }) => (
          <TodoPlaceholder key={id} what="core value" className="h-full">
            <Icon className="text-primary size-5" aria-hidden="true" />
          </TodoPlaceholder>
        ))}
      </div>
    </Section>
  );
}
