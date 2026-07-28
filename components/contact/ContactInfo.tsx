import { ExternalLink, HelpCircle, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import supportAgentIllustration from "@/assets/illustrations/contact/support-agent.svg";
import { siteConfig } from "@/config/site";

const TILE_CLASSNAME =
  "border-border bg-card hover:border-primary/40 focus-visible:ring-ring/50 flex flex-col gap-3 rounded-xl border p-5 outline-none transition-colors hover:shadow-sm focus-visible:ring-3";
const ICON_WRAPPER_CLASSNAME =
  "bg-primary/10 text-primary flex size-11 items-center justify-center rounded-lg";

/** Contact channels — email/phone/address/social as ways to reach the company, not a booking/quote flow (Phase 4 §5). */
export function ContactInfo() {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
      <div className="hidden shrink-0 lg:block lg:w-56">
        <Image src={supportAgentIllustration} alt="" aria-hidden="true" className="w-full" />
      </div>

      <div className="grid grow grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <a href={`mailto:${siteConfig.contactEmail}`} className={TILE_CLASSNAME}>
          <span className={ICON_WRAPPER_CLASSNAME}>
            <Mail className="size-5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="font-heading text-foreground text-base font-semibold">Email</h3>
            <p className="text-muted-foreground text-sm">{siteConfig.contactEmail}</p>
          </div>
        </a>

        {siteConfig.contactPhone && (
          <a href={`tel:${siteConfig.contactPhone.replace(/\s+/g, "")}`} className={TILE_CLASSNAME}>
            <span className={ICON_WRAPPER_CLASSNAME}>
              <Phone className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-heading text-foreground text-base font-semibold">Phone</h3>
              <p className="text-muted-foreground text-sm">{siteConfig.contactPhone}</p>
            </div>
          </a>
        )}

        {siteConfig.address && (
          <div className={TILE_CLASSNAME}>
            <span className={ICON_WRAPPER_CLASSNAME}>
              <MapPin className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-heading text-foreground text-base font-semibold">Address</h3>
              <p className="text-muted-foreground text-sm">
                {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality},{" "}
                {siteConfig.address.addressRegion} {siteConfig.address.postalCode}
              </p>
            </div>
          </div>
        )}

        {siteConfig.social.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={TILE_CLASSNAME}
          >
            <span className={ICON_WRAPPER_CLASSNAME}>
              <ExternalLink className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-heading text-foreground text-base font-semibold">{link.name}</h3>
              <p className="text-muted-foreground text-sm">Connect with MR Bike Doctor</p>
            </div>
          </a>
        ))}

        <Link href="/faq" className={TILE_CLASSNAME}>
          <span className={ICON_WRAPPER_CLASSNAME}>
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
    </div>
  );
}
