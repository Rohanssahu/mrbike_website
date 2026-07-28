import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AreaDetail } from "@/components/cities";
import { AREAS } from "@/components/cities/mock-data";
import { CITIES } from "@/components/home/CitiesWeServe/mock-data";
import { JsonLd } from "@/components/seo/json-ld";
import { DownloadAppCta } from "@/components/shared";
import { breadcrumbSchema, localBusinessSchema, organizationSchema } from "@/seo/json-ld";
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
  return AREAS.map((area) => ({ city: area.citySlug, area: area.slug }));
}

export async function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
  const { city: citySlug, area: areaSlug } = await params;
  const city = CITIES.find((c) => c.slug === citySlug);
  const area = AREAS.find((a) => a.slug === areaSlug && a.citySlug === citySlug);
  if (!city || !area) return {};

  return buildMetadata({
    title: `Bike Service in ${area.name}, ${city.name}`,
    description: `Doorstep bike servicing and repair for riders in ${area.name}, ${city.name}, booked through the MR Bike Doctor app.`,
    path: `/cities/${city.slug}/${area.slug}`,
  });
}

/** /cities/[city]/[area] — informational area detail page (Phase 4 §13 item 3). */
export default async function AreaPage({ params }: AreaPageProps) {
  const { city: citySlug, area: areaSlug } = await params;
  const city = CITIES.find((c) => c.slug === citySlug);
  const area = AREAS.find((a) => a.slug === areaSlug && a.citySlug === citySlug);
  if (!city || !area) notFound();

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
            addressLocality: area.name,
            addressRegion: city.state,
          }),
        ]}
      />

      <AreaDetail city={city} area={area} />
      <DownloadAppCta />
    </>
  );
}
