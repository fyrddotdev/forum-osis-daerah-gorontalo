# Repositori Website Forum OSIS Daerah Provinsi Gorontalo

Ini adalah repositori resmi untuk website **Forum OSIS Daerah Provinsi Gorontalo**. Proyek ini merupakan platform informasi digital yang mencakup profil organisasi, publikasi kegiatan, dan artikel wawasan dari pengurus serta anggota FODA Gorontalo.

## 🚀 Status Proyek

**Dalam Pengembangan (Under Development)**  
Saat ini proyek sedang dalam tahap refactor arsitektur dan pengembangan fitur inti untuk publikasi artikel.

## 🛠 Tech Stack

Proyek ini dibangun menggunakan arsitektur Monorepo dengan **pnpm**:

### Frontend (`apps/web`)

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 & shadcn/ui
- **Animations**: Motion (Framer Motion)
- **CMS Client**: next-sanity
- **Icons**: Lucide React

### Backend/CMS (`apps/studio`)

- **Framework**: Sanity Studio v3
- **Language**: TypeScript

---

## 💻 Memulai (Getting Started)

### 1. Cloning Repositori

```bash
git clone https://github.com/Forum-OSIS-Daerah-Gorontalo/foda-web.git
cd foda-web
```

### 2. Install Dependencies

Pastikan Anda sudah menginstall [pnpm](https://pnpm.io/installation) di mesin Anda.

```bash
pnpm install
```

### 3. Setup Environment Variables

Anda perlu mengatur file `.env` di masing-masing aplikasi agar terhubung dengan Sanity CMS.

#### Untuk Web (`apps/web`)

1. Masuk ke folder `apps/web`.
2. Copy `.env.example` menjadi `.env`.
3. Isi nilai variabelnya sesuai dengan project Sanity Anda.

```bash
NEXT_SANITY_PROJECT_ID=your_project_id
NEXT_SANITY_DATASET=production
```

#### Untuk Studio (`apps/studio`)

1. Masuk ke folder `apps/studio`.
2. Copy `.env.example` menjadi `.env`.
3. Isi nilai variabelnya.

```bash
SANITY_STUDIO_PROJECT_ID=your_project_id
SANITY_STUDIO_DATASET=production
```

### 4. Menjalankan Proyek

Jalankan perintah berikut di **root directory**:

- Menjalankan Web & Studio secara bersamaan:
  ```bash
  pnpm dev:all
  ```
- Hanya menjalankan Frontend:
  ```bash
  pnpm dev:web
  ```
- Hanya menjalankan Sanity Studio:
  ```bash
  pnpm dev:studio
  ```

---

## 📂 Struktur Folder Front-end

Proyek ini mengikuti standar arsitektur bersih untuk Next.js:

- `src/app`: Routing dan Page.
- `src/components/shared`: Komponen global (Navbar, Footer, dsb).
- `src/components/modules`: Komponen spesifik fitur (Home, Artikel).
- `src/components/ui`: Komponen dasar dari shadcn/ui.
- `src/services`: Logika fetch data dan query GROQ.
- `src/types`: Definisi interface TypeScript.
- `src/lib`: Konfigurasi library (Sanity Client).

---

## 👨‍💻 Kontributor & Special Mention

- **Moh. Farid Dunggio** - Lead Developer - [@fyrddotdev](https://github.com/fyrddotdev)

Developed with ❤️ by **Forum OSIS Daerah Gorontalo**.
