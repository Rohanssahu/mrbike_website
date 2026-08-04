import { MapPin, MessageCircle, Phone, PhoneCall, ShieldCheck } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/shared/Container";
import { GooglePlayBadge } from "@/components/shared/StoreBadges";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

import { HeroIllustration } from "./HeroIllustration";
import { PhonePreview } from "./PhonePreview";

/** Customer-first homepage hero with direct service and assisted-booking paths. */
export function Hero() {
  const phoneHref = `tel:${siteConfig.contactPhone.replace(/[^+\d]/g, "")}`;
  const whatsappNumber = siteConfig.contactPhone.replace(/\D/g, "");
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi MR Bike Doctor, I need help booking a bike service.",
  )}`;
  const callbackHref = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
    "Bike service callback request",
  )}&body=${encodeURIComponent("Please call me back about booking a bike service.\n\nName:\nPhone:\nLocation:")}`;

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <HeroIllustration />

      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6">
          <Badge variant="outline" className="gap-1.5 py-1">
            <MapPin className="size-3.5" aria-hidden="true" />
            Doorstep bike service in Hyderabad
          </Badge>

          <h1 className="font-heading text-foreground text-4xl leading-tight font-semibold text-balance sm:text-5xl lg:text-6xl">
            Doorstep Bike Service and Repair in Hyderabad
          </h1>

          <p className="text-muted-foreground max-w-xl text-lg">
            Get a verified mechanic for bike servicing, repairs, oil changes, battery replacement,
            and roadside help at your home or office. Book through the {siteConfig.name} app or
            contact our team for assistance.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <GooglePlayBadge href={siteConfig.android.url} eyebrow="BOOK SERVICE ON" />
            <Button
              size="lg"
              variant="outline"
              className="h-11 px-5"
              nativeButton={false}
              render={<Link href="/services" data-analytics-cta="homepage_explore_services" />}
            >
              Explore Bike Services
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-2" aria-label="Contact MR Bike Doctor">
            <Button nativeButton={false} render={<a href={phoneHref} />}>
              <Phone aria-hidden="true" />
              Call Now
            </Button>
            <Button
              variant="secondary"
              nativeButton={false}
              render={<a href={whatsappHref} target="_blank" rel="noopener noreferrer" />}
            >
              <MessageCircle aria-hidden="true" />
              WhatsApp
            </Button>
            <Button
              variant="ghost"
              nativeButton={false}
              render={<a href={callbackHref} data-analytics-event="callback_request" />}
            >
              <PhoneCall aria-hidden="true" />
              Request Callback
            </Button>
          </div>

          <Badge variant="secondary" className="gap-1">
            <ShieldCheck className="size-3.5" aria-hidden="true" />
            Verified mechanics · Transparent pricing · Digital service history
          </Badge>
        </div>

        <PhonePreview />
      </Container>
    </section>
  );
}
