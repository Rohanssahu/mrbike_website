import {
  BrandsWeService,
  CitiesWeServe,
  CustomerReviews,
  Hero,
  HowItWorks,
  PopularServices,
  TrustBand,
  WhyChooseUs,
} from "@/components/home";

/**
 * Homepage — re-sequenced per the approved direction change
 * (docs/phase-4-direction-change.md §4). The Serviceability widget and
 * Featured Garages are removed entirely (§2/§12): the site never checks
 * location-gated availability or surfaces individual garage listings, since
 * booking only happens in the app. Remaining sections (Blog, FAQs, a
 * dedicated Download App section, final CTA) land in Phase 5D/5E.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <PopularServices />
      <HowItWorks />
      <WhyChooseUs />
      <TrustBand />
      <BrandsWeService />
      <CitiesWeServe />
      <CustomerReviews />
    </>
  );
}
