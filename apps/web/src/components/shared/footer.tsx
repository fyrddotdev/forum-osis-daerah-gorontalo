import Link from "next/link";
import { Mail } from "lucide-react";
import { InstagramIcon } from "@/components/icons/lucide-instagram";

export default function Footer() {
  return (
    <footer
      id="footer"
      className=" bg-linear-to-br from-primary to-primary/80 z-10"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-8 sm:py-16 relative text-primary-foreground">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 gap-4">
          <div>
            <h1 className="text-xl font-bold">FODA Gorontalo</h1>
            <p className="my-2 text-sm">Forum OSIS Daerah Gorontalo</p>
          </div>
          <div>
            <h1 className="text-xl font-bold">Ikuti kami</h1>
            <Link
              href="https://www.instagram.com/forumosisdaerahgorontalo/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex my-2 items-center gap-1 lg:gap-2 text-sm hover:opacity-80"
            >
              <InstagramIcon className="w-4 h-4" />
              @forumosisdaerahgorontalo
            </Link>
          </div>
          <div>
            <h1 className="text-xl font-bold">Contact</h1>
            <div className="flex my-2 items-center gap-1 lg:gap-2 text-sm">
              <Mail className="w-4 h-4" />
              <p>forumosisdaerahgorontalo@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-col sm:justify-between sm:flex-row gap-4 p-4 border-t border-foreground/30 text-sm text-center">
          <p>© {new Date().getFullYear()} Forum OSIS Daerah Gorontalo</p>
          <p>
            Developed by{" "}
            <Link
              href="https://fyrd-dev.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80"
            >
              Moh. Farid Dunggio
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
