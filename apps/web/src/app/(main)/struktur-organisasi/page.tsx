import PageWrapper from "@/components/shared/page-wrapper";
import FadeIn from "@/components/animations/fade-in";
import FadeInScroll from "@/components/animations/fade-in-scroll";
import {
  getStrukturKepengurusan,
  getStrukturAngkatanArray,
  getStrukturKepengurusanByName,
} from "@/services/sanity/struktur-kepengurusan";
import Searchbar from "@/components/shared/searchbar";
import ComboBoxAngkatan from "@/components/modules/struktur-organisasi/filter-combobox";
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import { Globe } from "lucide-react";
import { InstagramIcon } from "@/components/icons/lucide-instagram";
import { TiktokIcon } from "@/components/icons/lucide-tiktok";

export default async function StrukturOrganisasiPage({
  searchParams,
}: {
  searchParams: Promise<{ q: string; angkatan: number }>;
}) {
  const params = await searchParams;
  const q = params.q || "";
  const angkatan =
    params.angkatan || (await getStrukturAngkatanArray()).map((a) => a)[0];

  const result = q
    ? await getStrukturKepengurusanByName(q, angkatan)
    : await getStrukturKepengurusan(angkatan);
  const list_angkatan = await getStrukturAngkatanArray();
  const getBidangLabel = (bidang: string) => {
    const labels: Record<string, string> = {
      bph: "Badan Pengurus Harian",
      keagamaan: "Bidang Keagamaan",
      hubmaskominfo: "Bidang Humas & Kominfo",
      kajianstrategis: "Bidang Kajian Strategis",
      organisasikelembagaan: "Bidang Organisasi & Kelembagaan",
      psdm: "Bidang PSDM",
    };
    return labels[bidang] || bidang;
  };

  return (
    <FadeIn>
      <PageWrapper>
        <header className="flex flex-col justify-center text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase">
            Struktur Kepengurusan
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mt-2 uppercase">
            Angkatan {angkatan} - Forum OSIS Daerah Provinsi Gorontalo
          </p>
        </header>

        <section className="p-4 sm:p-6 md:p-12" id="content">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 w-full mb-12">
            <div className="w-full sm:flex-1">
              <Searchbar url="struktur-organisasi" />
            </div>
            <ComboBoxAngkatan
              default_angkatan={angkatan}
              list_angkatan={list_angkatan}
            />
          </div>

          <div className="mt-4 flex flex-col gap-16">
            {result.map((item) => (
              <FadeInScroll key={item.bidang}>
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-bold inline-block border-b-4 border-primary pb-2 uppercase tracking-wide">
                      {getBidangLabel(item.bidang)}
                    </h2>
                  </div>

                  <div className="flex flex-wrap justify-center gap-4">
                    {item.anggotaList && item.anggotaList.length > 0 ? (
                      item.anggotaList.map((anggota) => (
                        <Card
                          key={anggota.nama}
                          className="w-full sm:w-52 md:w-60 overflow-hidden hover:shadow-lg transition-shadow border-muted p-0 gap-0"
                        >
                          <div className="aspect-square relative">
                            {anggota.fotoUrl ? (
                              <Image
                                src={anggota.fotoUrl}
                                alt={anggota.nama}
                                fill={true}
                                className="relative"
                                quality={80}
                              />
                            ) : (
                              <Image
                                src="/photo_placeholder.png"
                                alt={anggota.nama}
                                fill={true}
                                className="relative"
                              />
                            )}
                          </div>
                          <CardHeader className="p-4 text-center">
                            <CardTitle className="text-lg md:text-xl font-bold line-clamp-1">
                              {anggota.nama}
                            </CardTitle>
                            <CardDescription className="text-primary font-medium">
                              {anggota.jabatan}
                            </CardDescription>
                            <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                              {anggota.sekolah}
                            </p>
                            <div className="flex justify-center gap-3 mt-2 text-muted-foreground">
                              {anggota.instagram && (
                                <a
                                  href={`https://instagram.com/${anggota.instagram}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label="Instagram"
                                  className="hover:text-primary transition-colors"
                                >
                                  <InstagramIcon className="w-4 h-4" />
                                </a>
                              )}
                              {anggota.tiktok && (
                                <a
                                  href={`https://tiktok.com/@${anggota.tiktok}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label="TikTok"
                                  className="hover:text-primary transition-colors"
                                >
                                  <TiktokIcon className="w-4 h-4" />
                                </a>
                              )}
                              {anggota.website && (
                                <a
                                  href={`https://${anggota.website}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label="Website"
                                  className="hover:text-primary transition-colors"
                                >
                                  <Globe className="w-4 h-4" />
                                </a>
                              )}
                            </div>
                          </CardHeader>
                        </Card>
                      ))
                    ) : (
                      <div className="text-center auto-cols-auto">
                        Belum ada data anggota untuk bidang ini.
                      </div>
                    )}
                  </div>
                </div>
              </FadeInScroll>
            ))}
          </div>
        </section>
      </PageWrapper>
    </FadeIn>
  );
}
