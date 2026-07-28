import { ExternalLink } from "lucide-react";
import Image from "next/image";

import founderPhoto from "@/assets/Founder_kolanu_suresh_netha.jpeg";
import { Section } from "@/components/shared/Section";
import { siteConfig } from "@/config/site";

const HEADING_ID = "founder-profile-heading";
export const FOUNDER_NAME = "Kolanu Suresh Netha";
export const FOUNDER_TITLE = "Founder";

/** Founder profile header (Phase 4 §7) — real name and photo, owner-supplied. */
export function FounderProfile() {
  return (
    <Section className="pb-0 md:pb-0" aria-labelledby={HEADING_ID}>
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <Image
          src={founderPhoto}
          alt={`${FOUNDER_NAME}, ${FOUNDER_TITLE} of MR Bike Doctor`}
          width={128}
          height={128}
          className="size-32 shrink-0 rounded-2xl object-cover"
          priority
        />

        <div className="flex flex-1 flex-col gap-3">
          <p className="text-primary text-sm font-semibold">Meet the Founder</p>
          <h1
            id={HEADING_ID}
            className="font-heading text-foreground text-4xl font-bold sm:text-5xl"
          >
            {FOUNDER_NAME}
          </h1>
          <p className="text-muted-foreground text-lg">{FOUNDER_TITLE}, MR Bike Doctor</p>
          {siteConfig.social.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary focus-visible:ring-ring/50 inline-flex w-fit items-center gap-1 rounded-xs text-sm font-medium outline-none hover:underline focus-visible:ring-3"
            >
              Connect on {link.name}
              <ExternalLink className="size-3.5" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
