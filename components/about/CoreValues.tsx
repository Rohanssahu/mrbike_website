import { Clock, Handshake, Heart, Lightbulb, ShieldCheck, Wrench, type LucideIcon } from "lucide-react";

import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

const HEADING_ID = "core-values-heading";

const CORE_VALUES: Array<{ id: string; icon: LucideIcon; title: string; description: string }> = [
  {
    id: "customer-first",
    icon: Heart,
    title: "Customer First",
    description:
      "Every decision starts with what makes servicing easier and more honest for the rider — not what's easiest for us.",
  },
  {
    id: "transparency",
    icon: ShieldCheck,
    title: "Transparency",
    description:
      "Clear pricing, itemized invoices, and no surprise charges. Riders should always know what they're paying for.",
  },
  {
    id: "reliability",
    icon: Handshake,
    title: "Reliability",
    description:
      "A booking is a promise. Mechanics show up when they say they will, and the job gets done right the first time.",
  },
  {
    id: "convenience",
    icon: Clock,
    title: "Convenience",
    description:
      "Servicing should fit into a rider's day, not the other way around — doorstep pickup, drop, and updates in real time.",
  },
  {
    id: "quality-service",
    icon: Wrench,
    title: "Quality Service",
    description:
      "Every mechanic on the platform is verified, and every service is checked before handover — no shortcuts on the work itself.",
  },
  {
    id: "continuous-innovation",
    icon: Lightbulb,
    title: "Continuous Innovation",
    description:
      "We keep improving the app and the service experience based on what riders and mechanics actually tell us.",
  },
];

/** Core Values (Phase 4 §6) — the principles that guide the service. */
export function CoreValues() {
  return (
    <Section aria-labelledby={HEADING_ID}>
      <SectionHeading
        id={HEADING_ID}
        eyebrow="Core Values"
        title="What we stand for"
        description="The principles that guide every service MR Bike Doctor delivers."
      />

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CORE_VALUES.map(({ id, icon: Icon, title, description }) => (
          <div
            key={id}
            className="border-border bg-card flex h-full flex-col gap-3 rounded-xl border p-5"
          >
            <Icon className="text-primary size-5" aria-hidden="true" />
            <p className="text-foreground font-semibold">{title}</p>
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
