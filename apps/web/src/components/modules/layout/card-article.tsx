import Link from "next/link";
import Image from "next/image";
import { User, Calendar } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { urlFor } from "@/lib/sanity/client";

interface ArticleProps {
  article: {
    title: string;
    slug: string;
    penulis?: string;
    ringkasan?: string;
    publishedAt: string;
    imageRef?: string;
    imageCaption?: string;
  };
}

export default function CardArticle({ article }: ArticleProps) {
  return (
    <Link
      href={`/artikel/${article.slug}`}
      className="flex flex-col justify-around group"
    >
      <Card className="p-0 pb-4 h-full shadow-md transition-all duration-300 hover:text-primary hover:shadow-2xl hover:-translate-y-1 overflow-hidden">
        <CardHeader className="relative aspect-video overflow-hidden w-full p-0">
          {article.imageRef && (
            <Image
              src={urlFor(article.imageRef).quality(75).url()}
              alt={article.imageCaption || article.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          )}
        </CardHeader>

        <div className="px-5">
          <CardTitle className="text-xl font-bold line-clamp-2">
            {article.title}
          </CardTitle>
          <div className="flex flex-row gap-1 items-center text-muted-foreground mt-1">
            <User size={14} />
            <span className="text-sm">{article.penulis || "Admin"}</span>
          </div>
        </div>

        <CardContent className="px-5">
          <p className="text-sm text-muted-foreground line-clamp-3">
            {article.ringkasan}
          </p>
        </CardContent>

        <CardFooter className="mt-auto px-5 flex flex-row items-center justify-between">
          <span className="flex flex-row gap-2 items-center text-muted-foreground text-xs">
            <Calendar size={16} />
            {article.publishedAt
              ? new Date(article.publishedAt).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })
              : "-"}
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
