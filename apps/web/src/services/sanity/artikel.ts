import { groq } from "next-sanity";
import { client } from "@/lib/sanity/client";
import { Article, FullArticle } from "@/types/types";

export const LATEST_ARTICLES_QUERY = groq`*[_type == "artikel"] | order(_createdAt desc)[0..5]{
  title,
  penulis,
  ringkasan,
  publishedAt,
  'imageRef':mainImage.asset._ref,
  'slug': slug.current,
  'imageCaption': mainImage.caption,
}`;

export const SEARCH_ARTICLES_QUERY = groq`*[_type == "artikel" && title match $q || ringkasan match $q] | order(_createdAt desc)[0...$limit]{
  title,
  publishedAt,
  penulis,
  ringkasan,
  'slug': slug.current,
  'imageRef': mainImage.asset._ref,
  'imageCaption': mainImage.caption,
}`;

export const DEFAULT_ARTICLES_QUERY = groq`*[_type == "artikel"] | order(_createdAt desc)[0...$limit] {
  title,
  publishedAt,
  penulis,
  ringkasan,
  'slug': slug.current,
  'imageRef': mainImage.asset._ref,
  'imageCaption': mainImage.caption,
}`;

export const ARTICLE_BY_SLUG_QUERY = groq`*[_type == "artikel" && slug.current == $slug][0] {
  body,
  'imageRef': mainImage.asset._ref,
  'imageCaption': mainImage.caption,
  penulis,
  publishedAt,
  ringkasan,
  title,
}`;


export async function getLatestArticles() {
  return await client.fetch<Article[]>(
    LATEST_ARTICLES_QUERY,
    {},
    { next: { revalidate: 60 } },
  );
}

export async function searchArticles(q: string, limit: number) {
  return await client.fetch<Article[]>(SEARCH_ARTICLES_QUERY, { q, limit });
}

export async function getAllArticles(limit: number) {
  return await client.fetch<Article[]>(DEFAULT_ARTICLES_QUERY, { limit });
}

export async function getArticleBySlug(slug: string) {
  return await client.fetch<FullArticle>(ARTICLE_BY_SLUG_QUERY, { slug });
}
