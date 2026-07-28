import {
  AppFeatures,
  AppShowcase,
  BrandsWeService,
  CitiesWeServe,
  CustomerReviews,
  Hero,
  HowItWorks,
  PopularServices,
  TrustBand,
  WhyChooseUs,
} from "@/components/home";
import { DownloadAppCta } from "@/components/shared/DownloadAppCta";

/**
 * Homepage — re-sequenced per the approved direction change
 * (docs/phase-4-direction-change.md §4). The Serviceability widget and
 * Featured Garages are removed entirely (§2/§12): the site never checks
 * location-gated availability or surfaces individual garage listings, since
 * booking only happens in the app. AppShowcase and AppFeatures showcase the
 * real, shipped app (real screenshots, real icons — no mockups) right after
 * the Hero, since the app itself is the product being sold here. Remaining
 * sections (Blog, FAQs, final CTA) land in Phase 5D/5E.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <AppShowcase />
      <PopularServices />
      <AppFeatures />
      <HowItWorks />
      <WhyChooseUs />
      <TrustBand />
      <BrandsWeService />
      <CitiesWeServe />
      <CustomerReviews />
      <DownloadAppCta />
    </>
  );
}
