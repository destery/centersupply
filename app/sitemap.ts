import type { MetadataRoute } from "next";
import { siteConfig } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1 },
    { path: "/company", priority: 0.85 },
    { path: "/products", priority: 0.9 },
    { path: "/supply", priority: 0.8 },
    { path: "/contacts", priority: 0.8 }
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route.priority
  }));
}
