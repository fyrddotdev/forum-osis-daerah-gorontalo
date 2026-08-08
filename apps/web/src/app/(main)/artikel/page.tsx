import CardArticle from "@/components/modules/layout/card-article";
import Searchbar from "@/components/modules/artikel/searchbar";
import PageWrapper from "@/components/modules/layout/page-wrapper";
import { client } from "@/lib/sanity/client";
import { groq } from "next-sanity";
import Link from "next/link";

interface QuerySearch {
  title: string;
  publishedAt: string;
  penulis: string;
  ringkasan: string;
  slug: string;
  imageRef: string;
  imageCaption: string;
}

const searchQuery = groq`*[_type == "artikel" && title match $q || ringkasan match $q] | order(_createdAt desc)[0...$limit]{
  title,
  publishedAt,
  penulis,
  ringkasan,
  'slug': slug.current,
  'imageRef': mainImage.asset._ref,
  'imageCaption': mainImage.caption,
}`;

const defaultQuery = groq`*[_type == "artikel"] | order(_createdAt desc)[0...$limit] {
  title,
  publishedAt,
  penulis,
  ringkasan,
  'slug': slug.current,
  'imageRef': mainImage.asset._ref,
  'imageCaption': mainImage.caption,
}`;

export default async function ArtikelPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; limit?: string }>;
}) {
  const params = await searchParams;
  const query = params.q || "";
  const limit = Number(params.limit) || 6;

  const result = query
    ? await client.fetch<QuerySearch[]>(searchQuery, { q: query, limit })
    : await client.fetch<QuerySearch[]>(defaultQuery, { limit });

  return (
    <PageWrapper>
      <header className="flex flex-col justify-center text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
          ARTIKEL FODA
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl">Daftar artikel terbaru</p>
      </header>
      <section className="p-4 sm:p-6 md:p-12" id="content">
        <Searchbar />
        <div className="mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {result.map((item: QuerySearch) => (
              <CardArticle key={item.slug} article={item} />
            ))}
          </div>
          {result.length >= limit && (
            <div className="mt-10 flex justify-center">
              <Link
                href={`/artikel?${query ? `q=${query}&` : ""}limit=${limit + 6}`}
                scroll={false}
                className="px-6 py-2.5 border rounded-xl font-medium hover:bg-muted transition-colors shadow-sm"
              >
                Tampilkan Lebih Banyak
              </Link>
            </div>
          )}
        </div>
      </section>
    </PageWrapper>
  );
}

