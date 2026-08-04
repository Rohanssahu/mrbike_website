import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import {
  getAllAreas,
  getAllBrands,
  getAllCities,
  getAllModels,
  getAllPosts,
  getAllServices,
  getPublishedCategories,
} from "@/lib/content";

interface RouteEntry {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  lastModified: string;
}

// Last substantive update to the static and entity content sources.
const CONTENT_LAST_MODIFIED = "2026-07-29";

function latestDate(dates: string[]): string {
  return dates.sort().at(-1) ?? CONTENT_LAST_MODIFIED;
}

/**
 * Static routes, plus every entity-driven route generated from the same
 * `lib/content` access layer the pages themselves read (Section 20 —
 * adding a city/brand/service/model is a data change, not a code change).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const blogLastModified = latestDate(posts.map((post) => post.publishedAt));
  const routes: RouteEntry[] = [
    { path: "/", priority: 1, changeFrequency: "weekly", lastModified: CONTENT_LAST_MODIFIED },
    {
      path: "/about",
      priority: 0.7,
      changeFrequency: "monthly",
      lastModified: CONTENT_LAST_MODIFIED,
    },
    {
      path: "/about/founder",
      priority: 0.6,
      changeFrequency: "monthly",
      lastModified: CONTENT_LAST_MODIFIED,
    },
    {
      path: "/services",
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: CONTENT_LAST_MODIFIED,
    },
    {
      path: "/brands",
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: CONTENT_LAST_MODIFIED,
    },
    {
      path: "/cities",
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: CONTENT_LAST_MODIFIED,
    },
    { path: "/blog", priority: 0.9, changeFrequency: "daily", lastModified: blogLastModified },
    {
      path: "/faq",
      priority: 0.6,
      changeFrequency: "monthly",
      lastModified: CONTENT_LAST_MODIFIED,
    },
    {
      path: "/contact",
      priority: 0.5,
      changeFrequency: "monthly",
      lastModified: CONTENT_LAST_MODIFIED,
    },
    {
      path: "/download",
      priority: 0.9,
      changeFrequency: "monthly",
      lastModified: CONTENT_LAST_MODIFIED,
    },
    {
      path: "/privacy-policy",
      priority: 0.3,
      changeFrequency: "yearly",
      lastModified: CONTENT_LAST_MODIFIED,
    },
    {
      path: "/terms-and-conditions",
      priority: 0.3,
      changeFrequency: "yearly",
      lastModified: CONTENT_LAST_MODIFIED,
    },
    {
      path: "/delete-account",
      priority: 0.3,
      changeFrequency: "yearly",
      lastModified: CONTENT_LAST_MODIFIED,
    },
    ...getAllServices().map((service): RouteEntry => ({
      path: `/services/${service.slug}`,
      priority: 0.6,
      changeFrequency: "monthly",
      lastModified: CONTENT_LAST_MODIFIED,
    })),
    ...getAllBrands().map((brand): RouteEntry => ({
      path: `/brands/${brand.slug}`,
      priority: 0.6,
      changeFrequency: "monthly",
      lastModified: CONTENT_LAST_MODIFIED,
    })),
    ...getAllModels().map((model): RouteEntry => ({
      path: `/brands/${model.brandSlug}/${model.slug}`,
      priority: 0.5,
      changeFrequency: "monthly",
      lastModified: CONTENT_LAST_MODIFIED,
    })),
    ...getAllCities().map((city): RouteEntry => ({
      path: `/cities/${city.slug}`,
      priority: city.status === "live" ? 0.7 : 0.4,
      changeFrequency: "monthly",
      lastModified: CONTENT_LAST_MODIFIED,
    })),
    ...getAllAreas().map((area): RouteEntry => ({
      path: `/cities/${area.citySlug}/${area.slug}`,
      priority: 0.5,
      changeFrequency: "monthly",
      lastModified: CONTENT_LAST_MODIFIED,
    })),
    ...getPublishedCategories().map((category): RouteEntry => ({
      path: `/blog/${category.slug}`,
      priority: 0.7,
      changeFrequency: "weekly",
      lastModified: latestDate(
        posts.filter((post) => post.categorySlug === category.slug).map((post) => post.publishedAt),
      ),
    })),
    ...posts.map((post): RouteEntry => ({
      path: `/blog/${post.categorySlug}/${post.slug}`,
      priority: 0.6,
      changeFrequency: "monthly",
      lastModified: post.publishedAt,
    })),
  ];

  return routes.map((route) => ({
    url: new URL(route.path, siteConfig.url).toString(),
    lastModified: new Date(`${route.lastModified}T00:00:00.000Z`),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
