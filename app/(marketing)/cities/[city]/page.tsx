import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CityDetail } from "@/components/cities";
import { JsonLd } from "@/components/seo/json-ld";
import { DownloadAppCta } from "@/components/shared";
import {
  getAllCities,
  getAllServices,
  getAreasByCity,
  getCityBySlug,
  getFaqsByTag,
} from "@/lib/content";
import {
  breadcrumbSchema,
  faqPageSchema,
  localBusinessSchema,
  organizationSchema,
  SPEAKABLE_SELECTORS,
} from "@/seo/json-ld";
import { buildMetadata } from "@/seo/metadata";

interface CityPageProps {
  params: Promise<{ city: string }>;
}

export function generateStaticParams() {
  return getAllCities().map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};

  return buildMetadata({
    title: `Doorstep Bike Service in ${city.name}`,
    description:
      city.status === "live"
        ? `Book doorstep bike service and repair in ${city.name}. View covered areas, pickup and drop, related services, rider reviews, and local FAQs.`
        : `MR Bike Doctor is launching soon in ${city.name}, ${city.state}. Download the app to get notified.`,
    path: `/cities/${city.slug}`,
  });
}

/** /cities/[city] — informational city detail page, no serviceability widget (Phase 4 §13 item 3). */
export default async function CityPage({ params }: CityPageProps) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const areas = getAreasByCity(city.slug);
  const services = getAllServices();
  const faqs = city.status === "live" ? getFaqsByTag(`city:${city.slug}`) : [];

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
                  description: `Doorstep bike servicing, repair, and pickup and drop across supported areas of ${city.name}.`,
                  serviceAreas: [city.name, ...areas.map((area) => area.name)],
                  services: services.map((service) => ({
                    name: service.name,
                    path: `/services/${service.slug}`,
                  })),
                  addressRegion: city.state,
                }),
              ]
            : []),
          ...(faqs.length > 0
            ? [faqPageSchema(faqs, { speakable: [SPEAKABLE_SELECTORS.faqAnswer] })]
            : []),
        ]}
      />

      <CityDetail city={city} areas={areas} />
      <DownloadAppCta />
    </>
  );
}
