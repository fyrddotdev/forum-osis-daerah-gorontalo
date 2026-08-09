import { MetadataRoute } from "next";
import { getAllArticles } from "@/services/sanity/artikel";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://fodagorontalo.netlify.app/";

  // Ambil semua artikel untuk sitemap
  const articles = await getAllArticles(100);

  const articleUrls = articles.map((article) => ({
    url: `${baseUrl}/artikel/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/artikel`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/galeri`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...articleUrls,
  ];
}
