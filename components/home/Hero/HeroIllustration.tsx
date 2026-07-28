import { MapPin, Wrench } from "lucide-react";

/**
 * Decorative background motif: a location pin + wrench silhouette, restrained
 * to a low-opacity line texture behind the Hero text column (Phase 3 §3).
 */
export function HeroIllustration() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <MapPin
        className="text-muted-foreground/10 absolute -top-8 -right-10 size-64 sm:size-80 lg:size-96"
        strokeWidth={0.75}
      />
      <Wrench
        className="text-muted-foreground/10 absolute top-1/3 -right-4 size-40 -rotate-12 sm:size-48 lg:size-64"
        strokeWidth={0.75}
      />
    </div>
  );
}
