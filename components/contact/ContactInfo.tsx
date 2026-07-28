import { HelpCircle, Mail, Phone } from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/config/site";

/** Contact channels — email/phone as a way to reach the company, not a booking/quote flow (Phase 4 §5). */
export function ContactInfo() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <a
        href={`mailto:${siteConfig.contactEmail}`}
        className="border-border bg-card hover:border-primary/40 flex flex-col gap-3 rounded-xl border p-5 transition-colors hover:shadow-sm"
      >
        <span className="bg-primary/10 text-primary flex size-11 items-center justify-center rounded-lg">
          <Mail className="size-5" aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-heading text-foreground text-base font-semibold">Email</h3>
          <p className="text-muted-foreground text-sm">{siteConfig.contactEmail}</p>
        </div>
      </a>

      {siteConfig.contactPhone && (
        <a
          href={`tel:${siteConfig.contactPhone}`}
          className="border-border bg-card hover:border-primary/40 flex flex-col gap-3 rounded-xl border p-5 transition-colors hover:shadow-sm"
        >
          <span className="bg-primary/10 text-primary flex size-11 items-center justify-center rounded-lg">
            <Phone className="size-5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="font-heading text-foreground text-base font-semibold">Phone</h3>
            <p className="text-muted-foreground text-sm">{siteConfig.contactPhone}</p>
          </div>
        </a>
      )}

      <Link
        href="/faq"
        className="border-border bg-card hover:border-primary/40 flex flex-col gap-3 rounded-xl border p-5 transition-colors hover:shadow-sm"
      >
        <span className="bg-primary/10 text-primary flex size-11 items-center justify-center rounded-lg">
          <HelpCircle className="size-5" aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-heading text-foreground text-base font-semibold">In-App Help</h3>
          <p className="text-muted-foreground text-sm">
            For booking or service issues, use Help inside the app for the fastest response.
          </p>
        </div>
      </Link>
    </div>
  );
}
