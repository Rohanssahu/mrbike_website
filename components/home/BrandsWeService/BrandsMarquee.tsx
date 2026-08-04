import Image from "next/image";
import Link from "next/link";

import { BRAND_LOGOS } from "./brandLogos";
import { BRANDS } from "./mock-data";

interface MarqueeBrand {
  name: string;
  slug: string;
  modelsCount: number;
}

/** Derived from the shared `BRANDS` roster in `mock-data.ts`, trimmed to the fields the marquee needs. */
const brandsData: MarqueeBrand[] = BRANDS.map((brand) => ({
  name: brand.name,
  slug: brand.slug,
  modelsCount: brand.modelCount,
}));

function MarqueeCard({ brand }: { brand: MarqueeBrand }) {
  const logo = BRAND_LOGOS[brand.slug];

  return (
    <Link
      href={`/brands/${brand.slug}`}
      className="group bg-card hover:border-primary flex w-[150px] shrink-0 flex-col items-center gap-2 rounded-xl border border-[rgba(254,212,40,0.15)] px-4 py-5 text-center transition-colors"
    >
      <span className="flex size-16 items-center justify-center rounded-full border border-white/10 bg-white p-3 shadow-sm">
        {logo ? (
          <Image src={logo} alt="" sizes="64px" className="size-full object-contain" />
        ) : (
          <span className="text-primary text-sm font-semibold">
            {brand.name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </span>
      <span className="font-heading text-sm font-medium text-white">{brand.name}</span>
      <span className="text-[11px] text-white/60">{brand.modelsCount} models supported</span>
    </Link>
  );
}

/**
 * Auto-scrolling brand marquee. The track renders the brand list twice and
 * loops via a CSS `translateX(0 → -50%)` keyframe (see `.marquee-track` in
 * globals.css) so the seam is invisible — no JS animation loop needed.
 * Hover-pause is plain CSS; touch-pause needs JS since there's no CSS
 * equivalent of `:hover` for a press-and-hold on mobile.
 */
export function BrandsMarquee() {
  return (
    <div className="relative overflow-hidden">
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r to-transparent sm:w-32" />
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l to-transparent sm:w-32" />

      <div className="marquee-track flex w-max gap-4">
        {[...brandsData, ...brandsData].map((brand, index) => (
          <MarqueeCard key={`${brand.slug}-${index}`} brand={brand} />
        ))}
      </div>
    </div>
  );
}
