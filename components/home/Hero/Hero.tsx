import { MapPin, ShieldCheck } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { GooglePlayBadge } from "@/components/shared/StoreBadges";

import { HeroIllustration } from "./HeroIllustration";
import { PhonePreview } from "./PhonePreview";

/**
 * No stats row here on purpose — "bikes serviced," "average rating," and
 * "response time" are unverified numbers no team has confirmed, so per the
 * site's zero-fabrication rule they're omitted entirely rather than shown
 * as placeholder text in the hero. Reinstate with real, sourced figures
 * once available (Phase 5F production cleanup).
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <HeroIllustration />

      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6">
          <Badge variant="outline" className="gap-1.5 py-1">
            <MapPin className="size-3.5" aria-hidden="true" />
            Now serving Hyderabad
          </Badge>

          <h1 className="font-heading text-foreground text-4xl leading-tight font-semibold text-balance sm:text-5xl lg:text-6xl">
            Doorstep Bike Service, On the MR Bike Doctor App
          </h1>

          <p className="text-muted-foreground max-w-xl text-lg">
            Verified mechanics come to your home or office in Hyderabad for an oil change,
            battery replacement, or full service — no garage visit required. Download the app
            to get started.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <GooglePlayBadge />
            <Button
              size="lg"
              variant="outline"
              className="h-11 px-5"
              nativeButton={false}
              render={<Link href="/services" />}
            >
              Explore Services
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary" className="gap-1">
              <ShieldCheck className="size-3.5" aria-hidden="true" />
              Verified mechanics
            </Badge>
          </div>
        </div>

        <PhonePreview />
      </Container>
    </section>
  );
}
