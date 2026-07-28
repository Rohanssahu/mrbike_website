import { POPULAR_SERVICES } from "@/components/home/PopularServices/mock-data";
import { ServiceCard } from "@/components/home/PopularServices/ServiceCard";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

const HEADING_ID = "services-hub-heading";

/** /services hub — every core service, fully data-driven (Phase 4 §13 item 3). */
export function ServicesHub() {
  return (
    <Section aria-labelledby={HEADING_ID}>
      <SectionHeading
        id={HEADING_ID}
        eyebrow="Services"
        title="Everything your bike needs, at your doorstep"
        description="Browse every service MR Bike Doctor offers — booked through the app, delivered wherever you are."
      />

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {POPULAR_SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </Section>
  );
}
