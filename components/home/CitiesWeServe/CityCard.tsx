import { CheckCircle2, Clock, MapPin } from "lucide-react";
import Link from "next/link";

import { AREAS } from "@/components/cities/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import type { CityRecord } from "./mock-data";

interface CityCardProps {
  city: CityRecord;
  className?: string;
}

/** A single city tile — same shape for a live city or a coming-soon one. */
export function CityCard({ city, className }: CityCardProps) {
  const isLive = city.status === "live";
  const StatusIcon = isLive ? CheckCircle2 : Clock;
  const areaCount = AREAS.filter((area) => area.citySlug === city.slug).length;

  return (
    <div
      className={cn(
        "border-border bg-card flex w-64 shrink-0 flex-col gap-3 rounded-xl border p-5 sm:w-auto sm:shrink",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="bg-primary/10 text-primary flex size-11 items-center justify-center rounded-lg">
          <MapPin className="size-5" aria-hidden="true" />
        </span>
        <Badge
          variant="outline"
          className={cn(
            "gap-1",
            isLive
              ? "border-success/30 bg-success/15 text-success"
              : "border-warning/30 bg-warning/15 text-warning",
          )}
        >
          <StatusIcon className="size-3.5" aria-hidden="true" />
          {isLive ? "Live" : "Coming Soon"}
        </Badge>
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="font-heading text-foreground text-base font-semibold">{city.name}</h3>
        <p className="text-muted-foreground text-sm">
          {isLive
            ? `${areaCount} area${areaCount === 1 ? "" : "s"} covered · Verified mechanics`
            : `${city.state} — launching soon`}
        </p>
      </div>

      <Button
        size="sm"
        variant={isLive ? "default" : "outline"}
        className="mt-auto w-full"
        nativeButton={false}
        render={<Link href={`/cities/${city.slug}`} />}
      >
        {isLive ? `Explore ${city.name}` : "Get Notified"}
      </Button>
    </div>
  );
}
