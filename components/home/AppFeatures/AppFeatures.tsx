import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

import { APP_FEATURES } from "./mock-data";
import { FeatureTile } from "./FeatureTile";

const HEADING_ID = "app-features-heading";

/** App Features grid — every icon reused from the shipped app's own icon set. */
export function AppFeatures() {
  return (
    <Section className="bg-muted/30" aria-labelledby={HEADING_ID}>
      <SectionHeading
        id={HEADING_ID}
        eyebrow="App Features"
        title="Everything you need, in one app"
        description="From the first tap to the final invoice — here's what the MR Bike Doctor app handles for you."
      />

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {APP_FEATURES.map((feature) => (
          <FeatureTile key={feature.id} feature={feature} />
        ))}
      </div>
    </Section>
  );
}
