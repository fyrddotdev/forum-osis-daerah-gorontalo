// types.ts
export interface NavigationItem {
  name: string;
  href: string;
  isDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

export interface DropdownItem {
  name: string;
  href: string;
}

import { PortableTextProps } from "@portabletext/react";

export interface Article {
  title: string;
  penulis: string;
  ringkasan: string;
  publishedAt: string;
  imageRef: string;
  slug: string;
  imageCaption: string;
}

export interface FullArticle extends Article {
  body: PortableTextProps["value"];
}

export interface StrukturKepengurusan {
  angkatan: number;
  bidang: string;
  anggotaList: Array<AnggotaBidang>;
}
export interface AnggotaBidang {
  _type: "anggota";
  nama: string;
  jabatan: string;
  sekolah: string;
  instagram?: string;
  tiktok?: string;
  website?: string;
  foto?: string;
}
