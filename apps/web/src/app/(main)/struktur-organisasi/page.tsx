import PageWrapper from "@/components/shared/page-wrapper";
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
    ? await getStrukturKepengurusanByName(query_name, params.angkatan)
    : getStrukturKepengurusan(params.angkatan);

  return (
    <PageWrapper>
      <h1>Struktur Organisasi</h1>
    </PageWrapper>
  );
}
