import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

import { HOW_IT_WORKS_STEPS } from "./mock-data";
import { TimelineStep } from "./TimelineStep";

const HEADING_ID = "how-it-works-heading";

/**
 * How the App Works (Phase 4 §4) — informational copy about the in-app flow,
 * not a website action sequence. Nothing here is clickable as a flow; it
 * exists to justify the download, which is why it ends in a Download CTA.
 */
export function HowItWorks() {
  return (
    <Section className="bg-muted/30" aria-labelledby={HEADING_ID}>
      <SectionHeading
        id={HEADING_ID}
        eyebrow="How the App Works"
        title="Doorstep service in six simple steps, inside the app"
        description="From choosing a service to a digital invoice in your inbox — here's exactly what happens once you download the MR Bike Doctor app."
      />

      <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {HOW_IT_WORKS_STEPS.map((step, index) => (
          <TimelineStep key={step.id} step={step} index={index} />
        ))}
      </ol>

      <div className="mt-10 flex justify-center">
        <Button size="lg" className="h-11 px-5" nativeButton={false} render={<Link href="/download" />}>
          Download the App
        </Button>
      </div>
    </Section>
  );
}
