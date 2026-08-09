import PageWrapper from "@/components/shared/page-wrapper";
import { urlFor } from "@/lib/sanity/client";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { LucideUser, LucideCalendar } from "lucide-react";
import { getArticleBySlug } from "@/services/sanity/artikel";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Artikel Tidak Ditemukan",
    };
  }

  return {
    title: article.title,
    description: article.ringkasan,
    openGraph: {
      title: article.title,
      description: article.ringkasan,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.penulis || "Forum OSIS Daerah Gorontalo"],
      images: [
        {
          url: urlFor(article.imageRef).width(1200).height(630).url(),
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.ringkasan,
      images: [urlFor(article.imageRef).width(1200).height(630).url()],
    },
  };
}

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;

      return (
        <figure className="my-6 mx-1">
          <div className="relative aspect-video w-full overflow-hidden rounded-md bg-muted">
            <Image
              src={urlFor(value).quality(80).url()}
              alt={value.alt || "Gambar artikel"}
              fill
              className="object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="text-center text-xs sm:text-sm xl:text-base text-muted-foreground mt-2 italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result = await getArticleBySlug(slug);

  if (!result) return <div>Artikel tidak ditemukan</div>;

  return (
    <PageWrapper>
      <div className="p-4 sm:p-6 md:p-12 lg:px-32">
        <header>
          <div className="mb-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
              {result.title}
            </h1>
            <div className="flex flex-row gap-4 mt-2 mb-6 md:mt-4 md:mb-10">
              <div className="flex flex-row gap-1 items-center text-muted-foreground">
                <LucideUser className="size-4" />
                <span className="text-sm md:text-base">
                  {result.penulis || "Admin"}
                </span>
              </div>
              <div className="flex flex-row gap-1 items-center text-muted-foreground">
                <LucideCalendar className="size-4" />
                <span className="text-sm md:text-base">
                  {new Date(result.publishedAt).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>

          <div className="relative aspect-video w-full rounded-md overflow-hidden">
            <Image
              src={urlFor(result.imageRef).quality(80).url()}
              alt={result.imageCaption || "Gambar artikel"}
              fill
              className="object-cover"
            />
          </div>
        </header>
        <main className="mt-8 text-sm sm:text-base xl:text-lg">
          <PortableText value={result.body} components={components} />
        </main>
      </div>
    </PageWrapper>
  );
}
