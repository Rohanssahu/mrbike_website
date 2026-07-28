import type { StaticImageData } from "next/image";

import doorstepService from "@/assets/icons/doorstep-service.png";
import easyScheduling from "@/assets/icons/easy-scheduling.png";
import emergencyAssistance from "@/assets/icons/emergency-assistance.png";
import liveBookingStatus from "@/assets/icons/live-booking-status.png";
import pickupDrop from "@/assets/icons/pickup-drop.png";
import realtimeNotifications from "@/assets/icons/realtime-notifications.png";
import securePayments from "@/assets/icons/secure-payments.png";
import serviceHistory from "@/assets/icons/service-history.png";
import verifiedMechanics from "@/assets/icons/verified-mechanics.png";

export interface AppFeature {
  id: string;
  icon: StaticImageData;
  title: string;
  description: string;
}

/** App capabilities grid, icons reused from the shipped app's own icon set. */
export const APP_FEATURES: AppFeature[] = [
  {
    id: "doorstep-service",
    icon: doorstepService,
    title: "Doorstep Bike Service",
    description: "Mechanics come to your home or office — no garage visit needed.",
  },
  {
    id: "pickup-drop",
    icon: pickupDrop,
    title: "Pickup & Drop",
    description: "Can't wait around? The app arranges pickup and drop for you.",
  },
  {
    id: "emergency-assistance",
    icon: emergencyAssistance,
    title: "Emergency Assistance",
    description: "Stranded on the road? Get urgent, on-the-spot help fast.",
  },
  {
    id: "live-booking-status",
    icon: liveBookingStatus,
    title: "Live Booking Status",
    description: "Track your mechanic's arrival in real time, right from the app.",
  },
  {
    id: "verified-mechanics",
    icon: verifiedMechanics,
    title: "Verified Mechanics",
    description: "Every mechanic is background-checked, trained, and rated.",
  },
  {
    id: "secure-payments",
    icon: securePayments,
    title: "Secure Payments",
    description: "Pay safely in the app once the job is done — no cash haggling.",
  },
  {
    id: "service-history",
    icon: serviceHistory,
    title: "Service History",
    description: "Every service logged to your bike's permanent digital record.",
  },
  {
    id: "easy-scheduling",
    icon: easyScheduling,
    title: "Easy Scheduling",
    description: "Pick a time that works for you — today, or days ahead.",
  },
  {
    id: "realtime-notifications",
    icon: realtimeNotifications,
    title: "Real-Time Notifications",
    description: "Stay updated at every step, from confirmation to completion.",
  },
];
