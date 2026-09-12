import { cn } from "@/lib/utils";
import Image from "next/image";
import ScrollIndicator from "@/components/shared/scroll-indicator";

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      <div className={cn("absolute overflow-hidden w-full h-screen")}>
        <Image
          src="/photos/image_hero.webp"
          alt="Forum OSIS Daerah Gorontalo Angkatan 1"
          fill
          priority
          className="object-cover object-bottom -z-50"
        />
        <div className="absolute bg-linear-to-b from-white/50 via-gray-800/75 to-gray-900/75 inset-0 -z-10"
        />
        <div
          className={cn(
            "relative w-full h-full flex flex-col items-center text-center justify-center font-heading text-white p-4",
          )}
        >
          <Image
            src="/foda.png"
            alt="Logo FODA"
            width={150}
            height={150}
            priority
            className="mb-2 sm:mb-4 drop-shadow-lg"
          />
          <p className={cn("text-base sm:text-xl md:text-2xl lg:text-3xl")}>
            Selamat Datang di
          </p>
          <h1
            className={cn(
              "text-2xl md:text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight drop-shadow-md",
            )}
          >
            FORUM OSIS DAERAH PROVINSI GORONTALO
          </h1>
          <p className="text-lg font-medium italic mb-8">
            BE BRAVE, BE THE CHANGE 💛✨
          </p>
          <div className="z-10">
            <ScrollIndicator />
          </div>
        </div>
      </div>
    </section>
  );
}
