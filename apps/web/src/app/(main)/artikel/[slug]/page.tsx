import PageWrapper from "@/components/modules/layout/page-wrapper";
import { client, urlFor } from "@/lib/sanity/client";
import { groq } from "next-sanity";
import {
  PortableText,
  PortableTextComponents,
  PortableTextProps,
} from "@portabletext/react";
import Image from "next/image";
import { LucideUser, LucideCalendar } from "lucide-react";

interface Artikel {
  body: PortableTextProps["value"];
  imageRef: string;
  imageCaption: string;
  penulis: string;
  publishedAt: string;
  ringkasan: string;
  title: string;
}

const QUERY = groq`*[_type == "artikel" && slug.current == $slug][0] {
 body,
 'imageRef': mainImage.asset._ref,
 'imageCaption': mainImage.caption,
 penulis,
 publishedAt,
 ringkasan,
 title,
}`;

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      // Jika data aset gambarnya tidak ada, jangan render apa-apa
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

  const result = await client.fetch<Artikel>(QUERY, { slug });

  return (
    <PageWrapper>
      <div className="p-4 sm:p-6 md:p-12 lg:px-32">
        <header>
          <div className="mb-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
              {result?.title}
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
                  {new Date(result.publishedAt).toLocaleDateString()}
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
