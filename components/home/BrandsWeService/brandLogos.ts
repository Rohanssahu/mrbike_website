import type { StaticImageData } from "next/image";

import aprilia from "@/assets/Bike_companys_logo/aprilia_logo_0f77311510.webp";
import bajaj from "@/assets/Bike_companys_logo/bajaj_logo.webp";
import benelli from "@/assets/Bike_companys_logo/benelli_logo_a8724ebb48.webp";
import bmw from "@/assets/Bike_companys_logo/bmw_logo_c1fdb44d9f.webp";
import cfmoto from "@/assets/Bike_companys_logo/cfmoto_logo_889daa4ae3.webp";
import ducati from "@/assets/Bike_companys_logo/ducati_logo_cac5b2f895.webp";
import harleyDavidson from "@/assets/Bike_companys_logo/harley_davidson_logo_9bf13bbe90.webp";
import hero from "@/assets/Bike_companys_logo/hero_logo.webp";
import honda from "@/assets/Bike_companys_logo/honda_logo.png";
import husqvarna from "@/assets/Bike_companys_logo/husqvarna_motocycles_logo_07ff72fb56.webp";
import indianMotorcycle from "@/assets/Bike_companys_logo/india_motorcycles_logo_00b60c00f2.webp";
import jawa from "@/assets/Bike_companys_logo/jawa_logo_1de4a10bb8.webp";
import kawasaki from "@/assets/Bike_companys_logo/kawasaki_logo_eb38460820.webp";
import keeway from "@/assets/Bike_companys_logo/keeway_logo_c2eb04d614.webp";
import ktm from "@/assets/Bike_companys_logo/ktm_logo_0e091d1a54.webp";
import motoGuzzi from "@/assets/Bike_companys_logo/moto_guzzi_logo_bf2c34e573.webp";
import motoMorini from "@/assets/Bike_companys_logo/motomorini_logo_e80c277077.webp";
import norton from "@/assets/Bike_companys_logo/norton_logo_2af5ef8eba.webp";
import royalEnfield from "@/assets/Bike_companys_logo/royal_enfield_logo.webp";
import suzuki from "@/assets/Bike_companys_logo/suzuki_logo_04f3a7e33c.webp";
import triumph from "@/assets/Bike_companys_logo/triumph_logo_229bfee9a7.webp";
import tvs from "@/assets/Bike_companys_logo/tvs_logo.png";
import yamaha from "@/assets/Bike_companys_logo/yamaha_logo.webp";
import yezdi from "@/assets/Bike_companys_logo/yezdi_logo_96d0ff6655.webp";

/** Real brand logos (`assets/Bike_companys_logo`), keyed by the `BrandRecord.slug` they belong to. Covers every brand in `mock-data.ts` plus a few extras not yet listed there. */
export const BRAND_LOGOS: Record<string, StaticImageData> = {
  "royal-enfield": royalEnfield,
  honda,
  tvs,
  yamaha,
  bajaj,
  hero,
  suzuki,
  ktm,
  jawa,
  yezdi,
  bmw,
  triumph,
  "harley-davidson": harleyDavidson,
  aprilia,
  benelli,
  cfmoto,
  ducati,
  husqvarna,
  "indian-motorcycle": indianMotorcycle,
  kawasaki,
  keeway,
  "moto-guzzi": motoGuzzi,
  "moto-morini": motoMorini,
  norton,
};
