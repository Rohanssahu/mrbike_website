import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

import { FeatureCard } from "./FeatureCard";
import { WHY_CHOOSE_US_FEATURES } from "./mock-data";

const HEADING_ID = "why-choose-us-heading";

/** Why Choose MR Bike Doctor (Phase 3 §2) — the differentiation argument. */
export function WhyChooseUs() {
  return (
    <Section aria-labelledby={HEADING_ID}>
      <SectionHeading
        id={HEADING_ID}
        eyebrow="Why Choose Us"
        title="Not just a mechanic — a trusted service partner"
        description="Verified people, honest pricing, and a paper trail for every job — the things a roadside garage can't promise."
      />

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {WHY_CHOOSE_US_FEATURES.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </Section>
  );
}
