import Link from "next/link";
import { Button } from "@/components/ui/button";
import FadeInScroll from "@/components/animations/fade-in-scroll";
import { LucideHome, LucideAlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      <FadeInScroll>
        <div className="flex flex-col items-center gap-6">
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-muted">
            <LucideAlertCircle className="h-12 w-12 text-destructive" />
            <div className="absolute inset-0 animate-ping rounded-full bg-destructive/20" />
          </div>
          <div className="space-y-2">
            <h1 className="text-7xl font-extrabold tracking-tighter sm:text-8xl">
              404
            </h1>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Halaman Tidak Ditemukan
            </h2>
            <p className="mx-auto max-w-[400px] text-muted-foreground md:text-lg">
              Waduh! Sepertinya halaman yang kamu cari sudah pindah sekolah atau
              sedang tidak ada di tempat.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/">
              <Button variant="default" size="lg">
                <LucideHome className="mr-2 h-4 w-4" />
                Kembali ke Beranda
              </Button>
            </Link>
            <Link href="/artikel">
              <Button variant="outline" size="lg">
                Baca Artikel Terbaru
              </Button>
            </Link>
          </div>
        </div>
      </FadeInScroll>
    </div>
  );
}
