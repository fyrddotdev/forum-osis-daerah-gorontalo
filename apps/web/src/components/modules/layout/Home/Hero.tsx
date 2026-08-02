import { cn } from "@/lib/utils";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      <div className={cn("absolute overflow-hidden w-full h-screen")}>
        <Image
          src="/photos/image_hero.webp"
          alt="Forum OSIS Daerah Gorontalo Angkatan 1"
          fill
          priority
          unoptimized
          className={cn("object-cover object-bottom -z-50")}
        />
        <div
          className={cn(
            "absolute bg-linear-to-b from-white/50 via-gray-700/75 to-gray-700/75 inset-0 -z-10",
          )}
        />
        <div
          className={cn(
            "relative w-full h-full flex flex-col items-center text-center justify-center font-heading text-white p-2",
          )}
        >
          <Image
            src="/foda.png"
            alt=""
            width={150}
            height={150}
            priority
            className="mb-4"
          ></Image>
          <h2 className={cn("text-base sm:text-xl md:text-2xl")}>
            Selamat Datang di
          </h2>
          <h1
            className={cn(
              "text-xl sm:text-2xl md:text-3xl font-extrabold mb-6",
            )}
          >
            FORUM OSIS DAERAH PROVINSI GORONTALO
          </h1>
          <h3 className="text-lg font font-lightbold">
            BE BRAVE, BE THE CHANGE 💛✨
          </h3>
        </div>
      </div>
    </section>
  );
}
