import type { StaticImageData } from "next/image";

import login from "@/assets/app-screenshots/login.png";
import otp from "@/assets/app-screenshots/otp.png";
import searchLocation from "@/assets/app-screenshots/search-location.png";
import home from "@/assets/app-screenshots/home.png";
import bookingList from "@/assets/app-screenshots/booking-list.png";
import bookingDetails from "@/assets/app-screenshots/booking-details.png";
import helpSupport from "@/assets/app-screenshots/help-support.png";
import profile from "@/assets/app-screenshots/profile.png";

export interface AppStep {
  id: string;
  image: StaticImageData;
  alt: string;
  title: string;
  description: string;
}

/**
 * Guided-tour steps for the animated app preview. Real MR Bike Doctor app
 * screenshots — personal details visible in the original captures (name,
 * phone number, saved address, vehicle plate) are redacted with solid
 * placeholder bars before being cropped in here (Phase 5F zero-fabrication /
 * no-customer-data rule).
 */
export const APP_STEPS: AppStep[] = [
  {
    id: "login",
    image: login,
    alt: "MR Bike Doctor app sign-in screen with phone number entry",
    title: "Secure sign-in",
    description: "Log in with just your phone number — no passwords to remember.",
  },
  {
    id: "otp",
    image: otp,
    alt: "MR Bike Doctor app OTP verification screen",
    title: "Confirm it's you",
    description: "We text you a quick code to keep your account safe.",
  },
  {
    id: "search-location",
    image: searchLocation,
    alt: "MR Bike Doctor app location picker screen",
    title: "Set your location",
    description: "Tell us where you are — home, office, or roadside.",
  },
  {
    id: "browse-services",
    image: home,
    alt: "MR Bike Doctor app home screen with services and vehicle",
    title: "Browse services",
    description: "Oil change, wash, or full service — pick one in a tap.",
  },
  {
    id: "track-booking",
    image: bookingList,
    alt: "MR Bike Doctor app booking list screen",
    title: "Track your booking",
    description: "See exactly what's happening with your service, live.",
  },
  {
    id: "booking-details",
    image: bookingDetails,
    alt: "MR Bike Doctor app booking details screen with pickup map",
    title: "Follow your mechanic",
    description: "See where your bike is and when it'll be back home.",
  },
  {
    id: "help-support",
    image: helpSupport,
    alt: "MR Bike Doctor app help and support screen",
    title: "Get help anytime",
    description: "One tap for roadside help or a quick chat with support.",
  },
  {
    id: "profile",
    image: profile,
    alt: "MR Bike Doctor app profile screen",
    title: "Your bikes, your history",
    description: "Manage every vehicle and booking in one simple place.",
  },
];
