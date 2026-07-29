import type { Metadata } from "next";
import { Suspense } from "react";

import { BlogHero, BlogSearch, CategoryChips, FeaturedPost } from "@/components/blog";
import { JsonLd } from "@/components/seo/json-ld";
import { DownloadAppCta } from "@/components/shared";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { getAllPosts, getPublishedCategories } from "@/lib/content";
import { breadcrumbSchema, collectionPageSchema, organizationSchema } from "@/seo/json-ld";
import { buildMetadata } from "@/seo/metadata";

const BROWSE_HEADING_ID = "blog-browse-heading";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Bike maintenance guides, seasonal care tips, brand-specific advice, and more from MR Bike Doctor.",
  path: "/blog",
});

/** /blog hub — the site's primary SEO engine (Phase 4 §8/§13 item 4). */
export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getPublishedCategories();
  const featured = posts.find((post) => post.isFeatured) ?? posts[0];

  return (
    <>
      <JsonLd
        schema={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
          collectionPageSchema({
            name: "MR Bike Doctor Blog",
            description: "Bike maintenance guides, seasonal care tips, and brand-specific advice.",
            path: "/blog",
            items: categories.map((category) => ({ name: category.name, path: `/blog/${category.slug}` })),
          }),
        ]}
      />

      <BlogHero />

      {featured && (
        <Section aria-label="Featured article">
          <FeaturedPost post={featured} />
        </Section>
      )}

      <Section className="bg-muted/30" aria-labelledby={BROWSE_HEADING_ID}>
        <SectionHeading id={BROWSE_HEADING_ID} eyebrow="Browse" title="All Articles" />
        <CategoryChips className="mt-6" />
        <div className="mt-8">
          <Suspense>
            <BlogSearch posts={posts} />
          </Suspense>
        </div>
      </Section>

      <DownloadAppCta />
    </>
  );
}
