import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  ArticleBody,
  ArticleSummary,
  AuthorByline,
  EditorialNote,
  estimateReadingTime,
  HubNav,
  PostFaqs,
  PostPrevNext,
  PostTags,
  RelatedArticles,
  RelatedLinks,
  ShareButtons,
  TableOfContents,
} from "@/components/blog";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumbs, DownloadAppCta } from "@/components/shared";
import { Sources } from "@/components/shared/Sources";
import { Section } from "@/components/shared/Section";
import { siteConfig } from "@/config/site";
import {
  getAllPosts,
  getCategoryBySlug,
  getPostBySlug,
  getPostFaqs,
  getPostsByCategory,
  getRelatedPosts,
} from "@/lib/content";
import {
  blogPostingSchema,
  breadcrumbSchema,
  faqPageSchema,
  organizationSchema,
  SPEAKABLE_SELECTORS,
} from "@/seo/json-ld";
import { buildMetadata } from "@/seo/metadata";

interface PostPageProps {
  params: Promise<{ category: string; slug: string }>;
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ category: post.categorySlug, slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { category: categorySlug, slug } = await params;
  const post = getPostBySlug(categorySlug, slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.categorySlug}/${post.slug}`,
  });
}

/** /blog/[category]/[slug] — individual article (Phase 4 §8/§13 item 4). */
export default async function PostPage({ params }: PostPageProps) {
  const { category: categorySlug, slug } = await params;
  const post = getPostBySlug(categorySlug, slug);
  const category = getCategoryBySlug(categorySlug);
  if (!post || !category) notFound();

  const postPath = `/blog/${post.categorySlug}/${post.slug}`;
  const readingTimeMinutes = estimateReadingTime(post.sections);
  const faqs = getPostFaqs(post);

  const categoryPosts = getPostsByCategory(post.categorySlug);
  const indexInCategory = categoryPosts.findIndex((p) => p.id === post.id);
  const previous = indexInCategory > 0 ? categoryPosts[indexInCategory - 1] : null;
  const next =
    indexInCategory < categoryPosts.length - 1 ? categoryPosts[indexInCategory + 1] : null;

  const related = getRelatedPosts(post);

  return (
    <>
      <JsonLd
        schema={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: category.name, path: `/blog/${category.slug}` },
            { name: post.title, path: postPath },
          ]),
          blogPostingSchema({
            headline: post.title,
            description: post.excerpt,
            path: postPath,
            authorName: post.author.name,
            datePublished: post.publishedAt,
            articleSection: category.name,
            keywords: post.tags,
            citations: post.sources?.map((source) => source.url),
          }),
          faqPageSchema(faqs, { speakable: [SPEAKABLE_SELECTORS.faqAnswer] }),
        ]}
      />

      <Section className="pb-0 md:pb-0">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: category.name, path: `/blog/${category.slug}` },
            { name: post.title, path: postPath },
          ]}
        />

        <h1 className="font-heading text-foreground mt-4 text-3xl font-bold sm:text-4xl">
          {post.title}
        </h1>
        <div className="mt-4">
          <AuthorByline
            authorName={post.author.name}
            publishedAt={post.publishedAt}
            readingTimeMinutes={readingTimeMinutes}
          />
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="flex flex-col gap-8">
            <ArticleSummary post={post} />
            <ArticleBody sections={post.sections} />
            <EditorialNote />
            {post.sources && <Sources sources={post.sources} />}
            <PostTags tags={post.tags} />
            <ShareButtons title={post.title} url={new URL(postPath, siteConfig.url).toString()} />
            <PostFaqs faqs={faqs} />
            <PostPrevNext previous={previous} next={next} />
          </div>

          <aside className="flex flex-col gap-6 lg:sticky lg:top-20 lg:self-start">
            <HubNav post={post} />
            <TableOfContents sections={post.sections} />
            <RelatedLinks
              serviceSlugs={post.relatedServiceSlugs}
              brandSlugs={post.relatedBrandSlugs}
              citySlugs={post.relatedCitySlugs}
            />
          </aside>
        </div>
      </Section>

      <Section className="bg-muted/30">
        <RelatedArticles posts={related} />
      </Section>

      <DownloadAppCta />
    </>
  );
}
