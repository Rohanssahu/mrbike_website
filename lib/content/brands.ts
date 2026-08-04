import { BIKE_MODELS, type BikeModelRecord } from "@/components/brands/mock-data";
import { BRANDS, type BrandRecord } from "@/components/home/BrandsWeService/mock-data";
import type { FaqRecord } from "./faqs";

const MODEL_MAINTENANCE_FOCUS: Record<string, string> = {
  "royal-enfield/classic-350":
    "Prioritize routine oil-level, chain, brake, tyre, and fastener checks for regular city use.",
  "royal-enfield/hunter-350":
    "Build the maintenance routine around frequent urban starts, stops, chain care, and tyre-pressure checks.",
  "royal-enfield/himalayan":
    "Inspect the chain, tyres, brakes, and exposed components after rough-road, wet, or dusty rides.",
  "honda/shine":
    "Focus on dependable commuter upkeep: engine oil, chain condition, brakes, tyres, and air-filter inspection.",
  "honda/activa":
    "Give regular attention to tyres, brakes, engine oil, air filtration, and transmission inspection at scheduled services.",
  "honda/unicorn":
    "Track engine oil, chain adjustment, braking feel, tyre wear, and air-filter condition during routine use.",
  "tvs/apache-rtr":
    "Check chain condition, braking performance, tyres, fluids, and controls more often after demanding riding.",
  "tvs/jupiter":
    "Keep everyday scooter maintenance centered on tyres, brakes, engine oil, air filtration, and scheduled transmission checks.",
  "tvs/ntorq":
    "Monitor tyres, brakes, oil, air filtration, and transmission response, especially with frequent stop-start riding.",
  "yamaha/fz-s":
    "Prioritize chain care, engine oil, tyres, brakes, and air-filter checks for consistent city performance.",
  "yamaha/r15":
    "Inspect fluids, chain, tyres, brakes, and cooling-system condition after sustained high-speed or high-RPM use.",
  "yamaha/mt-15":
    "Balance urban maintenance with regular chain, brake, tyre, fluid, and cooling-system inspections.",
  "bajaj/pulsar":
    "Use a consistent routine for engine oil, chain and sprockets, brakes, tyres, and air filtration.",
  "bajaj/platina":
    "Prioritize high-mileage commuter checks: oil, chain tension, tyre pressure, brakes, and air filter.",
  "bajaj/dominar":
    "Check chain and sprockets, tyres, brakes, fluids, and controls before and after longer rides.",
  "hero/splendor":
    "Track mileage closely and keep engine oil, chain, tyres, brakes, and air filtration on schedule.",
  "hero/xtreme":
    "Inspect chain condition, braking feel, tyres, oil, and controls more frequently after demanding rides.",
  "hero/glamour":
    "Keep commuter reliability centered on oil changes, chain adjustment, brakes, tyres, and air-filter care.",
  "suzuki/access-125":
    "Focus routine scooter care on oil, tyres, brakes, air filtration, and scheduled transmission inspection.",
  "suzuki/gixxer":
    "Keep chain, tyres, brakes, engine oil, and cooling surfaces clean and regularly inspected.",
  "suzuki/burgman-street":
    "Prioritize tyres, brakes, oil, air filtration, and smooth transmission response during scheduled checks.",
  "ktm/duke-200":
    "Monitor fluids, chain and sprockets, brakes, tyres, and cooling performance after spirited or congested riding.",
  "ktm/duke-390":
    "Use shorter inspection cycles after hard riding for fluids, chain, tyres, brakes, and cooling-system condition.",
  "ktm/rc-200":
    "Check chain tension, tyres, brakes, fluids, and cooling airflow after sustained high-RPM riding.",
  "jawa/42":
    "Prioritize oil level, chain lubrication, brakes, tyres, and fastener checks during regular city use.",
  "jawa/perak":
    "Keep the routine centered on engine oil, chain and sprockets, tyres, braking feel, and visible fasteners.",
  "jawa/350":
    "Monitor oil, chain adjustment, tyres, brakes, and fasteners, particularly after congested or rough-road riding.",
  "yezdi/roadster":
    "Check oil, chain and sprockets, tyres, brakes, and fasteners as part of a consistent road-use routine.",
  "yezdi/scrambler":
    "Inspect chain, tyres, brakes, filters, and exposed components after dusty or uneven-road use.",
  "yezdi/adventure":
    "Add post-ride chain, tyre, brake, filter, and suspension-area inspections after touring or rough roads.",
  "bmw/g-310-r":
    "Keep fluids, chain, brakes, tyres, and controls checked on schedule for mixed city and highway riding.",
  "bmw/g-310-gs":
    "Inspect tyres, chain, brakes, fluids, and exposed components after touring, rain, or unpaved roads.",
  "bmw/r-1250-gs":
    "Follow the model-year schedule closely and inspect tyres, brakes, fluids, and drivetrain condition around long trips.",
  "triumph/speed-400":
    "Monitor chain, tyres, brakes, fluids, and cooling-system condition through mixed city and highway use.",
  "triumph/scrambler-400x":
    "Add checks for tyres, chain, brakes, filters, and exposed components after poor-road or dusty rides.",
  "triumph/trident-660":
    "Keep fluids, chain, tyres, brakes, and scheduled engine inspections aligned with mileage and riding intensity.",
  "harley-davidson/x440":
    "Prioritize oil, chain condition, tyres, brakes, and heat-related checks during frequent city riding.",
  "harley-davidson/iron-883":
    "Follow the model-year schedule for fluids and drivetrain checks, with extra attention after hot, slow traffic.",
  "harley-davidson/street-750":
    "Monitor fluids, tyres, brakes, drivetrain condition, and cooling performance during routine servicing.",
};

/**
 * Content access layer for the Brand and Bike Model entities (Phase 4 §21).
 * Routes and templates read through these functions rather than importing
 * `BRANDS`/`BIKE_MODELS` directly, so the data source can move to a CMS or
 * the mobile backend's API without touching any page or component.
 */
export function getAllBrands(): BrandRecord[] {
  return BRANDS;
}

export function getBrandBySlug(slug: string): BrandRecord | undefined {
  return BRANDS.find((brand) => brand.slug === slug);
}

export function getModelsByBrand(brandSlug: string): BikeModelRecord[] {
  return BIKE_MODELS.filter((model) => model.brandSlug === brandSlug);
}

export function getModelBySlug(brandSlug: string, modelSlug: string): BikeModelRecord | undefined {
  return BIKE_MODELS.find((model) => model.brandSlug === brandSlug && model.slug === modelSlug);
}

export function getAllModels(): BikeModelRecord[] {
  return BIKE_MODELS;
}

export function getModelMaintenanceContent(brand: BrandRecord, model: BikeModelRecord) {
  const key = `${brand.slug}/${model.slug}`;
  const modelIndex = getModelsByBrand(brand.slug).findIndex((item) => item.slug === model.slug);
  const commonProblems = brand.commonProblems.map(
    (_, index, problems) => problems[(index + Math.max(modelIndex, 0)) % problems.length],
  );

  return {
    focus:
      MODEL_MAINTENANCE_FOCUS[key] ??
      `Follow the ${model.name} owner's manual and inspect oil, tyres, brakes, filters, and drivetrain condition regularly.`,
    commonProblems,
    intervalNote: `Use the service schedule in the owner's manual for the exact ${model.name} model year and variant. As a general planning range for ${brand.name} ownership, the current guide uses ${brand.serviceIntervalKm.min.toLocaleString("en-IN")}–${brand.serviceIntervalKm.max.toLocaleString("en-IN")} km, but that is not a factory specification for every ${model.name}.`,
  };
}

export function getBrandFaqs(brand: BrandRecord): FaqRecord[] {
  return [
    {
      id: `faq_${brand.slug}-interval`,
      categorySlug: "service",
      question: `How often should a ${brand.name} bike be serviced?`,
      answer: `The exact interval depends on the model year and variant. Use the owner's manual as the authority; ${brand.serviceIntervalKm.min.toLocaleString("en-IN")}–${brand.serviceIntervalKm.max.toLocaleString("en-IN")} km is only a general planning range used by this guide.`,
    },
    {
      id: `faq_${brand.slug}-problems`,
      categorySlug: "service",
      question: `What maintenance problems should ${brand.name} owners watch for?`,
      answer: `Changes in starting, noise, braking, handling, fluid level, warning lights, or fuel economy deserve inspection. The likely cause depends on the specific model and diagnosis, so these symptoms should not be treated as a known defect.`,
    },
    {
      id: `faq_${brand.slug}-booking`,
      categorySlug: "booking-the-app",
      question: `How do I book ${brand.name} service?`,
      answer: `Select your ${brand.name} model and required service in the MR Bike Doctor app, enter the service address, and review availability and pricing before confirming.`,
    },
  ];
}

export function getModelFaqs(brand: BrandRecord, model: BikeModelRecord): FaqRecord[] {
  return [
    {
      id: `faq_${brand.slug}-${model.slug}-interval`,
      categorySlug: "service",
      question: `What is the service interval for the ${brand.name} ${model.name}?`,
      answer: `Check the owner's manual for the exact model year and variant. The page's brand-level range is planning guidance, not a factory ${model.name} specification.`,
    },
    {
      id: `faq_${brand.slug}-${model.slug}-problems`,
      categorySlug: "service",
      question: `What common problems should I check on a ${model.name}?`,
      answer: `Watch for changes in starting, sound, braking, handling, fluid levels, warning lights, or fuel economy. These are inspection prompts rather than claims that every ${model.name} develops the same fault.`,
    },
    {
      id: `faq_${brand.slug}-${model.slug}-service`,
      categorySlug: "booking-the-app",
      question: `Can I book doorstep service for a ${brand.name} ${model.name}?`,
      answer: `Choose the ${brand.name} ${model.name}, service, and address in the app to see the currently available doorstep or pickup-and-drop options.`,
    },
  ];
}

export type { BrandRecord, BikeModelRecord };
