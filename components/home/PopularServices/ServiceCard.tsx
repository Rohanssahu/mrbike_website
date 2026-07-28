import { Clock } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import type { ServiceRecord } from "./mock-data";

interface ServiceCardProps {
  service: ServiceRecord;
  className?: string;
}

/** A single scannable service tile: icon, name, description, duration, price, CTA. */
export function ServiceCard({ service, className }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Card
      className={cn(
        "h-full w-64 shrink-0 transition-all hover:-translate-y-0.5 hover:shadow-md sm:w-auto sm:shrink",
        className,
      )}
    >
      <CardContent className="flex h-full flex-col gap-3">
        <span className="bg-primary/10 text-primary flex size-11 items-center justify-center rounded-lg">
          <Icon className="size-5" aria-hidden="true" />
        </span>

        <div className="flex flex-1 flex-col gap-1">
          <h3 className="font-heading text-foreground text-base font-semibold">{service.name}</h3>
          <p className="text-muted-foreground text-sm">{service.shortDescription}</p>
        </div>

        <div className="text-muted-foreground flex items-center justify-between text-xs">
          <span className="flex items-center gap-1">
            <Clock className="size-3.5" aria-hidden="true" />
            {service.durationMinutes.min}–{service.durationMinutes.max} min
          </span>
          <span className="text-foreground font-semibold">
            Starting {formatINR(service.startingPrice)}
          </span>
        </div>

        <Button
          size="sm"
          variant={service.cta === "book" ? "default" : "outline"}
          className="w-full"
          nativeButton={false}
          render={<Link href={`/services/${service.slug}`} />}
        >
          {service.cta === "book" ? "Book Now" : "Learn More"}
        </Button>
      </CardContent>
    </Card>
  );
}
