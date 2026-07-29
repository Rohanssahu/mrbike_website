import type { StaticImageData } from "next/image";

import login from "@/assets/delerappscreenshot/login.png";
import loginOtp from "@/assets/delerappscreenshot/login_otp.png";
import homeScreen from "@/assets/delerappscreenshot/Home_screen.png";
import newBooking from "@/assets/delerappscreenshot/New_bookign_come.png";
import bookingDetails from "@/assets/delerappscreenshot/Booking_details.png";
import collectPayment from "@/assets/delerappscreenshot/Bookign_payment_completetime.png";
import wallet from "@/assets/delerappscreenshot/wallet_screen.png";
import profile from "@/assets/delerappscreenshot/profiles_screen.png";

export interface PartnerAppStep {
  id: string;
  image: StaticImageData;
  alt: string;
  title: string;
  description: string;
}

/**
 * Guided-tour steps for the MR Bike Doctor Partner (garage/mechanic) app
 * preview — real screenshots from the internal-testing build.
 */
export const PARTNER_APP_STEPS: PartnerAppStep[] = [
  {
    id: "login",
    image: login,
    alt: "MR Bike Doctor Partner app sign-in screen with mobile number entry",
    title: "Sign in as a partner",
    description: "Your garage logs in with just a mobile number — no paperwork to start.",
  },
  {
    id: "otp",
    image: loginOtp,
    alt: "MR Bike Doctor Partner app OTP verification screen",
    title: "Quick OTP verification",
    description: "A one-time code keeps every partner account secure.",
  },
  {
    id: "dashboard",
    image: homeScreen,
    alt: "MR Bike Doctor Partner app dashboard with today's earnings and booking counts",
    title: "Your garage, at a glance",
    description: "Today's earnings, wallet balance, and booking status in one dashboard.",
  },
  {
    id: "new-booking",
    image: newBooking,
    alt: "MR Bike Doctor Partner app new booking request screen with accept and reject options",
    title: "Get instant booking alerts",
    description: "New requests land in real time — accept or reject in a tap.",
  },
  {
    id: "booking-details",
    image: bookingDetails,
    alt: "MR Bike Doctor Partner app booking details screen with service progress tracker",
    title: "Track every job",
    description: "Service progress, bike details, and customer contact — all in one screen.",
  },
  {
    id: "collect-payment",
    image: collectPayment,
    alt: "MR Bike Doctor Partner app collect payment screen with cash and UPI options",
    title: "Collect payment your way",
    description: "Close out a job with cash or UPI, tracked automatically.",
  },
  {
    id: "wallet",
    image: wallet,
    alt: "MR Bike Doctor Partner app wallet screen with balance and transaction history",
    title: "Manage your earnings",
    description: "See balance, dues, and every transaction without leaving the app.",
  },
  {
    id: "profile",
    image: profile,
    alt: "MR Bike Doctor Partner app profile screen with shop details and support options",
    title: "Run your business your way",
    description: "Shop details, invoices, and support — organized in one profile.",
  },
];
