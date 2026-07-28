import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ModelDetail } from "@/components/brands";
import { BIKE_MODELS } from "@/components/brands/mock-data";
import { BRANDS } from "@/components/home/BrandsWeService/mock-data";
import { JsonLd } from "@/components/seo/json-ld";
import { DownloadAppCta } from "@/components/shared";
import { breadcrumbSchema, organizationSchema } from "@/seo/json-ld";
import { buildMetadata } from "@/seo/metadata";

interface ModelPageProps {
  params: Promise<{ brand: string; model: string }>;
}

export function generateStaticParams() {
  return BIKE_MODELS.map((model) => ({ brand: model.brandSlug, model: model.slug }));
}

export async function generateMetadata({ params }: ModelPageProps): Promise<Metadata> {
  const { brand: brandSlug, model: modelSlug } = await params;
  const brand = BRANDS.find((b) => b.slug === brandSlug);
  const model = BIKE_MODELS.find((m) => m.slug === modelSlug && m.brandSlug === brandSlug);
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
  const brand = BRANDS.find((b) => b.slug === brandSlug);
  const model = BIKE_MODELS.find((m) => m.slug === modelSlug && m.brandSlug === brandSlug);
  if (!brand || !model) notFound();

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
        ]}
      />

      <ModelDetail brand={brand} model={model} />
      <DownloadAppCta />
    </>
  );
}
