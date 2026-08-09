"use client";

import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxList,
  ComboboxItem,
  ComboboxContent,
} from "@/components/ui/combobox";

export default function ComboBoxAngkatan({
  list_angkatan,
}: {
  list_angkatan: number[];
}) {
  return (
    <Combobox items={list_angkatan}>
      <ComboboxInput placeholder="Pilih angkatan" />
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
