import type { Metadata } from "next";
import Link from "next/link";

import { LegalHero, LegalSection } from "@/components/legal";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, organizationSchema } from "@/seo/json-ld";
import { buildMetadata } from "@/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description: "The terms that govern use of the MR Bike Doctor website and app.",
  path: "/terms-and-conditions",
});

/**
 * /terms-and-conditions — page shell only (Phase 4 §13 item 5). Every
 * section body is a TodoPlaceholder: legal terms must come from the
 * business's own counsel-reviewed policy, never be drafted here.
 */
export default function TermsAndConditionsPage() {
  return (
    <>
      <JsonLd
        schema={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Terms & Conditions", path: "/terms-and-conditions" },
          ]),
        ]}
      />

      <LegalHero
        title="Terms & Conditions"
        intro="These terms govern use of the MR Bike Doctor website and app."
      />

      <LegalSection
        id="acceptance-of-terms"
        title="Acceptance of Terms"
        what="what using the website/app is deemed to constitute agreement to"
      />
      <LegalSection
        id="use-of-website"
        title="Use of the Website"
        what="permitted and prohibited use of the website"
      >
        <p className="text-muted-foreground text-sm">
          This website is informational only — bookings, pricing, tracking, and payment happen
          exclusively in the MR Bike Doctor app.
        </p>
      </LegalSection>
      <LegalSection
        id="app-usage"
        title="App Usage & Booking"
        what="the terms that govern booking, cancellation, and service delivery inside the app"
      />
      <LegalSection
        id="user-responsibilities"
        title="User Responsibilities"
        what="what's expected of users (accurate information, lawful use, etc.)"
      />
      <LegalSection
        id="intellectual-property"
        title="Intellectual Property"
        what="ownership of the MR Bike Doctor name, logo, and content"
      />
      <LegalSection
        id="limitation-of-liability"
        title="Limitation of Liability"
        what="the limits of MR Bike Doctor's liability"
      />
      <LegalSection id="governing-law" title="Governing Law" what="the governing law and jurisdiction" />
      <LegalSection
        id="changes-to-terms"
        title="Changes to These Terms"
        what="how and when these terms may be updated"
      />
      <LegalSection id="contact" title="Contact Us" what="the contact method for questions about these terms">
        <p className="text-muted-foreground text-sm">
          Questions about these terms can be sent through the{" "}
          <Link href="/contact" className="text-primary hover:underline">
            Contact page
          </Link>
          .
        </p>
      </LegalSection>
    </>
  );
}
