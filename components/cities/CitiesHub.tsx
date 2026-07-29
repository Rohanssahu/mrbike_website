import { CityCard } from "@/components/home/CitiesWeServe/CityCard";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { getAllCities } from "@/lib/content";

const HEADING_ID = "cities-hub-heading";

/** /cities hub — every city, fully data-driven (Phase 4 §13 item 3). */
export function CitiesHub() {
  const cities = getAllCities();

  return (
    <Section aria-labelledby={HEADING_ID}>
      <SectionHeading
        id={HEADING_ID}
        eyebrow="Cities We Serve"
        title="Live in Hyderabad, expanding city by city"
        description="Here's where doorstep service is live today, and where we're headed next."
      />

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cities.map((city) => (
          <CityCard key={city.id} city={city} className="w-full sm:w-full" />
        ))}
      </div>
    </Section>
  );
}
