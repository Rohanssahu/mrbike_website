import type { Metadata } from "next";

import founderPhoto from "@/assets/Founder_kolanu_suresh_netha.jpeg";
import {
  FOUNDER_NAME,
  FOUNDER_TITLE,
  FounderBiography,
  FounderMessage,
  FounderProfile,
  FounderVision,
  WhyFounded,
} from "@/components/founder";
import { JsonLd } from "@/components/seo/json-ld";
import { DownloadAppCta } from "@/components/shared";
import { siteConfig } from "@/config/site";
import { breadcrumbSchema, organizationSchema, personSchema } from "@/seo/json-ld";
import { buildMetadata } from "@/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Meet the Founder",
  description: `Meet ${FOUNDER_NAME}, the founder of MR Bike Doctor — India's doorstep bike servicing app.`,
  path: "/about/founder",
});

/** /about/founder — dedicated Founder profile (Phase 4 §7). Singleton content, no dynamic data dependency. */
export default function FounderPage() {
  return (
    <>
      <JsonLd
        schema={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Founder", path: "/about/founder" },
          ]),
          personSchema({
            name: FOUNDER_NAME,
            jobTitle: FOUNDER_TITLE,
            image: founderPhoto.src,
            path: "/about/founder",
            sameAs: siteConfig.social.map((link) => link.url),
          }),
        ]}
      />

      <FounderProfile />
      <FounderBiography />
      <WhyFounded />
      <FounderVision />
      <FounderMessage />
      <DownloadAppCta />
    </>
  );
}
