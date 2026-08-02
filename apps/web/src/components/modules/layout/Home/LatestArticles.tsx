import { groq } from "next-sanity";
import { client } from "@/lib/sanity/client";
import Image from "next/image";
import Link from "next/link";
import { LucideCalendar } from "lucide-react";
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
  const response = await client.fetch<Query[]>(QUERY);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-4">
      {response.map((article: Query) => (
        <Link
          key={article.slug}
          href={`/artikel/${article.slug}`}
          className="flex flex-col justify-around group"
        >
          <Card className="p-0 pb-4 hover:text-primary transition-colors duration-300 h-full drop-shadow-xl">
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
              <h2 className="text-base">{article.penulis}</h2>
            </div>
            <CardContent>
              <p className="text-sm">{article.ringkasan}</p>
            </CardContent>
            <CardFooter className="mt-auto">
              <span className="flex flex-row gap-2 items-center text-muted-foreground">
                <LucideCalendar size={24} />
                {new Date(article.publishedAt).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
