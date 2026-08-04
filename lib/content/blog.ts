import {
  BLOG_CATEGORIES,
  BLOG_POSTS,
  type BlogPostRecord,
  type CategoryRecord,
} from "@/components/blog/mock-data";

type EntityTagField = "relatedServiceSlugs" | "relatedBrandSlugs" | "relatedCitySlugs";

/**
 * Content access layer for the Blog Post and Category entities (Phase 4
 * §21). Routes and templates read through these functions rather than
 * importing `BLOG_POSTS`/`BLOG_CATEGORIES` directly, so the flat-array
 * source can move to a CMS at the Phase 4 §20 migration trigger without
 * touching any page or component.
 */
export function getAllPosts(): BlogPostRecord[] {
  return BLOG_POSTS;
}

export function getAllCategories(): CategoryRecord[] {
  return BLOG_CATEGORIES;
}

export function getPublishedCategories(): CategoryRecord[] {
  return BLOG_CATEGORIES.filter((category) =>
    BLOG_POSTS.some((post) => post.categorySlug === category.slug),
  );
}

export function getCategoryBySlug(slug: string): CategoryRecord | undefined {
  return BLOG_CATEGORIES.find((category) => category.slug === slug);
}

export function getPostsByCategory(categorySlug: string): BlogPostRecord[] {
  return BLOG_POSTS.filter((post) => post.categorySlug === categorySlug);
}

export function getPostBySlug(categorySlug: string, slug: string): BlogPostRecord | undefined {
  return BLOG_POSTS.find((post) => post.categorySlug === categorySlug && post.slug === slug);
}

export function getFeaturedPost(): BlogPostRecord | undefined {
  return BLOG_POSTS.find((post) => post.isFeatured) ?? BLOG_POSTS[0];
}

/** Every article scoped to a Service/Brand/City via its `related*Slugs` tags — the blog side of the Knowledge Graph. */
export function getPostsByEntityTag(
  field: EntityTagField,
  slug: string,
  limit?: number,
): BlogPostRecord[] {
  const posts = BLOG_POSTS.filter((post) => post[field]?.includes(slug));
  return typeof limit === "number" ? posts.slice(0, limit) : posts;
}

export function getPillarForCluster(post: BlogPostRecord): BlogPostRecord | undefined {
  return post.hubId ? BLOG_POSTS.find((p) => p.hubId === post.hubId && p.isPillar) : undefined;
}

export function getClusterPostsForPillar(post: BlogPostRecord): BlogPostRecord[] {
  return post.clusterPostIds ? BLOG_POSTS.filter((p) => post.clusterPostIds?.includes(p.id)) : [];
}

export function getPostFaqs(post: BlogPostRecord) {
  if (post.faqs && post.faqs.length > 0) return post.faqs;

  const firstAnswer = post.sections.flatMap((section) => section.body)[0] ?? post.excerpt;
  return [
    {
      question: `What is the main takeaway from “${post.title}”?`,
      answer: firstAnswer,
    },
    {
      question: "Does this guide replace the bike owner's manual?",
      answer:
        "No. This article provides general educational guidance. Use the owner's manual for model-specific specifications, intervals, fluids, parts, and safety instructions.",
    },
  ];
}

export function getRelatedPosts(post: BlogPostRecord, limit = 3): BlogPostRecord[] {
  const postRelations = new Set([
    ...(post.relatedServiceSlugs ?? []).map((slug) => `service:${slug}`),
    ...(post.relatedBrandSlugs ?? []).map((slug) => `brand:${slug}`),
    ...(post.relatedCitySlugs ?? []).map((slug) => `city:${slug}`),
  ]);

  return BLOG_POSTS.filter((candidate) => candidate.id !== post.id)
    .map((candidate) => {
      const candidateRelations = [
        ...(candidate.relatedServiceSlugs ?? []).map((slug) => `service:${slug}`),
        ...(candidate.relatedBrandSlugs ?? []).map((slug) => `brand:${slug}`),
        ...(candidate.relatedCitySlugs ?? []).map((slug) => `city:${slug}`),
      ];
      const score =
        (candidate.hubId && candidate.hubId === post.hubId ? 6 : 0) +
        (candidate.categorySlug === post.categorySlug ? 3 : 0) +
        candidateRelations.filter((relation) => postRelations.has(relation)).length * 2 +
        candidate.tags.filter((tag) => post.tags.includes(tag)).length;
      return { candidate, score };
    })
    .sort(
      (a, b) => b.score - a.score || (a.candidate.publishedAt < b.candidate.publishedAt ? 1 : -1),
    )
    .slice(0, limit)
    .map(({ candidate }) => candidate);
}

export type { BlogPostRecord, CategoryRecord };
