import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/shared/Section";
import appPreview from "@/assets/brand/feature-graphic.jpg";

interface DownloadAppCtaProps {
  title?: string;
  description?: string;
  className?: string;
}

/**
 * Shared "Download App" conversion section (Phase 4 §5) — every content page
 * funnels here since booking, pricing, and tracking only happen in the app.
 */
export function DownloadAppCta({
  title = "Everything above happens in the app",
  description = "Booking a service, seeing pricing, tracking your mechanic, and paying all happen inside the MR Bike Doctor app — download it to get started.",
  className,
}: DownloadAppCtaProps) {
  return (
    <Section className={className} aria-label="Download the MR Bike Doctor app">
      <div className="border-border bg-card grid grid-cols-1 items-center gap-8 rounded-2xl border p-8 md:grid-cols-2 md:p-12">
        <div className="flex flex-col gap-4">
          <h2 className="font-heading text-foreground text-2xl font-semibold sm:text-3xl">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg">{description}</p>
          <div>
            <Button
              size="lg"
              className="h-11 px-5"
              nativeButton={false}
              render={<Link href="/download" />}
            >
              Download the App
            </Button>
          </div>
        </div>
        <Image
          src={appPreview}
          alt="MR Bike Doctor mobile app interface preview"
          className="w-full rounded-xl object-cover"
          sizes="(min-width: 768px) 40vw, 90vw"
        />
      </div>
    </Section>
  );
}
