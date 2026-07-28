"use client";

import { motion } from "framer-motion";
import { ImageOff } from "lucide-react";
import Image from "next/image";

import type { AppScreen } from "./mock-data";

interface ScreenCardProps {
  screen: AppScreen;
  index: number;
}

/** One app screenshot in the showcase carousel — or a "Coming Soon" placeholder for a step without a clean screenshot yet. */
export function ScreenCard({ screen, index }: ScreenCardProps) {
  return (
    <motion.li
      className="flex w-60 shrink-0 snap-start flex-col items-center gap-4 sm:w-64"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
    >
      {screen.image ? (
        <Image
          src={screen.image}
          alt={screen.alt}
          className="h-auto w-full rounded-[1.75rem] shadow-xl"
          sizes="(min-width: 640px) 256px, 240px"
          priority={index === 0}
        />
      ) : (
        <div
          className="border-muted-foreground/30 bg-muted/40 flex aspect-9/19 w-full flex-col items-center justify-center gap-2 rounded-[1.75rem] border border-dashed p-4 text-center"
          role="img"
          aria-label={`${screen.title} screenshot coming soon`}
        >
          <ImageOff className="text-muted-foreground size-6" aria-hidden="true" />
          <span className="text-muted-foreground text-xs font-medium">Screenshot Coming Soon</span>
        </div>
      )}
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="font-heading text-foreground text-sm font-semibold">{screen.title}</h3>
        <p className="text-muted-foreground text-xs">{screen.description}</p>
      </div>
    </motion.li>
  );
}
