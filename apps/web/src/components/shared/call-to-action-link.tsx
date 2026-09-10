
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CallToActionLink({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="flex flex-row items-center gap-1 text-zinc-400 hover:text-primary transition-colors duration-300 group"
    >
      <span className="text-sm tracking-wider">LIHAT SEMUA</span>
      <ArrowRight
        size={16}
        className="group-hover:translate-x-1 transition-transform"
      />
    </Link>
  );
}
