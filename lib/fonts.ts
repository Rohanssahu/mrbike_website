import { Geist } from "next/font/google";

/**
 * Variable names must match the `--font-sans` / `--font-mono` tokens
 * referenced by the Tailwind theme in styles/globals.css.
 */
export const fontSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  // Avoid a late hero-text repaint on constrained connections; the metric-
  // compatible fallback remains in place when the font misses its short load window.
  display: "optional",
});
