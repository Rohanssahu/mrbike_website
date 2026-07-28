import type { StaticImageData } from "next/image";

import login from "@/assets/app-screenshots/login.png";
import otp from "@/assets/app-screenshots/otp.png";
import searchLocation from "@/assets/app-screenshots/search-location.png";

export interface AppScreen {
  id: string;
  /** Omitted for steps awaiting a clean replacement screenshot — `ScreenCard` renders a "Coming Soon" placeholder tile instead. */
  image?: StaticImageData;
  alt: string;
  title: string;
  description: string;
}

/**
 * Real MR Bike Doctor app screenshots, plus explicit placeholder steps for
 * the rest of the journey. Three real screens (sign in, OTP, location) ship
 * today. The other five captured screenshots (home, profile, booking list,
 * booking details, help & support) visibly show a real name, phone number,
 * home address, and vehicle registration plate from what looks like a live
 * test account — removed entirely rather than published, per the site's
 * zero-fabrication / no-customer-data rule (Phase 5F production cleanup).
 * Rather than quietly shrinking the showcase to three screens, the missing
 * steps stay in the journey as marked placeholders until masked/blurred or
 * synthetic replacement screenshots exist.
 */
export const APP_SCREENS: AppScreen[] = [
  {
    id: "login",
    image: login,
    alt: "MR Bike Doctor app sign-in screen with phone number entry",
    title: "Secure Sign In",
    description: "Log in with your phone number in seconds — no passwords to remember.",
  },
  {
    id: "otp",
    image: otp,
    alt: "MR Bike Doctor app OTP verification screen",
    title: "Instant OTP Verification",
    description: "Quick, secure one-time-password verification gets you in safely.",
  },
  {
    id: "search-location",
    image: searchLocation,
    alt: "MR Bike Doctor app location picker screen",
    title: "Set Your Location",
    description: "Confirm exactly where you are — home, office, or roadside.",
  },
  {
    id: "browse-services",
    alt: "",
    title: "Browse Services",
    description: "Oil change, wash, general service, and more — right from the home screen.",
  },
  {
    id: "track-booking",
    alt: "",
    title: "Track Every Booking",
    description: "See the status of every service request in one place.",
  },
  {
    id: "help-support",
    alt: "",
    title: "Help, Whenever You Need It",
    description: "FAQs, support, and contact — all one tap away.",
  },
  {
    id: "profile",
    alt: "",
    title: "Your Bikes, Your History",
    description: "Manage vehicles and account settings in one place.",
  },
];
