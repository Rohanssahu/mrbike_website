"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { SERVICE_IMAGES } from "@/components/home/PopularServices/serviceImages";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { getAllServices } from "@/lib/content";
import { cn } from "@/lib/utils";

const HEADING_ID = "services-banner-heading";
const AUTO_ADVANCE_MS = 4000;
const TRANSITION_SECONDS = 0.45;

const slideVariants = {
  enter: (direction: 1 | -1) => ({ x: direction > 0 ? "100%" : "-100%", opacity: 1 }),
  center: { x: "0%", opacity: 1 },
  exit: (direction: 1 | -1) => ({ x: direction > 0 ? "-100%" : "100%", opacity: 1 }),
};

/**
 * Auto-advancing photo + text banner cycling through every core service —
 * a carousel-style companion to the {@link PopularServices} grid. Slides
 * every {@link AUTO_ADVANCE_MS}, pauses on hover/touch/focus, and each
 * service links to its own `/services/[service]` detail page.
 */
export function ServicesBanner() {
  const services = getAllServices();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => {
      setDirection(1);
      setActiveIndex((i) => (i + 1) % services.length);
    }, AUTO_ADVANCE_MS);
    return () => clearTimeout(id);
  }, [activeIndex, paused, services.length]);

  const goTo = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const service = services[activeIndex];
  const Icon = service.icon;
  const image = SERVICE_IMAGES[service.slug];

  return (
    <Section aria-labelledby={HEADING_ID} className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="from-primary-light/25 absolute inset-0 bg-gradient-to-b to-transparent" />
        <div className="bg-primary/10 absolute bottom-0 left-0 size-72 -translate-x-1/3 translate-y-1/3 rounded-full blur-3xl" />
      </div>

      <SectionHeading
        id={HEADING_ID}
        eyebrow="Our Services"
        title="A closer look at what we do"
        description="Every doorstep service MR Bike Doctor offers, one at a time — booked through the app."
      />

      <div
        className="border-border bg-card relative mt-10 overflow-hidden rounded-2xl border md:min-h-[26rem]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={service.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: TRANSITION_SECONDS, ease: "easeInOut" }}
            className="grid grid-cols-1 items-center gap-6 p-6 sm:gap-8 sm:p-10 md:absolute md:inset-0 md:grid-cols-2 md:gap-12"
          >
            <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-primary/15 to-transparent sm:aspect-[16/9] md:aspect-auto md:h-full">
              {image ? (
                <Image
                  src={image}
                  alt={service.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              ) : (
                <>
                  <div aria-hidden="true" className="bg-primary/25 absolute -inset-6 -z-10 rounded-full blur-3xl" />
                  <span className="bg-primary/10 text-primary flex size-24 items-center justify-center rounded-2xl sm:size-28">
                    <Icon className="size-12 sm:size-14" aria-hidden="true" />
                  </span>
                </>
              )}
            </div>

            <div className="flex flex-col items-start gap-4">
              <Badge variant="outline">Popular Service</Badge>
              <h3 className="font-heading text-foreground text-2xl font-bold sm:text-3xl">{service.name}</h3>
              <p className="text-muted-foreground text-lg">{service.shortDescription}</p>

              <ul className="flex flex-col gap-2">
                {service.whatsIncluded.slice(0, 3).map((item) => (
                  <li key={item} className="text-foreground flex items-start gap-2 text-sm">
                    <Check className="text-primary mt-0.5 size-4 shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <span className="text-muted-foreground flex items-center gap-1.5 text-sm">
                <Clock className="size-4" aria-hidden="true" />
                {service.durationMinutes.min}–{service.durationMinutes.max} min
              </span>

              <Button
                nativeButton={false}
                render={<Link href={`/services/${service.slug}`} />}
                className="mt-2"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-1.5" role="tablist" aria-label="Services">
        {services.map((s, i) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={i === activeIndex}
            aria-label={`Service ${i + 1}: ${s.name}`}
            onClick={() => goTo(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === activeIndex ? "bg-primary w-7" : "w-3 bg-white/20 hover:bg-white/35",
            )}
          />
        ))}
      </div>
    </Section>
  );
}
