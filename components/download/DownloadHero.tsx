import Image from "next/image";

import logo from "@/assets/brand/logo.png";
import partnerLogo from "@/assets/delerappscreenshot/deler_logo_app.png";
import appEcosystemIllustration from "@/assets/illustrations/download/app-ecosystem.svg";
import { Section } from "@/components/shared/Section";
import { AppStoreBadge, GooglePlayBadge, StoreBadges } from "@/components/shared/StoreBadges";
import { siteConfig } from "@/config/site";

const HEADING_ID = "download-hero-heading";

/**
 * /download hero — the sitewide conversion target every other CTA funnels
 * to (Phase 4 §5/§13 item 5). Shows both apps side by side: the customer
 * app and the Partner (garage/mechanic) app, mirroring the homepage's
 * separate AppShowcase/PartnerAppShowcase sections. Never links to a
 * placeholder URL: a missing store link renders a disabled "Coming Soon"
 * button instead (Phase 5F production cleanup), evaluated independently
 * per store so one going live before the other still looks intentional.
 */
export function DownloadHero() {
  const hasAndroidLink = Boolean(siteConfig.android.url);
  const hasIosLink = Boolean(siteConfig.ios.url);

  return (
    <Section aria-labelledby={HEADING_ID} className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <Image
          src={appEcosystemIllustration}
          alt=""
          className="absolute top-1/2 left-1/2 w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 opacity-[0.07]"
        />
      </div>

      <div className="flex flex-col items-center gap-6 text-center">
        <div className="max-w-2xl">
          <h1 id={HEADING_ID} className="font-heading text-foreground text-4xl font-bold sm:text-5xl">
            Get the {siteConfig.name} Apps
          </h1>
          <p className="text-muted-foreground mt-4 text-lg">
            Booking, pricing, live tracking, and payment all happen in the app — this website is
            for browsing services and information only.
          </p>
        </div>

        <div className="mt-4 grid w-full max-w-3xl gap-6 sm:grid-cols-2">
          <div className="border-border bg-card flex flex-col items-center gap-4 rounded-2xl border p-6">
            <Image
              src={logo}
              alt={`${siteConfig.name} app icon`}
              width={72}
              height={72}
              className="rounded-2xl"
              priority
            />
            <div>
              <h2 className="font-heading text-foreground text-lg font-semibold">For Customers</h2>
              <p className="text-muted-foreground mt-1 text-sm">
                Book doorstep service and track your mechanic.
              </p>
            </div>
            <StoreBadges className="justify-center" />
            {(!hasAndroidLink || !hasIosLink) && (
              <p className="text-muted-foreground text-sm">
                Store link{!hasAndroidLink && !hasIosLink ? "s" : ""} will be available after app
                publishing.
              </p>
            )}
          </div>

          <div className="border-border bg-card flex flex-col items-center gap-4 rounded-2xl border p-6">
            <Image
              src={partnerLogo}
              alt="MR Bike Doctor Partner app icon"
              width={72}
              height={72}
              className="rounded-2xl"
            />
            <div>
              <h2 className="font-heading text-foreground text-lg font-semibold">For Garage Partners</h2>
              <p className="text-muted-foreground mt-1 text-sm">
                Accept bookings, track jobs, and collect payments.
              </p>
            </div>
            <div className="grid w-full grid-cols-2 items-center gap-2 sm:gap-3">
              <GooglePlayBadge
                href={siteConfig.partnerAndroid.url}
                eyebrow="INTERNAL TESTING ON"
                label="Google Play"
              />
              <AppStoreBadge href="" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
