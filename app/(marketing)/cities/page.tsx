import type { Metadata } from "next";

import { CitiesHub } from "@/components/cities";
import { JsonLd } from "@/components/seo/json-ld";
import { DownloadAppCta } from "@/components/shared";
import { getAllCities } from "@/lib/content";
import { breadcrumbSchema, collectionPageSchema, organizationSchema } from "@/seo/json-ld";
import { buildMetadata } from "@/seo/metadata";

const DESCRIPTION =
  "See where MR Bike Doctor's doorstep bike servicing is live today, and which cities are launching next.";

export const metadata: Metadata = buildMetadata({
  title: "Cities We Serve",
  description: DESCRIPTION,
  path: "/cities",
});

/** /cities — cities hub (Phase 4 §13 item 3). Pure content page, no dynamic data dependency. */
export default function CitiesPage() {
  const cities = getAllCities();

  return (
    <>
      <JsonLd
        schema={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Cities", path: "/cities" },
          ]),
          collectionPageSchema({
            name: "Cities We Serve",
            description: DESCRIPTION,
            path: "/cities",
            items: cities.map((city) => ({ name: city.name, path: `/cities/${city.slug}` })),
          }),
        ]}
      />

      <CitiesHub />
      <DownloadAppCta />
    </>
  );
}
