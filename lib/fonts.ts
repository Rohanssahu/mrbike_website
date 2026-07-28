import { Geist, Geist_Mono } from "next/font/google";

/**
 * Variable names must match the `--font-sans` / `--font-mono` tokens
 * referenced by the Tailwind theme in styles/globals.css.
 */
export const fontSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const fontMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});
