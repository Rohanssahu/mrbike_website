import type { Metadata } from "next";

import {
  FounderBiography,
  FounderMessage,
  FounderProfile,
  FounderVision,
  WhyFounded,
} from "@/components/founder";
import { JsonLd } from "@/components/seo/json-ld";
import { DownloadAppCta } from "@/components/shared";
import { breadcrumbSchema, organizationSchema, personSchema } from "@/seo/json-ld";
import { buildMetadata } from "@/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Meet the Founder",
  description:
    "Meet the founder of MR Bike Doctor — the story, vision, and mission behind India's doorstep bike servicing app.",
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
          // TODO: replace with the real founder's name/title/photo once supplied.
          personSchema({
            name: "MR Bike Doctor Founder",
            jobTitle: "Founder",
            path: "/about/founder",
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
