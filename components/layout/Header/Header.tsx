import { BikeIcon, DownloadIcon } from "lucide-react";
import Link from "next/link";

import { getAllCities, getLiveCities } from "@/lib/content/cities";
import { siteConfig } from "@/config/site";

import { MobileNav } from "./MobileNav";
import { Navigation } from "./Navigation";
import { TopStrip } from "./TopStrip";

/** Builds the top-strip coverage line from the real cities dataset — never invents launch cities. */
function buildCoverageText() {
  const live = getLiveCities();
  const comingSoon = getAllCities().length - live.length;

  if (live.length === 0) {
    return `Launching soon in ${getAllCities().length} cities`;
  }

  const liveNames = live.map((city) => city.name).join(", ");
  if (comingSoon === 0) {
    return `Serving ${liveNames}`;
  }
  return `Serving ${liveNames} · ${comingSoon} more ${comingSoon === 1 ? "city" : "cities"} coming soon`;
}

/**
 * Sticky, two-tier "split-bar" header. Server component: the only
 * interactive parts (active nav state, mobile menu, scroll-collapse of the
 * top strip) are isolated into their own client islands.
 */
export function Header() {
  const phoneHref = `tel:${siteConfig.contactPhone.replace(/[^+\d]/g, "")}`;

  return (
    <header className="bg-background sticky top-0 z-50 [overflow-anchor:none]">
      <TopStrip
        coverageText={buildCoverageText()}
        phoneDisplay={siteConfig.contactPhone}
        phoneHref={phoneHref}
      />

      <div className="border-border/60 bg-background/80 supports-backdrop-filter:bg-background/60 border-b backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-[22px] py-3">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2"
            aria-label={`${siteConfig.name} — home`}
          >
            <span className="bg-primary flex size-[30px] shrink-0 items-center justify-center rounded-full">
              <BikeIcon className="text-primary-foreground size-4" aria-hidden="true" />
            </span>
            <span className="text-[13px] font-medium text-white">{siteConfig.name}</span>
          </Link>

          <Navigation className="hidden lg:flex" />

          <div className="flex shrink-0 items-center gap-2">
            <Link
              href="/download"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hidden items-center rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors lg:inline-flex"
            >
              Download app
            </Link>

            <Link
              href="/download"
              aria-label="Download app"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground inline-flex size-8 shrink-0 items-center justify-center rounded-full border transition-colors lg:hidden"
            >
              <DownloadIcon className="size-4" aria-hidden="true" />
            </Link>

            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
