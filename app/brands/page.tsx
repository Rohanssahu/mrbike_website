import type { Metadata } from "next";

import { BrandsHub } from "@/components/brands";
import { JsonLd } from "@/components/seo/json-ld";
import { DownloadAppCta } from "@/components/shared";
import { breadcrumbSchema, organizationSchema } from "@/seo/json-ld";
import { buildMetadata } from "@/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Brands We Service",
  description:
    "MR Bike Doctor services every major two-wheeler brand — Royal Enfield, Honda, TVS, Yamaha, Bajaj, Hero, Suzuki, and KTM.",
  path: "/brands",
});

/** /brands — brands hub (Phase 4 §13 item 3). Pure content page, no dynamic data dependency. */
export default function BrandsPage() {
  return (
    <>
      <JsonLd
        schema={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Brands", path: "/brands" },
          ]),
        ]}
      />

      <BrandsHub />
      <DownloadAppCta />
    </>
  );
}
