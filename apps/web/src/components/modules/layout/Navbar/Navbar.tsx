import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

import { NavigationItem } from "@/interfaces/types";
import NavbarMobileMenu from "./NavbarMobileMenu";
import NavbarDesktopMenu from "./NavbarDesktopMenu";

const navigationItem: NavigationItem[] = [
  { name: "Home", href: "/" },
  {
    name: "Organisasi",
    href: "#",
    isDropdown: true,
    dropdownItems: [
      { name: "Tentang Organisasi", href: "/organisasi/tentang" },
      { name: "Struktur Kepengurusan", href: "/organisasi/struktur" },
    ],
  },
  { name: "Artikel", href: "/artikel" },
  { name: "Galeri", href: "/galeri" },
];

export default function Navbar() {
  return (
    <>
      <nav
        className={cn(
          // Position And Sizing
          "sticky top-0 w-full z-50",
          // Color and Styling
          "bg-background text-foreground border-b",
          // For its children
          "p-3 sm:p-4 flex items-center justify-between",
          // Decoration
          "shadow-md",
        )}
      >
        {/* Icon ( Mobile )*/}
        <Link className="sm:hidden" href={`/`}>
          <Image
            width="48"
            height="48"
            src="/foda.png"
            alt="Logo Forum OSIS Daerah Provini Gorontalo"
            priority
            unoptimized
          ></Image>
        </Link>

        {/* Icon ( Desktop )*/}
        <Link className="not-sm:hidden" href={`/`}>
          <Image
            width="64"
            height="64"
            src="/foda.png"
            alt="Logo Forum OSIS Daerah Provini Gorontalo"
            priority
            unoptimized
          ></Image>
        </Link>

        {/* It's time to design the navigation button ^_^ */}

        {/* Mobile design first */}
        <div className={cn("sm:hidden z-51")}>
          <NavbarMobileMenu navigationItem={navigationItem} />
        </div>
        {/* Then desktop ^_^ */}
        <div
          className={cn(
            "hidden sm:flex flex-row justify-between w-full z-51 mx-4",
          )}
        >
          <NavbarDesktopMenu navigationItem={navigationItem} />
        </div>
      </nav>
    </>
  );
}
