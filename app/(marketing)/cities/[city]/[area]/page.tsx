import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AreaDetail } from "@/components/cities";
import { JsonLd } from "@/components/seo/json-ld";
import { DownloadAppCta } from "@/components/shared";
import { getAllAreas, getAllServices, getAreaBySlug, getCityBySlug } from "@/lib/content";
import {
  breadcrumbSchema,
  faqPageSchema,
  localBusinessSchema,
  organizationSchema,
  SPEAKABLE_SELECTORS,
} from "@/seo/json-ld";
import { buildMetadata } from "@/seo/metadata";

interface AreaPageProps {
  params: Promise<{ city: string; area: string }>;
}

/**
 * Per Section 17's doorway-page guardrail, area pages are only generated for
 * cities that are actually live — `AREAS` itself only lists areas for live
 * cities today, so this naturally stays in sync as new cities launch.
 */
export function generateStaticParams() {
  return getAllAreas().map((area) => ({ city: area.citySlug, area: area.slug }));
}

export async function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
  const { city: citySlug, area: areaSlug } = await params;
  const city = getCityBySlug(citySlug);
  const area = getAreaBySlug(citySlug, areaSlug);
  if (!city || !area) return {};

  return buildMetadata({
    title: `Bike Service in ${area.name}, ${city.name}`,
    description: `${area.summary} View local coverage, nearby landmarks, pickup and drop, services, reviews, and FAQs.`,
    path: `/cities/${city.slug}/${area.slug}`,
  });
}

/** /cities/[city]/[area] — informational area detail page (Phase 4 §13 item 3). */
export default async function AreaPage({ params }: AreaPageProps) {
  const { city: citySlug, area: areaSlug } = await params;
  const city = getCityBySlug(citySlug);
  const area = getAreaBySlug(citySlug, areaSlug);
  if (!city || !area) notFound();
  const services = getAllServices().filter((service) =>
    area.relatedServiceSlugs.includes(service.slug),
  );

  return (
    <>
      <JsonLd
        schema={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Cities", path: "/cities" },
            { name: city.name, path: `/cities/${city.slug}` },
            { name: area.name, path: `/cities/${city.slug}/${area.slug}` },
          ]),
          localBusinessSchema({
            name: area.name,
            path: `/cities/${city.slug}/${area.slug}`,
            description: area.summary,
            serviceAreas: area.localCoverage.map((name) => `${name}, ${city.name}`),
            services: services.map((service) => ({
              name: service.name,
              path: `/services/${service.slug}`,
            })),
            addressRegion: city.state,
          }),
          faqPageSchema(area.faqs, { speakable: [SPEAKABLE_SELECTORS.faqAnswer] }),
        ]}
      />

      <AreaDetail city={city} area={area} />
      <DownloadAppCta />
    </>
  );
}
