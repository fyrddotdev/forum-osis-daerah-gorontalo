import CardArticle from "@/components/modules/artikel/card-article";
import Searchbar from "@/components/shared/searchbar";
import PageWrapper from "@/components/shared/page-wrapper";
import Link from "next/link";
import { getAllArticles, searchArticles } from "@/services/sanity/artikel";
import FadeInScroll from "@/components/animations/fade-in-scroll";

export default async function ArtikelPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; limit?: string }>;
}) {
  const params = await searchParams;
  const query = params.q || "";
  const limit = Number(params.limit) || 6;

  const result = query
    ? await searchArticles(query, limit)
    : await getAllArticles(limit);

  return (
    <FadeInScroll>
      <PageWrapper>
        <header className="flex flex-col justify-center text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
            ARTIKEL FODA
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl">
            Daftar artikel terbaru
          </p>
        </header>
        <section className="p-4 sm:p-6 md:p-12" id="content">
          <Searchbar placeholder="Cari artikel..." url="/artikel" />
          <div className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {result.map((item) => (
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
    </FadeInScroll>
  );
}
