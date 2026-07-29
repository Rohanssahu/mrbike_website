import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import type { ServiceRecord } from "./mock-data";
import { SERVICE_IMAGES } from "./serviceImages";

interface ServiceCardProps {
  service: ServiceRecord;
  className?: string;
}

/** A single scannable service tile: photo, name, description, duration, CTA. */
export function ServiceCard({ service, className }: ServiceCardProps) {
  const Icon = service.icon;
  const image = SERVICE_IMAGES[service.slug];

  return (
    <Card
      className={cn(
        "h-full w-64 shrink-0 overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-md sm:w-auto sm:shrink",
        className,
      )}
    >
      <CardContent className="flex h-full flex-col gap-3 p-0">
        <div className="bg-muted relative aspect-[16/10] w-full shrink-0">
          {image ? (
            <Image
              src={image}
              alt={service.name}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 16rem"
            />
          ) : (
            <span className="bg-primary/10 text-primary flex size-full items-center justify-center">
              <Icon className="size-8" aria-hidden="true" />
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-3 p-4 pt-1">
          <div className="flex flex-1 flex-col gap-1">
            <h3 className="font-heading text-foreground text-base font-semibold">{service.name}</h3>
            <p className="text-muted-foreground text-sm">{service.shortDescription}</p>
          </div>

          <div className="text-muted-foreground flex items-center text-xs">
            <span className="flex items-center gap-1">
              <Clock className="size-3.5" aria-hidden="true" />
              {service.durationMinutes.min}–{service.durationMinutes.max} min
            </span>
          </div>

          <Button
            size="sm"
            variant="outline"
            className="w-full"
            nativeButton={false}
            render={<Link href={`/services/${service.slug}`} />}
          >
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
