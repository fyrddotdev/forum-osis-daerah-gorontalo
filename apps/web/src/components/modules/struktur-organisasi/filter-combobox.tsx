"use client";

import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxList,
  ComboboxItem,
  ComboboxContent,
} from "@/components/ui/combobox";
import { useRouter } from "next/navigation";

export default function ComboBoxAngkatan({
  list_angkatan,
  default_angkatan
}: {
  list_angkatan: number[];
  default_angkatan: number;
}) {
  const router = useRouter();

  return (
    <Combobox defaultValue={default_angkatan} items={list_angkatan}>
      <ComboboxInput
        onChange={(e) => {
          router.push(`/struktur-organisasi?angkatan=${e.target.value}`);
        }}
        placeholder="Pilih angkatan"
      />
      <ComboboxContent>
        <ComboboxEmpty>Angkatan tidak ditemukan</ComboboxEmpty>
        <ComboboxList>
          {list_angkatan.map((item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
