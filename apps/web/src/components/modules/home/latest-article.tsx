import { groq } from "next-sanity";
import { client } from "@/lib/sanity/client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CardArticle from "@/components/modules/layout/card-article";
import { QueryLatest } from "@/interfaces/types";

const QUERY = groq`*[_type == "artikel"] | order(_createdAt desc)[0..5]{
  title,
  penulis,
  ringkasan,
  publishedAt,
  'imageRef':mainImage.asset._ref,
  'slug': slug.current,
  'imageCaption': mainImage.caption,
}`;

export default async function LatestArticles() {
  const response = await client.fetch<QueryLatest[]>(
    QUERY,
    {},
    { next: { revalidate: 60 } },
  );

  return (
    <section id="latest-articles">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-6">
        <div className="flex flex-col items-center text-center md:items-baseline md:text-left md:w-[60vw] mb-6">
          <h2 className="text-sm md:text-base font-bold">
            PUBLIKASI ORGANISASI
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold">Aksi & Wawasan</h1>
          <p className="mt-2 text-muted-foreground">
            Pusat kabar resmi yang menyajikan rekam jejak kegiatan, pelaksanaan
            program kerja, serta artikel pemikiran dari pengurus dan anggota
            organisasi.
          </p>
        </div>
        <Link
          href="/artikel"
          className="flex flex-row items-center gap-1 text-zinc-400 hover:text-primary transition-colors duration-300 group"
        >
          <span className="text-sm tracking-wider">LIHAT SEMUA</span>
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>

      {/*{Article grid below here!}*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {response.map((article: QueryLatest) => (
          <CardArticle key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
