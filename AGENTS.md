# Rules Koding Proyek

- Gunakan React
- Gunakan Next.js App Router & TypeScript.
- Gunakan Tailwind CSS & shadcn/ui untuk komponen UI.
- Tulis kode yang ringkas dan sertakan komentar penjelasan jika ada logika yang rumit.
- Jawab dalam Bahasa Indonesia yang santai.
- Gunakan Sanity untuk CMS.

# File & Folder Structure Rules

- Gunakan arsitektur komponen bertingkat sesuai dengan standar umum.
- src/app/ untuk halaman dan routing.
- src/components/ untuk komponen UI.
  - `src/components/ui/` untuk komponen dasar (shadcn/ui).
  - `src/components/shared/` untuk komponen global (Navbar, Footer, dsb).
  - `src/components/modules/` untuk komponen spesifik fitur (Home, Artikel, dsb).
- src/services/ untuk logika fetch data dan query (Sanity GROQ).
- src/lib/ untuk konfigurasi external library (Sanity Client, dsb).
- src/utils/ untuk fungsi pembantu (pure functions).
- src/hooks/ untuk custom hooks React.
- src/types/ untuk tipe data dan interfaces.

# Commit git message

- Gunakan format commit yang jelas dan deskriptif.
- Menjelaskan seluruh fitur yang baru saja diubah.
