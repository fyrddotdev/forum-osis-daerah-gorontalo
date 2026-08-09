import PageWrapper from "@/components/shared/page-wrapper";
import FadeIn from "@/components/animations/fade-in";
import {
  getStrukturKepengurusan,
  getStrukturAngkatanArray,
  getStrukturKepengurusanByName,
} from "@/services/sanity/struktur-kepengurusan";


export default async function StrukturOrganisasiPage({
  searchParams,
}: {
  searchParams: Promise<{ name: string; angkatan: number }>;
}) {
  const params = await searchParams;
  const query_name = params.name || "";
  const angkatan = params.angkatan || 2026;
  const result = query_name
    ? await getStrukturKepengurusanByName(query_name, angkatan)
    : await getStrukturKepengurusan(angkatan);
  const list_angkatan = await getStrukturAngkatanArray();

  return (
    <FadeIn>
      <PageWrapper>
        <header className="flex flex-col justify-center text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase">
            Struktur Kepengurusan
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mt-2">
            Forum OSIS Daerah Provinsi Gorontalo
          </p>
        </header>

        <section className="p-4 sm:p-6 md:p-12" id="content">
          <div className="flex justify-center mb-8"></div>

          <div className="mt-4">
            <div className="flex flex-col gap-12">
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl md:text-3xl font-bold inline-block border-b-4 border-primary pb-1">
                    Badan Pengurus Harian
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  <div className="aspect-3/4 bg-muted rounded-2xl animate-pulse" />
                  <div className="aspect-3/4 bg-muted rounded-2xl animate-pulse" />
                  <div className="aspect-3/4 bg-muted rounded-2xl animate-pulse" />
                  <div className="aspect-3/4 bg-muted rounded-2xl animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageWrapper>
    </FadeIn>
  );
}
