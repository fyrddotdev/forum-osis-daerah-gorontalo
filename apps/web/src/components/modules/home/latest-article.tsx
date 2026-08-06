import { groq } from "next-sanity";
import { client } from "@/lib/sanity/client";
import Image from "next/image";
import Link from "next/link";
import { LucideCalendar, ArrowRight, User } from "lucide-react";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface Query {
  title: string;
  penulis: string;
  ringkasan: string;
  publishedAt: string;
  slug: string;
  imageUrl: string;
  imageCaption: string;
}

const QUERY = groq`*[_type == "artikel"] | order(_createdAt desc)[0..5]{
  title,
  penulis,
  ringkasan,
  publishedAt,
  'slug': slug.current,
  'imageUrl': mainImage.asset->url,
  'imageCaption': mainImage.caption,
}`;

export default async function LatestArticles() {
  const response = await client.fetch<Query[]>(
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
        {response.map((article: Query) => (
          <Link
            key={article.slug}
            href={`/artikel/${article.slug}`}
            className="flex flex-col justify-around group"
          >
            <Card className="p-0 pb-4y h-full shadow-md transition-all duration-300 hover:text-primary hover:shadow-2xl hover:-translate-y-1">
              <CardHeader className="relative aspect-video overflow-hidden w-full">
                <Image
                  src={article.imageUrl}
                  alt={article.imageCaption}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-115 transition-transform duration-300"
                />
              </CardHeader>
              <div className="px-5">
                <CardTitle className="text-xl font-bold">
                  {article.title}
                </CardTitle>
                <div className="flex flex-row gap-1 items-center text-muted-foreground">
                  <User size={14} />
                  <h2 className="text-sm">{article.penulis}</h2>
                </div>
              </div>
              <CardContent>
                <p className="text-sm">{article.ringkasan}</p>
              </CardContent>
              <CardFooter className="mt-auto flex flex-row items-center justify-between">
                <span className="flex flex-row gap-2 items-center text-muted-foreground">
                  <LucideCalendar size={24} />
                  {new Date(article.publishedAt).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
