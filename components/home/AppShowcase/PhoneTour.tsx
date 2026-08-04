"use client";

import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import type { AppStep } from "./mock-data";

const STEP_DURATION_MS = 2800;
const SWIPE_THRESHOLD = 60;

interface PhoneTourProps {
  steps: AppStep[];
  activeIndex: number;
  onIndexChange: (index: number, direction: 1 | -1) => void;
}

const slideVariants = {
  enter: (direction: 1 | -1) => ({ x: direction > 0 ? 32 : -32, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: 1 | -1) => ({ x: direction > 0 ? -32 : 32, opacity: 0 }),
};

/** Single animated phone mockup that autoplays through `steps`, pausable on hover/tap, with swipe + arrow navigation. */
export function PhoneTour({ steps, activeIndex, onIndexChange }: PhoneTourProps) {
  const [direction, setDirection] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => {
      setDirection(1);
      onIndexChange((activeIndex + 1) % steps.length, 1);
    }, STEP_DURATION_MS);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, paused, steps.length]);

  const goTo = (index: number, dir: 1 | -1) => {
    setDirection(dir);
    onIndexChange((index + steps.length) % steps.length, dir);
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD) goTo(activeIndex + 1, 1);
    else if (info.offset.x > SWIPE_THRESHOLD) goTo(activeIndex - 1, -1);
  };

  const step = steps[activeIndex];

  return (
    <div className="mx-auto flex w-full max-w-[280px] items-center gap-2 sm:max-w-[300px] sm:gap-4">
      <button
        type="button"
        onClick={() => goTo(activeIndex - 1, -1)}
        aria-label="Previous step"
        className="text-muted-foreground hover:bg-card hover:text-foreground hidden size-9 shrink-0 items-center justify-center rounded-full border border-white/10 transition-colors sm:flex"
      >
        <ChevronLeft className="size-4" aria-hidden="true" />
      </button>

      <div
        className="relative w-full shrink-0"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          aria-hidden="true"
          className="bg-primary/25 absolute -inset-6 -z-10 rounded-[3rem] blur-3xl"
        />

        <div
          role="button"
          tabIndex={0}
          aria-label={paused ? "Resume app tour" : "Pause app tour"}
          onClick={() => setPaused((p) => !p)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setPaused((p) => !p);
          }}
          className="relative aspect-[765/1518] w-full cursor-pointer touch-pan-y overflow-hidden"
        >
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={step.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: "easeInOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.35}
              onDragEnd={handleDragEnd}
              className="absolute inset-0"
            >
              <Image
                src={step.image}
                alt={step.alt}
                fill
                sizes="(min-width: 640px) 300px, 280px"
                className="object-contain"
              />
            </motion.div>
          </AnimatePresence>

          <div
            className={cn(
              "pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity",
              paused ? "opacity-100" : "opacity-0",
            )}
          >
            <span className="flex size-14 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm">
              {paused ? (
                <Play className="size-6 translate-x-0.5 text-white" aria-hidden="true" />
              ) : (
                <Pause className="size-6 text-white" aria-hidden="true" />
              )}
            </span>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => goTo(activeIndex + 1, 1)}
        aria-label="Next step"
        className="text-muted-foreground hover:bg-card hover:text-foreground hidden size-9 shrink-0 items-center justify-center rounded-full border border-white/10 transition-colors sm:flex"
      >
        <ChevronRight className="size-4" aria-hidden="true" />
      </button>
    </div>
  );
}
