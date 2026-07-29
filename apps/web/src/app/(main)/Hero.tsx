import { cn } from "@/lib/utils";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero">
      <div className={cn("absolute overflow-hidden w-full h-[90vh]")}>
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
            "absolute inset-0 bg-linear-to-t from-gray-900/90 via-gray-900/50 to-gray-900/10 -z-10",
          )}
        />
        <div
          className={cn(
            "relative w-full h-full flex flex-col items-center text-center justify-center font-heading text-white",
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
          <h3>BE BRAVE, BE THE CHANGE 💛✨</h3>
        </div>
      </div>
    </section>
  );
}
