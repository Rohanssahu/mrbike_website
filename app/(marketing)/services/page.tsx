import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/json-ld";
import { DownloadAppCta } from "@/components/shared";
import { ServicesHub } from "@/components/services";
import { getAllServices } from "@/lib/content";
import { breadcrumbSchema, collectionPageSchema, organizationSchema } from "@/seo/json-ld";
import { buildMetadata } from "@/seo/metadata";

const DESCRIPTION =
  "Browse every bike service MR Bike Doctor offers — full servicing, oil changes, battery replacement, brake service, and more, all booked through the app.";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description: DESCRIPTION,
  path: "/services",
});

/** /services — services hub (Phase 4 §13 item 3). Pure content page, no dynamic data dependency. */
export default function ServicesPage() {
  const services = getAllServices();

  return (
    <>
      <JsonLd
        schema={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          collectionPageSchema({
            name: "Bike Services",
            description: DESCRIPTION,
            path: "/services",
            items: services.map((service) => ({ name: service.name, path: `/services/${service.slug}` })),
          }),
        ]}
      />

      <ServicesHub />
      <DownloadAppCta />
    </>
  );
}
