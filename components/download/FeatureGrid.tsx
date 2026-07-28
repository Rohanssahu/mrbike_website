import Image from "next/image";

import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

import { APP_FEATURES } from "./mock-data";

const HEADING_ID = "app-features-heading";

/** What's inside the app — icon grid (Phase 4 §13 item 5). */
export function FeatureGrid() {
  return (
    <Section className="bg-muted/30" aria-labelledby={HEADING_ID}>
      <SectionHeading id={HEADING_ID} eyebrow="What's Inside" title="Everything you need, in one app" />

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {APP_FEATURES.map((feature) => (
          <div
            key={feature.id}
            className="border-border bg-card flex flex-col gap-3 rounded-xl border p-5"
          >
            <Image src={feature.icon} alt="" aria-hidden="true" className="size-10 object-contain" />
            <h3 className="font-heading text-foreground text-base font-semibold">
              {feature.title}
            </h3>
            <p className="text-muted-foreground text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
