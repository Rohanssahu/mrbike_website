import type { Metadata } from "next";
import Link from "next/link";

import { LegalHero, PolicySection } from "@/components/legal";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";
import { breadcrumbSchema, organizationSchema } from "@/seo/json-ld";
import { buildMetadata } from "@/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How MR Bike Doctor collects, uses, and protects your information across the Customer App, Partner App, and mrbikedoctor.com.",
  path: "/privacy-policy",
});

const SUB_HEADING_CLASSNAME = "text-foreground font-heading mt-2 text-base font-semibold";
const LIST_CLASSNAME = "list-disc space-y-1.5 pl-5";

const IMAGE_UPLOADS = [
  { upload: "Profile photo", purpose: "Personalize your account", uploadedBy: "Customers & Partners" },
  {
    upload: "Shop images",
    purpose: "Displayed to customers when choosing a garage",
    uploadedBy: "Partners",
  },
  {
    upload: "Aadhaar card, PAN card, bank passbook, face-verification photo",
    purpose: "Identity and business verification (KYC) before onboarding as a service partner",
    uploadedBy: "Partners",
  },
  {
    upload: "Support ticket attachments",
    purpose: "Help our support team resolve your query",
    uploadedBy: "Customers & Partners",
  },
];

/**
 * /privacy-policy — real, business-supplied policy (sourced from
 * public/privacy-policy.html, last updated July 24, 2026). Covers the
 * Customer App, Partner App, and mrbikedoctor.com.
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
        intro="How MR Bike Doctor collects, uses, and protects your information."
        meta={
          <p className="text-muted-foreground mt-6 text-sm">
            Last updated <strong className="text-foreground font-medium">July 24, 2026</strong> ·
            Applies to the MR Bike Doctor Customer App, the MR Bike Doctor Partner App, and{" "}
            {siteConfig.domain}
          </p>
        }
      />

      <PolicySection id="introduction" title="1. Introduction">
        <p>
          MR Bike Doctor (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates a
          two-wheeler service booking platform consisting of the <strong>MR Bike Doctor</strong>{" "}
          app used by customers to book bike servicing, repairs, and pickup &amp; drop, and the{" "}
          <strong>MR Bike Doctor Partner</strong> app used by garage/service partners to manage
          bookings, service jobs, invoices, and payouts (together, the &ldquo;Platform&rdquo;).
        </p>
        <p>
          This Privacy Policy explains what information we collect from users of the Customer App
          and the Partner App, how we use and protect that information, who we share it with, and
          the choices you have. By creating an account or using the Platform, you agree to the
          practices described in this Privacy Policy.
        </p>
      </PolicySection>

      <PolicySection id="information-we-collect" title="2. Information We Collect">
        <h3 className={SUB_HEADING_CLASSNAME}>2.1 Account &amp; Profile Information</h3>
        <ul className={LIST_CLASSNAME}>
          <li>Mobile phone number (used to log in via OTP)</li>
          <li>Name, email address (optional), profile photo</li>
          <li>Address, city, state and pincode</li>
        </ul>

        <h3 className={SUB_HEADING_CLASSNAME}>2.2 Partner (Garage) Business Information</h3>
        <p>
          Service partners onboarding on the Partner App provide additional business and identity
          details required for verification and payouts:
        </p>
        <ul className={LIST_CLASSNAME}>
          <li>Shop/business name, shop contact number, shop address, locality, city, state and pincode</li>
          <li>Owner name, personal phone/email, alternate phone number</li>
          <li>GST number, Aadhaar number, PAN number</li>
          <li>Bank account details for receiving payouts (account number, IFSC, passbook image)</li>
          <li>Shop images and a face-verification photo captured during onboarding</li>
        </ul>

        <h3 className={SUB_HEADING_CLASSNAME}>2.3 Vehicle Information</h3>
        <p>
          To book a service, customers add their two-wheeler details, including bike name/brand,
          model, variant, engine capacity (CC), and registration/number plate.
        </p>

        <h3 className={SUB_HEADING_CLASSNAME}>2.4 Location Information</h3>
        <p>
          With your permission, we collect precise or approximate GPS location from your device,
          or an address/pincode you enter manually, to find nearby garages and to coordinate
          pickup &amp; drop of your vehicle.
        </p>

        <h3 className={SUB_HEADING_CLASSNAME}>2.5 Booking, Service &amp; Payment Information</h3>
        <p>
          Service selections, booking status, service date, pickup/drop address, kilometre
          reading at last service, service notes, invoices/bills, tax amounts, and
          payment/transaction records (amount, order ID, payment status).
        </p>

        <h3 className={SUB_HEADING_CLASSNAME}>2.6 Referral &amp; Rewards Information</h3>
        <p>
          If the referral program is enabled, we store your referral code, codes you enter, and
          related reward/wallet credit transactions.
        </p>

        <h3 className={SUB_HEADING_CLASSNAME}>2.7 Support &amp; Communication Data</h3>
        <p>
          Messages, attachments and ratings/feedback you submit through in-app support tickets or
          the in-app service assistant, and push-notification delivery status.
        </p>

        <h3 className={SUB_HEADING_CLASSNAME}>2.8 Device &amp; Log Information</h3>
        <p>
          Device push-notification token, IP address, approximate location derived from IP,
          request timestamps, and standard server access logs generated automatically when you
          use the Platform.
        </p>
      </PolicySection>

      <PolicySection id="how-we-use" title="3. How We Use Information">
        <p>We use the information described above to:</p>
        <ul className={LIST_CLASSNAME}>
          <li>Create and authenticate your account using OTP-based phone login</li>
          <li>
            Let customers discover nearby service partners and book bike servicing, repairs, or
            pickup &amp; drop
          </li>
          <li>Enable partners to receive, accept, and fulfil bookings and generate invoices</li>
          <li>Process payments and, for partners, settle earnings/payouts</li>
          <li>Send booking, payment, and support-related push notifications</li>
          <li>Verify partner identity, business details and bank details before onboarding</li>
          <li>Provide customer support and respond to tickets and queries</li>
          <li>Operate referral/reward promotions where enabled</li>
          <li>
            Maintain the security, integrity and reliability of the Platform, and detect fraud or
            abuse
          </li>
          <li>Comply with applicable tax, accounting and legal obligations (e.g. retaining invoices)</li>
        </ul>
        <p>
          We do not use your personal information for automated advertising profiling, and we do
          not sell your personal information to third parties.
        </p>
      </PolicySection>

      <PolicySection id="location" title="4. Location Information">
        <p>Location data is central to how the Platform connects customers with nearby garages:</p>
        <ul className={LIST_CLASSNAME}>
          <li>
            The Customer App requests <strong>Location/GPS permission</strong> to detect your
            current position and show garages near you.
          </li>
          <li>
            We use the <strong>Google Maps Geocoding and Places Autocomplete APIs</strong> to
            convert an address you type into map coordinates and to suggest addresses as you type
            your pickup/drop location.
          </li>
          <li>
            Partners&rsquo; shop location (latitude/longitude) is stored so customers can find and
            get directions to the correct garage.
          </li>
          <li>
            Location data is used only to power search, pickup &amp; drop coordination, and
            service-area logic. You can disable location permission from your device settings at
            any time, though some search and pickup features may not work without it.
          </li>
        </ul>
      </PolicySection>

      <PolicySection id="vehicle" title="5. Vehicle Information">
        <p>
          Vehicle details (make, model, variant, engine CC, and registration number) are linked to
          your customer account and used to recommend the correct services, maintain a service
          history for each bike, and pre-fill details on future bookings. Registration numbers are
          also used to prevent duplicate/fraudulent bike records on the Platform.
        </p>
      </PolicySection>

      <PolicySection id="booking" title="6. Booking Information">
        <p>
          When you create a booking we record the selected services, additional services, assigned
          partner, pickup &amp; drop details, service date, status changes (e.g. pending,
          confirmed, completed, cancelled), and the resulting bill/invoice. Booking status changes
          are pushed to the Customer App and Partner App in real time (via WebSocket/Socket.IO
          connections and push notifications) so both sides stay updated on acceptance, rejection,
          pickup, and completion of a job. Completed bookings and their invoices form your service
          history, viewable in-app.
        </p>
      </PolicySection>

      <PolicySection id="payments" title="7. Payments">
        <p>
          Payments on the Platform are processed through <strong>Razorpay</strong> and{" "}
          <strong>Cashfree Payments</strong> (including Cashfree UPI QR collections), both licensed
          and PCI-DSS compliant payment gateways in India.
        </p>
        <ul className={LIST_CLASSNAME}>
          <li>
            We do not store your full card number, CVV, or UPI PIN — these are captured directly by
            the payment gateway.
          </li>
          <li>
            We store transaction-level records such as order ID, amount, payment status, and
            payment method, so we can reconcile bookings, generate invoices, and process refunds.
          </li>
          <li>
            Partner earnings are settled and tracked through a wallet ledger (credits, debits, and
            payout status), with payouts to partner bank accounts processed via Cashfree Payouts.
          </li>
        </ul>
      </PolicySection>

      <PolicySection id="notifications" title="8. Notifications">
        <p>
          We use <strong>Firebase Cloud Messaging (FCM)</strong> to send push notifications to the
          Customer App and Partner App, such as booking confirmations, status updates, payment
          confirmations, support ticket replies, and (where enabled) offers and promotions. Your
          device&rsquo;s push token is stored against your account so notifications can be
          delivered to your device. You can control notification delivery through your
          device&rsquo;s notification settings; disabling the Notification permission will stop
          push notifications but will not affect your ability to view updates inside the app.
        </p>
      </PolicySection>

      <PolicySection id="images-documents" title="9. Images & Documents">
        <p>Photos and documents you choose to upload are used strictly for the purpose they were collected for:</p>
        <div className="border-border overflow-x-auto rounded-lg border">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/40 text-foreground">
              <tr>
                <th className="px-4 py-2.5 font-semibold">Upload</th>
                <th className="px-4 py-2.5 font-semibold">Purpose</th>
                <th className="px-4 py-2.5 font-semibold">Who uploads it</th>
              </tr>
            </thead>
            <tbody className="divide-border divide-y">
              {IMAGE_UPLOADS.map((row) => (
                <tr key={row.upload}>
                  <td className="px-4 py-2.5 align-top">{row.upload}</td>
                  <td className="px-4 py-2.5 align-top">{row.purpose}</td>
                  <td className="px-4 py-2.5 align-top">{row.uploadedBy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Uploaded images and documents are stored securely in a private <strong>AWS S3</strong>{" "}
          bucket. KYC documents (Aadhaar, PAN, bank passbook) submitted by partners are processed
          using <strong>Azure Form Recognizer (OCR)</strong> to automatically extract text such as
          name and document numbers, which speeds up admin verification — this extraction is used
          only for onboarding verification and is not used for any other purpose.
        </p>
        <p>
          Camera and Gallery/Storage permissions are requested on your device only when you choose
          to take or select a photo (e.g. profile photo, shop photo, KYC document, or a support
          attachment) — we do not access your camera or photo library at any other time.
        </p>
      </PolicySection>

      <PolicySection id="sharing" title="10. Sharing of Information">
        <p>We share information only as necessary to operate the Platform:</p>
        <ul className={LIST_CLASSNAME}>
          <li>
            <strong>Between customers and partners:</strong> booking details, pickup address,
            contact number, and vehicle details are shared with the assigned service partner so
            they can carry out the service, and completed job details are shared back to the
            customer.
          </li>
          <li>
            <strong>Service providers we use to operate the Platform:</strong> Twilio (OTP/SMS
            delivery), Firebase/Google (push notifications and backend infrastructure), Google
            Maps (location and address search), Razorpay and Cashfree Payments (payment processing
            and partner payouts), AWS S3 (secure file storage), and Microsoft Azure (Form
            Recognizer OCR and Azure OpenAI for KYC document processing and the in-app service
            assistant).
          </li>
          <li>
            <strong>Legal &amp; safety:</strong> where required to comply with law, enforce our
            terms, or protect the rights, property or safety of MR Bike Doctor, our users, or the
            public.
          </li>
          <li>
            <strong>Business transfers:</strong> in connection with a merger, acquisition, or sale
            of assets, subject to this Privacy Policy continuing to apply to your information.
          </li>
        </ul>
        <p>We do not sell your personal information to third parties.</p>
      </PolicySection>

      <PolicySection id="security" title="11. Data Security">
        <ul className={LIST_CLASSNAME}>
          <li>All data in transit between the app and our servers is encrypted using HTTPS/TLS.</li>
          <li>
            Passwords, where used, are hashed; account access uses signed authentication tokens
            (JWT) with limited validity.
          </li>
          <li>
            Uploaded images and KYC documents are stored in access-controlled AWS S3 storage, not
            publicly listable.
          </li>
          <li>
            OTPs are time-limited, single-use, and verified using a cryptographically signed hash
            rather than being stored in plain text.
          </li>
          <li>
            Access to partner KYC and bank details is restricted to authorized admin roles for
            verification and payout purposes.
          </li>
        </ul>
        <p>
          No method of transmission or storage is 100% secure; while we work to protect your
          information, we cannot guarantee absolute security.
        </p>
      </PolicySection>

      <PolicySection id="retention" title="12. Data Retention">
        <p>
          We retain personal information for as long as your account is active and as needed to
          provide the Platform&rsquo;s services. Booking records, invoices and payment transaction
          records are retained for the period required under applicable tax and accounting laws,
          even after account deletion. Partner KYC documents are retained for as long as the
          partner is onboarded on the Platform and for a reasonable period afterwards to meet
          compliance and dispute-resolution needs, after which they are securely deleted.
        </p>
      </PolicySection>

      <PolicySection id="rights" title="13. Your Rights">
        <p>You may, at any time:</p>
        <ul className={LIST_CLASSNAME}>
          <li>Access and update your profile, vehicle, and address information from within the app</li>
          <li>
            Withdraw Location, Camera, Gallery/Storage or Notification permissions from your
            device settings
          </li>
          <li>
            Opt out of promotional push notifications while continuing to receive transactional
            ones (booking/payment updates)
          </li>
          <li>Request a copy of the personal information we hold about you</li>
          <li>Request correction of inaccurate information or deletion of your account, as described below</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{" "}
          <a href={`mailto:${siteConfig.contactEmail}`} className="text-primary hover:underline">
            {siteConfig.contactEmail}
          </a>
          .
        </p>
      </PolicySection>

      <PolicySection id="account-deletion" title="14. Account Deletion">
        <p>
          You can request deletion of your MR Bike Doctor customer or partner account by emailing{" "}
          <a href={`mailto:${siteConfig.contactEmail}`} className="text-primary hover:underline">
            {siteConfig.contactEmail}
          </a>{" "}
          from your registered email address or by contacting in-app support with your registered
          phone number. Once verified, we will delete your profile, saved vehicles, saved
          addresses and device tokens from active systems.
        </p>
        <p>
          Certain records — such as completed booking history, invoices, payment transactions and
          partner KYC/payout records — may be retained for a limited period after deletion where
          required for tax, accounting, fraud-prevention or legal compliance purposes, after which
          they are permanently removed. See the full{" "}
          <Link href="/delete-account" className="text-primary hover:underline">
            Account Deletion
          </Link>{" "}
          page for step-by-step instructions.
        </p>
      </PolicySection>

      <PolicySection id="children" title="15. Children's Privacy">
        <p>
          The Platform is intended for use by individuals who are at least 18 years old, as
          booking vehicle servicing requires vehicle ownership/registration details. We do not
          knowingly collect personal information from children. If you believe a child has
          provided us with personal information, please contact us and we will take steps to
          delete it.
        </p>
      </PolicySection>

      <PolicySection id="changes" title="16. Changes to this Privacy Policy">
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices,
          features, or legal requirements. When we make material changes, we will update the
          &ldquo;Last Updated&rdquo; date at the top of this page. We encourage you to review this
          page periodically.
        </p>
      </PolicySection>

      <PolicySection id="contact" title="17. Contact Us">
        <p>
          If you have any questions, concerns, or requests regarding this Privacy Policy or your
          personal information, please reach out:
        </p>
        <p className="text-muted-foreground text-sm">
          Email:{" "}
          <a href={`mailto:${siteConfig.contactEmail}`} className="text-primary hover:underline">
            {siteConfig.contactEmail}
          </a>{" "}
          · Or visit the{" "}
          <Link href="/contact" className="text-primary hover:underline">
            Contact page
          </Link>
          .
        </p>
      </PolicySection>
    </>
  );
}
