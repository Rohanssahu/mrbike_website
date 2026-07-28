import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/json-ld";
import { DownloadAppCta } from "@/components/shared";
import { ServicesHub } from "@/components/services";
import { breadcrumbSchema, organizationSchema } from "@/seo/json-ld";
import { buildMetadata } from "@/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Browse every bike service MR Bike Doctor offers — full servicing, oil changes, battery replacement, brake service, and more, all booked through the app.",
  path: "/services",
});

/** /services — services hub (Phase 4 §13 item 3). Pure content page, no dynamic data dependency. */
export default function ServicesPage() {
  return (
    <>
      <JsonLd
        schema={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />

      <ServicesHub />
      <DownloadAppCta />
    </>
  );
}
