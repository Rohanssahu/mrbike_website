import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

import { OUR_PROCESS_STEPS } from "./mock-data";

const HEADING_ID = "our-process-heading";

/** Our Process (Phase 4 §19 "Service Process") — the physical service-visit flow, distinct from the app-UX explainer. */
export function OurProcess() {
  return (
    <Section className="bg-muted/30" aria-labelledby={HEADING_ID}>
      <SectionHeading
        id={HEADING_ID}
        eyebrow="Our Process"
        title="What happens during a service visit"
        description="The same standard, every time — from request to a completed job."
      />

      <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {OUR_PROCESS_STEPS.map((step, index) => {
          const Icon = step.icon;
          return (
            <li
              key={step.id}
              className="border-border bg-card flex flex-col gap-3 rounded-xl border p-5"
            >
              <div className="flex items-center gap-3">
                <span className="bg-primary text-primary-foreground flex size-10 shrink-0 items-center justify-center rounded-full">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="text-muted-foreground text-sm font-semibold" aria-hidden="true">
                  Step {index + 1}
                </span>
              </div>
              <h3 className="font-heading text-foreground text-base font-semibold">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
