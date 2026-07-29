import { MapPin, Search, Star, Wrench } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Phone-mockup showing the app's live-search screen — dark map, a service
 * search in progress ("Oil Service"), and 4-5 nearby verified garages
 * pinned on the map with names + ratings (Rapido/Uber-style discovery
 * moment). Uses the Mr. Bike Doctor navy/gold brand palette (theme tokens
 * only — see styles/globals.css).
 *
 * Garage names are illustrative placeholders only — no real ratings,
 * distances, or ETAs are implied as live data.
 */

// Dummy nearby garages — position is % of the map area (top/left)
const garages = [
  { name: "Mr Bike Garage", rating: 4.8, top: "30%", left: "22%" },
  { name: "Mahakal Service Center", rating: 5.0, top: "48%", left: "62%" },
  { name: "Speed Bike Care", rating: 4.6, top: "62%", left: "18%" },
  { name: "City Garage", rating: 4.9, top: "68%", left: "70%" },
  { name: "Bhole Motors", rating: 4.7, top: "20%", left: "58%" },
];

// Nearest garage gets the dashed route line + highlight styling
const nearestIndex = 0;
const userPos = { top: "88%", left: "50%" };

export function PhonePreview() {
  const nearest = garages[nearestIndex];

  return (
    <div
      aria-hidden="true"
      className="relative mx-auto flex aspect-[9/19] w-56 items-center justify-center rounded-[2.5rem] border-8 border-neutral-800 bg-neutral-900 p-2 shadow-2xl lg:w-72"
    >
      <div className="bg-primary-dark relative flex size-full flex-col overflow-hidden rounded-[1.75rem]">
        {/* notch */}
        <div className="absolute top-2 left-1/2 h-4 w-20 -translate-x-1/2 rounded-full bg-white/15" />

        {/* search bar */}
        <div className="flex flex-col gap-1.5 px-3 pt-7 pb-2">
          <div className="bg-white flex items-center gap-1.5 rounded-full px-2.5 py-1.5 shadow">
            <Search className="text-primary-dark size-3 shrink-0" />
            <span className="text-primary-dark flex-1 truncate text-[9px] font-semibold">
              Search &quot;Oil Service&quot; nearby
            </span>
            <span className="bg-accent size-1.5 shrink-0 animate-pulse rounded-full" />
          </div>
        </div>

        {/* map area */}
        <div className="relative flex-1 overflow-hidden">
          {/* grid backdrop */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          />

          {/* dashed route to nearest garage */}
          <svg className="text-accent absolute inset-0 size-full" aria-hidden="true">
            <line
              x1={userPos.left}
              y1={userPos.top}
              x2={nearest.left}
              y2={nearest.top}
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              opacity="0.7"
            />
          </svg>

          {/* garage pins */}
          {garages.map((g, i) => {
            const isNearest = i === nearestIndex;
            return (
              <div
                key={g.name}
                className="absolute flex -translate-x-1/2 -translate-y-full flex-col items-center"
                style={{ top: g.top, left: g.left }}
              >
                {/* label pill */}
                <div
                  className={cn(
                    "text-primary-dark mb-1 flex items-center gap-1 rounded-full px-2 py-0.5 whitespace-nowrap shadow",
                    isNearest ? "bg-accent" : "bg-white",
                  )}
                >
                  <span className="text-[7.5px] font-semibold">{g.name}</span>
                  <span className="flex items-center gap-0.5 text-[7px] font-bold">
                    <Star className="size-2" fill="currentColor" strokeWidth={0} />
                    {g.rating.toFixed(1)}
                  </span>
                </div>
                {/* pin dot */}
                <div
                  className={cn(
                    "flex size-4 items-center justify-center rounded-full shadow-md",
                    isNearest ? "bg-accent" : "bg-white/85",
                  )}
                >
                  <Wrench className="text-primary-dark size-2.5" />
                </div>
              </div>
            );
          })}

          {/* user location pulse */}
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ top: userPos.top, left: userPos.left }}
          >
            <span className="bg-accent/30 absolute -inset-2 animate-ping rounded-full" />
            <span className="bg-accent border-primary-dark relative block size-3 rounded-full border-2" />
          </div>
        </div>

        {/* bottom sheet — nearest results list */}
        <div className="bg-primary space-y-2 rounded-t-2xl p-3 shadow-[0_-6px_16px_rgba(0,0,0,0.25)]">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold text-white">Garages near you</span>
            <span className="text-accent flex items-center gap-1 text-[8px] font-medium">
              <span className="bg-accent size-1.5 animate-pulse rounded-full" />
              Live
            </span>
          </div>

          {garages.slice(0, 2).map((g) => (
            <div key={g.name} className="flex items-center gap-2">
              <div className="bg-accent/15 flex size-6 shrink-0 items-center justify-center rounded-full">
                <Wrench className="text-accent size-3" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[9px] font-medium text-white">{g.name}</p>
                <div className="mt-1 flex items-center gap-1">
                  <Star className="text-accent size-2" fill="currentColor" strokeWidth={0} />
                  <span className="text-[8px] text-white/60">{g.rating.toFixed(1)}</span>
                </div>
              </div>
              <MapPin className="text-accent size-3 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
