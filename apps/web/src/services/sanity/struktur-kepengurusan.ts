import { client } from "@/lib/sanity/client";
import { groq } from "next-sanity";
import { StrukturKepengurusan } from "@/types/types";

export const LIST_ANGKATAN_QUERY = groq`array::unique(*[_type == "strukturKepengurusan"].angkatan) | order(@ desc)`;

export const STRUKTUR_BY_NAME_QUERY = groq`*[_type == "strukturKepengurusan" && angkatan == $angkatan && anggotaList[].nama match "$name*"] | order(select(
  bidang == "bph" => 1,
  2
)) {
  anggotaList,
  bidang
}`;
export const STRUKTUR_KEPENGURUSAN_QUERY = groq`*[_type == "strukturKepengurusan" && angkatan == $angkatan] | order(select(
  bidang == "bph" => 1,
  2
)) {
  anggotaList,
  bidang
}`;

export async function getStrukturAngkatanArray() {
  return await client.fetch<number[]>(LIST_ANGKATAN_QUERY);
}

export async function getStrukturKepengurusan(angkatan: number) {
  return await client.fetch<StrukturKepengurusan>(STRUKTUR_KEPENGURUSAN_QUERY, {
    angkatan,
  });
}

export async function getStrukturKepengurusanByName(
  name: string,
  angkatan: number,
) {
  return await client.fetch<StrukturKepengurusan>(STRUKTUR_BY_NAME_QUERY, {
    name,
    angkatan,
  });
}
