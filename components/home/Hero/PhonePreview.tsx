import { MapPin, Navigation, Star } from "lucide-react";

/**
 * Phone-mockup placeholder showing the app's live-tracking screen — the most
 * concrete, differentiated thing the app does (Phase 3 §3 "App preview concept").
 * Built from styled primitives rather than a screenshot asset, which doesn't exist yet.
 */
export function PhonePreview() {
  return (
    <div
      aria-hidden="true"
      className="border-foreground/10 bg-foreground/5 relative mx-auto hidden aspect-[9/19] w-56 items-center justify-center rounded-[2.5rem] border-8 p-2 shadow-2xl md:flex lg:w-72"
    >
      <div className="bg-card relative flex size-full flex-col overflow-hidden rounded-[1.75rem]">
        <div className="bg-foreground/10 absolute top-2 left-1/2 h-4 w-20 -translate-x-1/2 rounded-full" />

        <div className="from-muted to-secondary relative flex-1 bg-linear-to-br">
          <MapPin
            className="text-primary absolute top-1/2 left-1/2 size-8 -translate-x-1/2 -translate-y-1/2"
            fill="currentColor"
          />
          <div className="bg-card absolute top-10 right-4 flex items-center gap-1 rounded-full px-2 py-1 text-[10px] font-medium shadow">
            <Navigation className="text-primary size-3" />
            Mechanic en route
          </div>
        </div>

        <div className="border-border bg-card space-y-2 border-t p-3">
          <div className="flex items-center justify-between">
            <span className="text-foreground text-xs font-semibold">Rahul is on the way</span>
            <span className="text-muted-foreground flex items-center gap-0.5 text-xs">
              <Star className="size-3 fill-current" />
              4.9
            </span>
          </div>
          <p className="text-muted-foreground text-[11px]">Arriving in 12 min · Gachibowli</p>
        </div>
      </div>
    </div>
  );
}
