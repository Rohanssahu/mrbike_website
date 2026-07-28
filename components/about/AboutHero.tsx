import Image from "next/image";

import companyIllustration from "@/assets/illustrations/about/company-illustration.svg";
import { Section } from "@/components/shared/Section";

const HEADING_ID = "about-hero-heading";

/** /about page hero — describes only what's already established about the product; no history or claims. */
export function AboutHero() {
  return (
    <Section className="pb-0 md:pb-0" aria-labelledby={HEADING_ID}>
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[3fr_2fr]">
        <div className="max-w-3xl">
          <p className="text-primary text-sm font-semibold">About Us</p>
          <h1
            id={HEADING_ID}
            className="font-heading text-foreground mt-2 text-4xl font-bold sm:text-5xl"
          >
            About MR Bike Doctor
          </h1>
          <p className="text-muted-foreground mt-4 text-lg">
            A technology-driven platform bringing verified bike mechanics to your doorstep,
            through the MR Bike Doctor app.
          </p>
        </div>

        <Image
          src={companyIllustration}
          alt=""
          aria-hidden="true"
          className="mx-auto w-full max-w-sm lg:max-w-none"
          priority
        />
      </div>
    </Section>
  );
}
