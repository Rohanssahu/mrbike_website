import type { Metadata } from "next";

import { DownloadHero, FeatureGrid, ScreenshotGallery } from "@/components/download";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, organizationSchema, softwareApplicationSchema } from "@/seo/json-ld";
import { buildMetadata } from "@/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Download the App",
  description:
    "Download the MR Bike Doctor app to book doorstep bike servicing, track your mechanic, and pay securely — all in one place.",
  path: "/download",
});

/** /download — the sitewide conversion target (Phase 4 §5/§13 item 5). */
export default function DownloadPage() {
  return (
    <>
      <JsonLd
        schema={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Download", path: "/download" },
          ]),
          softwareApplicationSchema(),
        ]}
      />

      <DownloadHero />
      <FeatureGrid />
      <ScreenshotGallery />
    </>
  );
}
