"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";

import customerHome from "@/assets/app-screenshots/home.png";
import customerLogin from "@/assets/app-screenshots/login.png";
import partnerHome from "@/assets/delerappscreenshot/Home_screen.png";
import partnerLogin from "@/assets/delerappscreenshot/login.png";
import { siteConfig } from "@/config/site";

interface AppPair {
  id: string;
  label: string;
  login: StaticImageData;
  home: StaticImageData;
}

/**
 * The two visible phones always belong to the same app at once — login on
 * the left, home on the right — and the whole pair swaps to the other app
 * every 4 seconds, rather than each phone being permanently pinned to one
 * app.
 */
const APPS: AppPair[] = [
  { id: "partner", label: `${siteConfig.name} Partner`, login: partnerLogin, home: partnerHome },
  { id: "customer", label: siteConfig.name, login: customerLogin, home: customerHome },
];

/**
 * Hero phone preview — real app screenshots, no drawn phone frame (the
 * screenshots already have a bezel/notch baked in). Shows one app's login
 * screen (left, tilted back) and home screen (right, tilted forward) at a
 * time. `activeIndex` is controlled by Hero so the phones stay in sync with
 * the headline/description text (same index, one shared timer).
 */
export function PhonePreview({ activeIndex }: { activeIndex: number }) {
  const app = APPS[activeIndex % APPS.length];

  return (
    <div aria-hidden="true" className="relative mx-auto flex w-full max-w-sm flex-col items-center gap-4 py-6">
      <div className="bg-primary/25 absolute inset-x-6 top-1/2 -z-10 h-64 -translate-y-1/2 rounded-full blur-3xl" />

      <div className="relative flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${app.id}-login`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="-rotate-6 translate-y-6 sm:translate-y-8"
          >
            <Image src={app.login} alt="" className="h-auto w-32 drop-shadow-2xl sm:w-40 lg:w-48" />
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${app.id}-home`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="z-10 -ml-8 rotate-6 -translate-y-6 sm:-ml-10 sm:-translate-y-8 lg:-ml-12"
          >
            <Image src={app.home} alt="" className="h-auto w-32 drop-shadow-2xl sm:w-40 lg:w-48" />
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait">
        <motion.span
          key={app.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold whitespace-nowrap text-white ring-1 ring-white/10 backdrop-blur-sm"
        >
          {app.label}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
