import type { StaticImageData } from "next/image";

import bookingDetails from "@/assets/app-screenshots/booking-details.png";
import bookingList from "@/assets/app-screenshots/booking-list.png";
import helpSupport from "@/assets/app-screenshots/help-support.png";
import home from "@/assets/app-screenshots/home.png";
import login from "@/assets/app-screenshots/login.png";
import otp from "@/assets/app-screenshots/otp.png";
import profile from "@/assets/app-screenshots/profile.png";
import searchLocation from "@/assets/app-screenshots/search-location.png";

export interface AppScreen {
  id: string;
  image: StaticImageData;
  alt: string;
  title: string;
  description: string;
}

/**
 * Real MR Bike Doctor app screenshots, in the order a new user actually
 * moves through the app: sign in, set a location, browse services, track a
 * booking end to end, then get help and manage the account. Every image is
 * a genuine screenshot from the shipped app, not a mockup.
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
    id: "home",
    image: home,
    alt: "MR Bike Doctor app home screen with services and nearby garages",
    title: "Browse Services",
    description: "Oil change, wash, general service, and more — right from the home screen.",
  },
  {
    id: "booking-list",
    image: bookingList,
    alt: "MR Bike Doctor app booking list screen",
    title: "Track Every Booking",
    description: "See the status of every service request in one place.",
  },
  {
    id: "booking-details",
    image: bookingDetails,
    alt: "MR Bike Doctor app booking details screen with live map and bill summary",
    title: "Live Booking Details",
    description: "Real-time location, bike info, and a transparent bill summary.",
  },
  {
    id: "help-support",
    image: helpSupport,
    alt: "MR Bike Doctor app help and support screen",
    title: "Help, Whenever You Need It",
    description: "FAQs, support, and contact — all one tap away.",
  },
  {
    id: "profile",
    image: profile,
    alt: "MR Bike Doctor app profile screen with bikes, rewards, and account settings",
    title: "Your Bikes, Your History",
    description: "Manage vehicles, rewards, and account settings in one place.",
  },
];
