import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ModelDetail } from "@/components/brands";
import { JsonLd } from "@/components/seo/json-ld";
import { DownloadAppCta } from "@/components/shared";
import { getAllModels, getBrandBySlug, getModelBySlug, getModelFaqs } from "@/lib/content";
import { articleSchema, breadcrumbSchema, faqPageSchema, organizationSchema } from "@/seo/json-ld";
import { buildMetadata } from "@/seo/metadata";

interface ModelPageProps {
  params: Promise<{ brand: string; model: string }>;
}

export function generateStaticParams() {
  return getAllModels().map((model) => ({ brand: model.brandSlug, model: model.slug }));
}

export async function generateMetadata({ params }: ModelPageProps): Promise<Metadata> {
  const { brand: brandSlug, model: modelSlug } = await params;
  const brand = getBrandBySlug(brandSlug);
  const model = getModelBySlug(brandSlug, modelSlug);
  if (!brand || !model) return {};

  return buildMetadata({
    title: `${brand.name} ${model.name} Service`,
    description: `Doorstep servicing and repairs for the ${brand.name} ${model.name}, booked through the MR Bike Doctor app.`,
    path: `/brands/${brand.slug}/${model.slug}`,
  });
}

/** /brands/[brand]/[model] — informational model detail page (Phase 4 §13 item 3). */
export default async function ModelPage({ params }: ModelPageProps) {
  const { brand: brandSlug, model: modelSlug } = await params;
  const brand = getBrandBySlug(brandSlug);
  const model = getModelBySlug(brandSlug, modelSlug);
  if (!brand || !model) notFound();

  const faqs = getModelFaqs(brand, model);

  return (
    <>
      <JsonLd
        schema={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Brands", path: "/brands" },
            { name: brand.name, path: `/brands/${brand.slug}` },
            { name: model.name, path: `/brands/${brand.slug}/${model.slug}` },
          ]),
          articleSchema({
            headline: `${brand.name} ${model.name} Service & Maintenance Guide`,
            description: `Doorstep servicing and repairs for the ${brand.name} ${model.name}.`,
            path: `/brands/${brand.slug}/${model.slug}`,
          }),
          ...(faqs.length > 0 ? [faqPageSchema(faqs)] : []),
        ]}
      />

      <ModelDetail brand={brand} model={model} />
      <DownloadAppCta />
    </>
  );
}
