import Image from "next/image";
import Link from "next/link";

import founderPhoto from "@/assets/Founder_kolanu_suresh_netha.jpeg";
import { FOUNDER_NAME, FOUNDER_TITLE } from "@/components/founder/FounderProfile";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

const HEADING_ID = "founder-teaser-heading";

/** Short founder excerpt on /about, linking to the full profile (Phase 4 §6/§7). */
export function FounderTeaser() {
  return (
    <Section aria-labelledby={HEADING_ID}>
      <SectionHeading id={HEADING_ID} eyebrow="Founder" title="The person behind MR Bike Doctor" />

      <div className="border-border bg-card mt-8 flex flex-col items-start gap-6 rounded-2xl border p-6 sm:flex-row sm:items-center">
        <Image
          src={founderPhoto}
          alt={`${FOUNDER_NAME}, ${FOUNDER_TITLE} of MR Bike Doctor`}
          width={80}
          height={80}
          className="size-20 shrink-0 rounded-full object-cover"
        />

        <div className="flex flex-1 flex-col gap-3">
          <div>
            <p className="font-heading text-foreground text-lg font-semibold">{FOUNDER_NAME}</p>
            <p className="text-muted-foreground text-sm">{FOUNDER_TITLE}, MR Bike Doctor</p>
          </div>
          <div>
            <Button variant="outline" nativeButton={false} render={<Link href="/about/founder" />}>
              Meet the Founder
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
