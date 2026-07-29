import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CategoryChips, PostCard } from "@/components/blog";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumbs, DownloadAppCta } from "@/components/shared";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { getCategoryBySlug, getPostsByCategory, getPublishedCategories } from "@/lib/content";
import { breadcrumbSchema, collectionPageSchema, organizationSchema } from "@/seo/json-ld";
import { buildMetadata } from "@/seo/metadata";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

/**
 * Only generates a category archive for categories with at least one post —
 * an empty archive would be a thin page (same guardrail as CategoryChips
 * and the City/Area doorway-page rule, Phase 4 §17).
 */
export function generateStaticParams() {
  return getPublishedCategories().map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  return buildMetadata({
    title: category.name,
    description: category.description,
    path: `/blog/${category.slug}`,
  });
}

/** /blog/[category] — category archive (Phase 4 §13 item 4). */
export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  const posts = getPostsByCategory(slug);
  if (!category || posts.length === 0) notFound();

  return (
    <>
      <JsonLd
        schema={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: category.name, path: `/blog/${category.slug}` },
          ]),
          collectionPageSchema({
            name: category.name,
            description: category.description,
            path: `/blog/${category.slug}`,
            items: posts.map((post) => ({
              name: post.title,
              path: `/blog/${post.categorySlug}/${post.slug}`,
            })),
          }),
        ]}
      />

      <Section className="pb-0 md:pb-0">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: category.name, path: `/blog/${category.slug}` },
          ]}
        />
      </Section>

      <Section aria-labelledby="category-heading">
        <SectionHeading id="category-heading" eyebrow="Category" title={category.name} description={category.description} />
        <CategoryChips activeCategorySlug={category.slug} className="mt-6" />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </Section>

      <DownloadAppCta />
    </>
  );
}
