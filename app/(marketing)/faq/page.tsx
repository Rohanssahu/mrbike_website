import type { Metadata } from "next";
import Image from "next/image";

import helpCenterIllustration from "@/assets/illustrations/faq/help-center.svg";
import { JsonLd } from "@/components/seo/json-ld";
import { FaqCategorySection } from "@/components/faq";
import { DownloadAppCta } from "@/components/shared";
import { Section } from "@/components/shared/Section";
import { getAllFaqs, getFaqCategories } from "@/lib/content";
import { breadcrumbSchema, faqPageSchema, organizationSchema, SPEAKABLE_SELECTORS } from "@/seo/json-ld";
import { buildMetadata } from "@/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "FAQs",
  description:
    "Answers to common questions about booking, service, coverage, and your MR Bike Doctor account.",
  path: "/faq",
});

/** /faq — general site-wide FAQ hub (Phase 4 §13 item 5). */
export default function FaqPage() {
  const categories = getFaqCategories();
  const allFaqs = getAllFaqs();
  const schemaEligibleFaqs = allFaqs.filter((faq) => !faq.isPlaceholder);

  return (
    <>
      <JsonLd
        schema={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQs", path: "/faq" },
          ]),
          ...(schemaEligibleFaqs.length > 0
            ? [faqPageSchema(schemaEligibleFaqs, { speakable: [SPEAKABLE_SELECTORS.faqAnswer] })]
            : []),
        ]}
      />

      <Section className="pb-0 md:pb-0" aria-labelledby="faq-hero-heading">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[3fr_2fr]">
          <div className="max-w-3xl">
            <h1
              id="faq-hero-heading"
              className="font-heading text-foreground text-4xl font-bold sm:text-5xl"
            >
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground mt-4 text-lg">
              Answers to the questions we hear most about booking, service, coverage, and accounts.
            </p>
          </div>

          <Image
            src={helpCenterIllustration}
            alt=""
            aria-hidden="true"
            className="mx-auto w-full max-w-sm lg:max-w-none"
            priority
          />
        </div>
      </Section>

      {categories.map((category) => (
        <FaqCategorySection
          key={category.id}
          category={category}
          faqs={allFaqs.filter((faq) => faq.categorySlug === category.slug)}
        />
      ))}

      <DownloadAppCta />
    </>
  );
}
