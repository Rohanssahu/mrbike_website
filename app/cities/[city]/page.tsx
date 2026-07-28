import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AREAS } from "@/components/cities/mock-data";
import { CityDetail } from "@/components/cities";
import { CITIES } from "@/components/home/CitiesWeServe/mock-data";
import { JsonLd } from "@/components/seo/json-ld";
import { DownloadAppCta } from "@/components/shared";
import { breadcrumbSchema, localBusinessSchema, organizationSchema } from "@/seo/json-ld";
import { buildMetadata } from "@/seo/metadata";

interface CityPageProps {
  params: Promise<{ city: string }>;
}

export function generateStaticParams() {
  return CITIES.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const city = CITIES.find((c) => c.slug === slug);
  if (!city) return {};

  return buildMetadata({
    title: `Bike Service in ${city.name}`,
    description:
      city.status === "live"
        ? `Doorstep bike servicing and repair in ${city.name}, ${city.state}, booked through the MR Bike Doctor app.`
        : `MR Bike Doctor is launching soon in ${city.name}, ${city.state}. Download the app to get notified.`,
    path: `/cities/${city.slug}`,
  });
}

/** /cities/[city] — informational city detail page, no serviceability widget (Phase 4 §13 item 3). */
export default async function CityPage({ params }: CityPageProps) {
  const { city: slug } = await params;
  const city = CITIES.find((c) => c.slug === slug);
  if (!city) notFound();

  const areas = AREAS.filter((area) => area.citySlug === city.slug);

  return (
    <>
      <JsonLd
        schema={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Cities", path: "/cities" },
            { name: city.name, path: `/cities/${city.slug}` },
          ]),
          ...(city.status === "live"
            ? [
                localBusinessSchema({
                  name: city.name,
                  path: `/cities/${city.slug}`,
                  addressLocality: city.name,
                  addressRegion: city.state,
                }),
              ]
            : []),
        ]}
      />

      <CityDetail city={city} areas={areas} />
      <DownloadAppCta />
    </>
  );
}
