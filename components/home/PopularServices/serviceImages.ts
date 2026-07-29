import type { StaticImageData } from "next/image";

import batteryReplacement from "@/assets/servicesimages/Battery_Replacement.jpeg";
import bikePickupDrop from "@/assets/servicesimages/Bike_Pickup&Drop.png";
import bikeRepair from "@/assets/servicesimages/Bike_Repair.jpg";
import bikeService from "@/assets/servicesimages/bike_services.jpg";
import bikeWash from "@/assets/servicesimages/Bike_Wash.jpeg";
import brakeRepair from "@/assets/servicesimages/Brake_Repair.jpeg";
import chainCleaning from "@/assets/servicesimages/Chain_Cleaning.jpeg";
import doorstepBikeService from "@/assets/servicesimages/Doorstep_Bike_Service.jpeg";
import emergencyBikeService from "@/assets/servicesimages/Emergency_Bike_Service.svg";
import engineOilChange from "@/assets/servicesimages/Engine_Oil_Change.jpeg";
import premiumService from "@/assets/servicesimages/Premium_Service.jpeg";
import punctureRepair from "@/assets/servicesimages/Puncture_Repair.jpg";
import tyreReplacement from "@/assets/servicesimages/Tyre_Replacement.jpeg";
import wheelAlignment from "@/assets/servicesimages/Wheel_Alignment.jpeg";

/** Real service photos (`assets/servicesimages`), keyed by the `ServiceRecord.slug` they belong to. Covers every service in `mock-data.ts`. */
export const SERVICE_IMAGES: Record<string, StaticImageData> = {
  "bike-service": bikeService,
  "doorstep-bike-service": doorstepBikeService,
  "emergency-bike-service": emergencyBikeService,
  "bike-pickup-drop": bikePickupDrop,
  "bike-repair": bikeRepair,
  "premium-service": premiumService,
  "engine-oil-change": engineOilChange,
  "battery-replacement": batteryReplacement,
  "brake-repair": brakeRepair,
  "chain-cleaning": chainCleaning,
  "wheel-alignment": wheelAlignment,
  "bike-wash": bikeWash,
  "tyre-replacement": tyreReplacement,
  "puncture-repair": punctureRepair,
};
