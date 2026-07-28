import Image from "next/image";

import logo from "@/assets/brand/logo.png";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/shared/Section";
import { siteConfig } from "@/config/site";

const HEADING_ID = "download-hero-heading";

/**
 * /download hero — the sitewide conversion target every other CTA funnels
 * to (Phase 4 §5/§13 item 5). Never links to a placeholder URL: a missing
 * store link renders a disabled "Coming Soon" button instead (Phase 5F
 * production cleanup), evaluated independently per store so one going live
 * before the other still looks intentional.
 */
export function DownloadHero() {
  const hasAndroidLink = Boolean(siteConfig.android.url);
  const hasIosLink = Boolean(siteConfig.ios.url);

  return (
    <Section aria-labelledby={HEADING_ID}>
      <div className="flex flex-col items-center gap-6 text-center">
        <Image
          src={logo}
          alt={`${siteConfig.name} app icon`}
          width={96}
          height={96}
          className="rounded-2xl"
          priority
        />

        <div className="max-w-2xl">
          <h1 id={HEADING_ID} className="font-heading text-foreground text-4xl font-bold sm:text-5xl">
            Get the {siteConfig.name} App
          </h1>
          <p className="text-muted-foreground mt-4 text-lg">
            Booking, pricing, live tracking, and payment all happen in the app — this website is
            for browsing services and information only.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {hasAndroidLink ? (
            <Button
              size="lg"
              className="h-11 px-5"
              nativeButton={false}
              render={<a href={siteConfig.android.url} target="_blank" rel="noopener noreferrer" />}
            >
              Get it on Google Play
            </Button>
          ) : (
            <Button size="lg" className="h-11 px-5" disabled aria-label="Google Play link coming soon">
              Coming Soon on Google Play
            </Button>
          )}

          {hasIosLink ? (
            <Button
              size="lg"
              variant="outline"
              className="h-11 px-5"
              nativeButton={false}
              render={<a href={siteConfig.ios.url} target="_blank" rel="noopener noreferrer" />}
            >
              Download on the App Store
            </Button>
          ) : (
            <Button
              size="lg"
              variant="outline"
              className="h-11 px-5"
              disabled
              aria-label="App Store link coming soon"
            >
              Coming Soon on the App Store
            </Button>
          )}
        </div>

        {(!hasAndroidLink || !hasIosLink) && (
          <p className="text-muted-foreground text-sm">
            Store link{!hasAndroidLink && !hasIosLink ? "s" : ""} will be available after app
            publishing.
          </p>
        )}
      </div>
    </Section>
  );
}
