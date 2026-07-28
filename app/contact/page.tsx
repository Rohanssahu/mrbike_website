import type { Metadata } from "next";

import { ContactInfo } from "@/components/contact";
import { JsonLd } from "@/components/seo/json-ld";
import { DownloadAppCta } from "@/components/shared";
import { Section } from "@/components/shared/Section";
import { breadcrumbSchema, organizationSchema } from "@/seo/json-ld";
import { buildMetadata } from "@/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch with MR Bike Doctor by email or through in-app help.",
  path: "/contact",
});

/** /contact — a company-contact channel, not a booking or quote-request flow (Phase 4 §5/§13 item 5). */
export default function ContactPage() {
  return (
    <>
      <JsonLd
        schema={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />

      <Section className="pb-0 md:pb-0" aria-labelledby="contact-hero-heading">
        <div className="max-w-3xl">
          <h1
            id="contact-hero-heading"
            className="font-heading text-foreground text-4xl font-bold sm:text-5xl"
          >
            Contact Us
          </h1>
          <p className="text-muted-foreground mt-4 text-lg">
            For booking or in-progress service issues, the fastest path is Help inside the app.
            For everything else, reach us below.
          </p>
        </div>
      </Section>

      <Section aria-label="Contact channels">
        <ContactInfo />
      </Section>

      <DownloadAppCta />
    </>
  );
}
