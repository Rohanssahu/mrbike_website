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
}

/**
 * Static routes, plus every entity-driven route generated from the same
 * `lib/content` access layer the pages themselves read (Section 20 —
 * adding a city/brand/service/model is a data change, not a code change).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes: RouteEntry[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about/founder", priority: 0.6, changeFrequency: "monthly" },
    { path: "/services", priority: 0.8, changeFrequency: "monthly" },
    { path: "/brands", priority: 0.8, changeFrequency: "monthly" },
    { path: "/cities", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.9, changeFrequency: "daily" },
    { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.5, changeFrequency: "monthly" },
    { path: "/download", priority: 0.9, changeFrequency: "monthly" },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms-and-conditions", priority: 0.3, changeFrequency: "yearly" },
    { path: "/delete-account", priority: 0.3, changeFrequency: "yearly" },
    ...getAllServices().map(
      (service): RouteEntry => ({
        path: `/services/${service.slug}`,
        priority: 0.6,
        changeFrequency: "monthly",
      }),
    ),
    ...getAllBrands().map(
      (brand): RouteEntry => ({
        path: `/brands/${brand.slug}`,
        priority: 0.6,
        changeFrequency: "monthly",
      }),
    ),
    ...getAllModels().map(
      (model): RouteEntry => ({
        path: `/brands/${model.brandSlug}/${model.slug}`,
        priority: 0.5,
        changeFrequency: "monthly",
      }),
    ),
    ...getAllCities().map(
      (city): RouteEntry => ({
        path: `/cities/${city.slug}`,
        priority: city.status === "live" ? 0.7 : 0.4,
        changeFrequency: "monthly",
      }),
    ),
    ...getAllAreas().map(
      (area): RouteEntry => ({
        path: `/cities/${area.citySlug}/${area.slug}`,
        priority: 0.5,
        changeFrequency: "monthly",
      }),
    ),
    ...getPublishedCategories().map(
      (category): RouteEntry => ({
        path: `/blog/${category.slug}`,
        priority: 0.7,
        changeFrequency: "weekly",
      }),
    ),
    ...getAllPosts().map(
      (post): RouteEntry => ({
        path: `/blog/${post.categorySlug}/${post.slug}`,
        priority: 0.6,
        changeFrequency: "monthly",
      }),
    ),
  ];

  return routes.map((route) => ({
    url: new URL(route.path, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
