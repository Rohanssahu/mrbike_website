import { MapPin, Search, Wrench } from "lucide-react";

/**
 * Phone-mockup placeholder showing the app's live-search screen — a location
 * already entered, a service search in progress ("Oil Change"), and nearby
 * verified mechanics appearing on the map in real time (the Rapido/Uber-style
 * discovery moment, Phase 3 §3 "App preview concept"). Built from styled
 * primitives rather than a screenshot asset, which doesn't exist yet.
 * Uses the app's own navy/yellow palette (brand-* tokens, see
 * brand-assets-source-of-truth memory) instead of the site's neutral
 * grayscale UI tokens, since this is meant to read as a screenshot of the
 * actual app rather than a page of the site.
 * Deliberately generic (no named mechanic, no star rating, no specific ETA
 * or distance) — per the zero-fabrication rule, an illustrative mockup still
 * shouldn't assert a specific person, rating, or timing as if it were real
 * (Phase 5F production cleanup).
 */
export function PhonePreview() {
  return (
    <div
      aria-hidden="true"
      className="border-foreground/10 bg-foreground/5 relative mx-auto hidden aspect-[9/19] w-56 items-center justify-center rounded-[2.5rem] border-8 p-2 shadow-2xl md:flex lg:w-72"
    >
      <div className="bg-brand-navy relative flex size-full flex-col overflow-hidden rounded-[1.75rem]">
        <div className="absolute top-2 left-1/2 h-4 w-20 -translate-x-1/2 rounded-full bg-white/15" />

        <div className="flex flex-col gap-1.5 px-3 pt-7 pb-2">
          <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1.5">
            <MapPin className="text-brand-yellow size-3 shrink-0" fill="currentColor" />
            <span className="truncate text-[9px] font-medium text-white">Your location · Hyderabad</span>
          </div>
          <div className="bg-card flex items-center gap-1.5 rounded-full px-2.5 py-1.5 shadow">
            <Search className="text-brand-navy size-3 shrink-0" />
            <span className="text-foreground flex-1 truncate text-[9px] font-semibold">Oil Change</span>
            <span className="bg-brand-yellow size-1.5 shrink-0 animate-pulse rounded-full" />
          </div>
        </div>

        <div className="relative flex-1 overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          />

          <svg className="absolute inset-0 size-full" aria-hidden="true">
            <line
              x1="50%"
              y1="78%"
              x2="29%"
              y2="38%"
              stroke="var(--color-brand-yellow)"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              opacity="0.6"
            />
          </svg>

          <div className="bg-brand-yellow absolute top-[34%] left-[24%] flex size-5 items-center justify-center rounded-full shadow-md">
            <Wrench className="text-brand-navy size-2.5" />
          </div>
          <div className="absolute top-[54%] left-[68%] flex size-4 items-center justify-center rounded-full bg-white/70 shadow">
            <Wrench className="text-brand-navy size-2" />
          </div>

          <div className="absolute top-[78%] left-1/2 -translate-x-1/2">
            <span className="bg-brand-yellow/30 absolute -inset-2 animate-ping rounded-full" />
            <span className="bg-brand-yellow border-brand-navy relative block size-3 rounded-full border-2" />
          </div>
        </div>

        <div className="bg-card space-y-2 rounded-t-2xl p-3 shadow-[0_-6px_16px_rgba(0,0,0,0.15)]">
          <div className="flex items-center justify-between">
            <span className="text-foreground text-[10px] font-semibold">Mechanics near you</span>
            <span className="text-brand-yellow-dark flex items-center gap-1 text-[8px] font-medium">
              <span className="bg-brand-yellow-dark size-1.5 animate-pulse rounded-full" />
              Live
            </span>
          </div>

          {["Nearest mechanic", "2nd closest"].map((label) => (
            <div key={label} className="flex items-center gap-2">
              <div className="bg-brand-yellow/15 flex size-6 shrink-0 items-center justify-center rounded-full">
                <Wrench className="text-brand-yellow-dark size-3" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-foreground truncate text-[9px] font-medium">{label}</p>
                <div className="bg-muted mt-1 h-1 w-10 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
