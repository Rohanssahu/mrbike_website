"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface MarqueeBrand {
  code: string;
  name: string;
  slug: string;
  modelsCount: number;
}

/** Mirrors the brand roster in `mock-data.ts` — kept as a flat, marquee-only shape here so this component has no dependency on the full `BrandRecord` used by the brand/model detail pages. */
const brandsData: MarqueeBrand[] = [
  { code: "RE", name: "Royal Enfield", slug: "royal-enfield", modelsCount: 6 },
  { code: "HN", name: "Honda", slug: "honda", modelsCount: 8 },
  { code: "TVS", name: "TVS", slug: "tvs", modelsCount: 7 },
  { code: "YM", name: "Yamaha", slug: "yamaha", modelsCount: 5 },
  { code: "BJ", name: "Bajaj", slug: "bajaj", modelsCount: 6 },
  { code: "HR", name: "Hero", slug: "hero", modelsCount: 6 },
  { code: "SZ", name: "Suzuki", slug: "suzuki", modelsCount: 4 },
  { code: "KTM", name: "KTM", slug: "ktm", modelsCount: 4 },
  { code: "JW", name: "Jawa", slug: "jawa", modelsCount: 3 },
  { code: "YZ", name: "Yezdi", slug: "yezdi", modelsCount: 3 },
  { code: "BMW", name: "BMW", slug: "bmw", modelsCount: 3 },
  { code: "TR", name: "Triumph", slug: "triumph", modelsCount: 3 },
];

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    const handleChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  return reduced;
}

function MarqueeCard({ brand }: { brand: MarqueeBrand }) {
  return (
    <Link
      href={`/brands/${brand.slug}`}
      className="group flex w-[150px] shrink-0 flex-col items-center gap-2 rounded-xl border border-[rgba(254,212,40,0.15)] bg-card px-4 py-5 text-center transition-colors hover:border-primary"
    >
      <span className="bg-accent-soft flex size-11 items-center justify-center rounded-full text-sm font-semibold text-primary">
        {brand.code}
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
  const reducedMotion = useReducedMotion();
  const [touchPaused, setTouchPaused] = useState(false);

  if (reducedMotion) {
    return (
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-4 px-4">
        {brandsData.map((brand) => (
          <MarqueeCard key={brand.code} brand={brand} />
        ))}
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r to-transparent sm:w-32" />
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l to-transparent sm:w-32" />

      <div
        className="marquee-track flex w-max gap-4"
        style={touchPaused ? { animationPlayState: "paused" } : undefined}
        onTouchStart={() => setTouchPaused(true)}
        onTouchEnd={() => setTouchPaused(false)}
        onTouchCancel={() => setTouchPaused(false)}
      >
        {[...brandsData, ...brandsData].map((brand, index) => (
          <MarqueeCard key={`${brand.code}-${index}`} brand={brand} />
        ))}
      </div>
    </div>
  );
}
