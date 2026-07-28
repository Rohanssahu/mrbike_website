import doorstepService from "@/assets/icons/doorstep-service.png";
import easyScheduling from "@/assets/icons/easy-scheduling.png";
import emergencyAssistance from "@/assets/icons/emergency-assistance.png";
import liveBookingStatus from "@/assets/icons/live-booking-status.png";
import pickupDrop from "@/assets/icons/pickup-drop.png";
import realtimeNotifications from "@/assets/icons/realtime-notifications.png";
import securePayments from "@/assets/icons/secure-payments.png";
import serviceHistory from "@/assets/icons/service-history.png";
import verifiedMechanics from "@/assets/icons/verified-mechanics.png";
import type { StaticImageData } from "next/image";

export interface AppFeatureRecord {
  id: string;
  icon: StaticImageData;
  title: string;
  description: string;
}

/** What's in the app (Phase 4 §13 item 5) — generic, already-established claims, not new business facts. */
export const APP_FEATURES: AppFeatureRecord[] = [
  {
    id: "doorstep-service",
    icon: doorstepService,
    title: "Doorstep Service",
    description: "Get your bike serviced at home, work, or the roadside — no garage visit required.",
  },
  {
    id: "verified-mechanics",
    icon: verifiedMechanics,
    title: "Verified Mechanics",
    description: "Every mechanic is background-checked before joining the service network.",
  },
  {
    id: "easy-scheduling",
    icon: easyScheduling,
    title: "Easy Scheduling",
    description: "Pick a service and a time slot that works for you, right from the app.",
  },
  {
    id: "live-booking-status",
    icon: liveBookingStatus,
    title: "Live Booking Status",
    description: "Track your request from confirmation to mechanic arrival.",
  },
  {
    id: "pickup-drop",
    icon: pickupDrop,
    title: "Pickup & Drop",
    description: "For jobs that need a workshop, we collect and return your bike.",
  },
  {
    id: "emergency-assistance",
    icon: emergencyAssistance,
    title: "Emergency Assistance",
    description: "Stuck on the road? Request urgent, on-the-spot help.",
  },
  {
    id: "realtime-notifications",
    icon: realtimeNotifications,
    title: "Real-Time Notifications",
    description: "Stay updated at every step, from booking to invoice.",
  },
  {
    id: "secure-payments",
    icon: securePayments,
    title: "Secure Payments",
    description: "Pay for your service safely, right inside the app.",
  },
  {
    id: "service-history",
    icon: serviceHistory,
    title: "Service History",
    description: "Every service is logged to your bike's digital record.",
  },
];
