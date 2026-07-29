import type { Metadata } from "next";
import Link from "next/link";

import { LegalHero, LegalSection } from "@/components/legal";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, organizationSchema } from "@/seo/json-ld";
import { buildMetadata } from "@/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How MR Bike Doctor collects, uses, and protects your information.",
  path: "/privacy-policy",
});

/**
 * /privacy-policy — page shell only (Phase 4 §13 item 5). Every section
 * body is a TodoPlaceholder: privacy commitments are legal obligations that
 * must come from the business's own counsel-reviewed policy, never be
 * drafted here.
 */
export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        schema={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Privacy Policy", path: "/privacy-policy" },
          ]),
        ]}
      />

      <LegalHero
        title="Privacy Policy"
        intro="This page explains what information MR Bike Doctor collects and how it's used."
      />

      <LegalSection
        id="information-we-collect"
        title="Information We Collect"
        what="the specific categories of information collected (account, device, location, payment)"
      />
      <LegalSection
        id="how-we-use-information"
        title="How We Use Your Information"
        what="how collected information is used"
      />
      <LegalSection
        id="data-sharing"
        title="Data Sharing & Third Parties"
        what="which third parties data is shared with, and why"
      />
      <LegalSection id="data-security" title="Data Security" what="the data security measures in place" />
      <LegalSection
        id="your-rights"
        title="Your Rights & Choices"
        what="the rights users have over their data and how to exercise them"
      />
      <LegalSection
        id="childrens-privacy"
        title="Children's Privacy"
        what="the policy's stance on data from minors"
      />
      <LegalSection
        id="changes-to-policy"
        title="Changes to This Policy"
        what="how and when this policy may be updated"
      />
      <LegalSection id="contact" title="Contact Us" what="the contact method for privacy questions">
        <p className="text-muted-foreground text-sm">
          Questions about this policy can be sent through the{" "}
          <Link href="/contact" className="text-primary hover:underline">
            Contact page
          </Link>
          .
        </p>
      </LegalSection>
    </>
  );
}
