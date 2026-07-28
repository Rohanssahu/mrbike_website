import type { Metadata } from "next";

import { LegalSection } from "@/components/legal";
import { JsonLd } from "@/components/seo/json-ld";
import { ContactInfo } from "@/components/contact";
import { Section } from "@/components/shared/Section";
import { breadcrumbSchema, organizationSchema } from "@/seo/json-ld";
import { buildMetadata } from "@/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Delete Your Account",
  description: "How to request deletion of your MR Bike Doctor account and data.",
  path: "/delete-account",
});

/**
 * /delete-account — required, app-store-compliance page (Phase 4 §13 item
 * 5). The actual deletion mechanism and data-retention specifics are
 * TodoPlaceholders — this page only needs to exist and be discoverable
 * without opening the app; its content must match the real in-app flow.
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

      <Section className="pb-0 md:pb-0" aria-labelledby="delete-account-heading">
        <div className="max-w-3xl">
          <h1
            id="delete-account-heading"
            className="font-heading text-foreground text-4xl font-bold sm:text-5xl"
          >
            Delete Your Account
          </h1>
          <p className="text-muted-foreground mt-4 text-lg">
            You can request deletion of your MR Bike Doctor account and associated data at any
            time.
          </p>
        </div>
      </Section>

      <LegalSection
        id="how-to-request-deletion"
        title="How to Request Deletion"
        what="the exact in-app steps (or other method) to request account deletion"
      />
      <LegalSection
        id="what-gets-deleted"
        title="What Gets Deleted"
        what="which data is deleted, which is retained, and for how long"
      />
      <LegalSection
        id="processing-time"
        title="Processing Time"
        what="how long a deletion request typically takes to complete"
      />

      <Section aria-label="Request deletion by contacting support">
        <h2 className="font-heading text-foreground mb-4 text-xl font-semibold">
          Or Contact Support Directly
        </h2>
        <ContactInfo />
      </Section>
    </>
  );
}
