"use client";

import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";

import type { AppStep } from "./mock-data";

interface StepPanelProps {
  steps: AppStep[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

/** Step tracker dots + the active step's title/description, animated in sync with the phone. */
export function StepPanel({ steps, activeIndex, onSelect }: StepPanelProps) {
  const step = steps[activeIndex];

  return (
    <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
      <div className="flex items-center gap-1.5" role="tablist" aria-label="App tour steps">
        {steps.map((s, i) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={i === activeIndex}
            aria-label={`Step ${i + 1}: ${s.title}`}
            onClick={() => onSelect(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === activeIndex ? "bg-primary w-7" : "w-3 bg-white/20 hover:bg-white/35",
            )}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="flex flex-col gap-2"
        >
          <span className="text-primary text-sm font-semibold">
            Step {activeIndex + 1} of {steps.length}
          </span>
          <h3 className="font-heading text-foreground text-2xl font-bold sm:text-3xl">{step.title}</h3>
          <p className="text-muted-foreground max-w-sm text-lg">{step.description}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
