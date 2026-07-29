"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { GooglePlayBadge } from "@/components/shared/StoreBadges";

import { HERO_VARIANTS } from "./hero-variants";
import { HeroIllustration } from "./HeroIllustration";
import { PhonePreview } from "./PhonePreview";

const VARIANT_DURATION_MS = 4000;

/**
 * Hero — badge/heading/description/CTA cross-fade between the Partner app
 * and the customer app every 4 seconds, in sync with PhonePreview's phone
 * screens (both driven by the same `index`, not two separate timers).
 */
export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_VARIANTS.length);
    }, VARIANT_DURATION_MS);
    return () => clearInterval(id);
  }, []);

  const variant = HERO_VARIANTS[index];

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <HeroIllustration />

      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={variant.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex flex-col items-start gap-6"
          >
            <Badge variant="outline" className="gap-1.5 py-1">
              <variant.badgeIcon className="size-3.5" aria-hidden="true" />
              {variant.badge}
            </Badge>

            <h1 className="font-heading text-foreground text-4xl leading-tight font-semibold text-balance sm:text-5xl lg:text-6xl">
              {variant.heading}
            </h1>

            <p className="text-muted-foreground max-w-xl text-lg">{variant.description}</p>

            <div className="flex flex-wrap items-center gap-3">
              <GooglePlayBadge href={variant.androidUrl} eyebrow={variant.androidEyebrow} />
              <Button
                size="lg"
                variant="outline"
                className="h-11 px-5"
                nativeButton={false}
                render={<Link href={variant.secondaryHref} />}
              >
                {variant.secondaryLabel}
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="gap-1">
                <variant.tagIcon className="size-3.5" aria-hidden="true" />
                {variant.tag}
              </Badge>
            </div>
          </motion.div>
        </AnimatePresence>

        <PhonePreview activeIndex={index} />
      </Container>
    </section>
  );
}
