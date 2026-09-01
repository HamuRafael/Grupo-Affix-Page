export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { solutionPages } from "@/data/solutions";
import { articles } from "@/data/articles";
import { siteUrl } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // Data da última publicação do build; o conteúdo é estático, então todo ajuste
  // de conteúdo passa por um novo build.
  const lastModified = new Date();

  return [
    { url: `${siteUrl}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/quem-somos`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/contato`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/investidores`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/simulador`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/blog`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteUrl}/trabalhe-conosco`, lastModified, changeFrequency: "weekly", priority: 0.6 },
    ...solutionPages.map((page) => ({
      url: `${siteUrl}/solucoes/${page.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...articles.map((article) => ({
      url: `${siteUrl}/blog/${article.slug}`,
      lastModified: new Date(article.datePublished),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    { url: `${siteUrl}/privacidade`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/termos`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
