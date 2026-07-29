import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";

import { ContactInfo } from "@/components/contact";
import { LegalHero, PolicySection } from "@/components/legal";
import { JsonLd } from "@/components/seo/json-ld";
import { Section } from "@/components/shared/Section";
import { siteConfig } from "@/config/site";
import { breadcrumbSchema, organizationSchema } from "@/seo/json-ld";
import { buildMetadata } from "@/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Delete Your Account",
  description: "How to request deletion of your MR Bike Doctor account and data.",
  path: "/delete-account",
});

const LIST_CLASSNAME = "list-disc space-y-1.5 pl-5";

/**
 * /delete-account — real, business-supplied instructions (sourced from
 * public/delete-account.html, last updated July 24, 2026). Covers both the
 * MR Bike Doctor Customer App and the MR Bike Doctor Partner App.
 */
export default function DeleteAccountPage() {
  return (
    <>
      <JsonLd
        schema={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Delete Account", path: "/delete-account" },
          ]),
        ]}
      />

      <LegalHero
        title="Delete Your Account"
        intro="You can request deletion of your MR Bike Doctor account and associated data at any time. This applies to both the MR Bike Doctor Customer App and the MR Bike Doctor Partner App."
        meta={
          <p className="text-muted-foreground mt-6 text-sm">
            Last updated <strong className="text-foreground font-medium">July 24, 2026</strong>
          </p>
        }
      />

      <PolicySection id="how-to-request-deletion" title="1. How to Request Deletion">
        <p>
          This is currently a temporary, manual process. To request deletion of your account and
          data, send an email with the details below.
        </p>
        <div className="border-border bg-muted/40 rounded-xl border p-5">
          <p>
            <span className="text-foreground font-semibold">Email: </span>
            <a
              href={`mailto:${siteConfig.contactEmail}?subject=Account%20Deletion%20Request`}
              className="text-primary hover:underline"
            >
              {siteConfig.contactEmail}
            </a>
          </p>
          <p className="mt-1.5">
            <span className="text-foreground font-semibold">Subject: </span>Account Deletion
            Request
          </p>
        </div>
        <p>Please include the following in your email:</p>
        <ul className={LIST_CLASSNAME}>
          <li>Full Name</li>
          <li>Registered Mobile Number</li>
          <li>App Used (Customer or Partner)</li>
        </ul>
        <div className="border-primary bg-muted/40 text-foreground rounded-lg border-l-4 py-3 pr-4 pl-5 text-sm">
          Requests are processed within <strong>7 business days</strong> after identity
          verification.
        </div>
      </PolicySection>

      <PolicySection id="what-gets-deleted" title="2. What Will Be Deleted">
        <p>
          Once a deletion request is verified and processed, the following data is permanently
          removed from our active systems:
        </p>
        <ul className={LIST_CLASSNAME}>
          <li>User profile</li>
          <li>Phone number</li>
          <li>Vehicle information</li>
          <li>Saved addresses</li>
          <li>Booking history (where legally allowed)</li>
          <li>Referral information</li>
          <li>Uploaded profile images</li>
          <li>Other personal information</li>
        </ul>
      </PolicySection>

      <PolicySection id="what-may-be-retained" title="3. What May Be Retained">
        <p>
          Some records may be retained even after account deletion, as required by law or for
          legitimate business purposes, including:
        </p>
        <ul className={LIST_CLASSNAME}>
          <li>Payment transactions</li>
          <li>Tax records</li>
          <li>Invoices</li>
          <li>Fraud prevention logs</li>
          <li>Legal compliance records</li>
        </ul>
      </PolicySection>

      <PolicySection id="important-note" title="4. Important Note">
        <div className="border-destructive bg-destructive/10 text-destructive flex items-start gap-2.5 rounded-lg border-l-4 py-3 pr-4 pl-4 text-sm">
          <AlertTriangle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <p>
            Deleting an account is <strong>permanent and cannot be undone</strong>. Please make
            sure you no longer need any data associated with your account before submitting a
            request.
          </p>
        </div>
      </PolicySection>

      <Section aria-label="Request deletion by contacting support">
        <h2 className="font-heading text-foreground mb-4 text-xl font-semibold">
          Or Contact Support Directly
        </h2>
        <ContactInfo />
      </Section>
    </>
  );
}
