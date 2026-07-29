import type { Metadata } from "next";

import {
  AboutHero,
  CompanyStory,
  CompanyTimeline,
  CoreValues,
  FounderTeaser,
  Mission,
  OurProcess,
  Vision,
} from "@/components/about";
import { WhyChooseUs } from "@/components/home";
import { JsonLd } from "@/components/seo/json-ld";
import { DownloadAppCta } from "@/components/shared";
import { breadcrumbSchema, organizationSchema } from "@/seo/json-ld";
import { buildMetadata } from "@/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "MR Bike Doctor is a technology-driven platform connecting riders with verified bike mechanics for doorstep servicing, repairs, and emergency assistance — through the MR Bike Doctor app.",
  path: "/about",
});

/** /about — company overview (Phase 4 §6). Pure content page, no dynamic data dependency. */
export default function AboutPage() {
  return (
    <>
      <JsonLd
        schema={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />

      <AboutHero />
      <CompanyStory />
      <FounderTeaser />
      <Mission />
      <Vision />
      <CoreValues />
      <WhyChooseUs />
      <OurProcess />
      <CompanyTimeline />
      <DownloadAppCta />
    </>
  );
}
