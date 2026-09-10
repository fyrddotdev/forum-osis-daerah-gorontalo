import CardArticle from "@/components/modules/artikel/card-article";
import { getLatestArticles } from "@/services/sanity/artikel";
import CallToActionLink from "@/components/shared/call-to-action-link";

export default async function LatestArticles() {
  const response = await getLatestArticles();

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
        <CallToActionLink href="/artikel" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {response.map((article) => (
          <CardArticle key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
