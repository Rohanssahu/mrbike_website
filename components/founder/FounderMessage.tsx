import { Quote } from "lucide-react";

import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TodoPlaceholder } from "@/components/shared/TodoPlaceholder";

const HEADING_ID = "founder-message-heading";

/** A short, direct message from the founder to visitors/customers (Phase 4 §7). */
export function FounderMessage() {
  return (
    <Section className="bg-muted/30" aria-labelledby={HEADING_ID}>
      <SectionHeading
        id={HEADING_ID}
        eyebrow="A Message From the Founder"
        title="Message from Founder"
      />
      <div className="border-border bg-card mt-6 max-w-3xl rounded-2xl border p-6">
        <Quote className="text-primary size-6" aria-hidden="true" />
        <div className="mt-3">
          <TodoPlaceholder what="founder's message" />
        </div>
      </div>
    </Section>
  );
}
