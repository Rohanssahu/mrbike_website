import type { Metadata } from "next";

import { CitiesHub } from "@/components/cities";
import { JsonLd } from "@/components/seo/json-ld";
import { DownloadAppCta } from "@/components/shared";
import { breadcrumbSchema, organizationSchema } from "@/seo/json-ld";
import { buildMetadata } from "@/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Cities We Serve",
  description:
    "See where MR Bike Doctor's doorstep bike servicing is live today, and which cities are launching next.",
  path: "/cities",
});

/** /cities — cities hub (Phase 4 §13 item 3). Pure content page, no dynamic data dependency. */
export default function CitiesPage() {
  return (
    <>
      <JsonLd
        schema={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Cities", path: "/cities" },
          ]),
        ]}
      />

      <CitiesHub />
      <DownloadAppCta />
    </>
  );
}
