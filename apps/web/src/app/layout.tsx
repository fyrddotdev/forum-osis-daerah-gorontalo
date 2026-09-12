import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Playfair_Display,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

// Such a weird thing to use black theme in organization website ;)
// import { ThemeProvider } from "@/lib/ThemeProvider";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fodagorontalo.netlify.app/"),
  title: {
    default: "Forum OSIS Daerah Gorontalo",
    template: "%s | Forum OSIS Daerah Gorontalo",
  },
  description:
    "Wadah kolaborasi, aspirasi, dan pengembangan potensi pengurus OSIS se-Provinsi Gorontalo untuk mewujudkan generasi pemimpin yang inspiratif.",
  keywords: [
    "FON",
    "FODA Gorontalo",
    "Forum OSIS",
    "Forum OSIS Nasional",
    "Gorontalo",
    "OSIS Gorontalo",
    "Organisasi Siswa Intra Sekolah",
    "Pendidikan Gorontalo",
    "Kemendikdasmen",
    "Kemendikdasmen Gorontalo",
  ],
  authors: [{ name: "Forum OSIS Daerah Gorontalo" }],
  creator: "Forum OSIS Daerah Gorontalo",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://fodagorontalo.netlify.app/",
    title: "Forum OSIS Daerah Gorontalo",
    description:
      "Wadah kolaborasi, aspirasi, dan pengembangan potensi pengurus OSIS se-Provinsi Gorontalo untuk mewujudkan generasi pemimpin yang inspiratif.",
    siteName: "Forum OSIS Daerah Gorontalo",
    images: [
      {
        url: "/photos/image_hero.webp",
        width: 1280,
        height: 960,
        alt: "Forum OSIS Daerah Gorontalo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forum OSIS Daerah Gorontalo",
    description:
      "Wadah kolaborasi, aspirasi, dan pengembangan potensi pengurus OSIS se-Provinsi Gorontalo untuk mewujudkan generasi pemimpin yang inspiratif.",
    images: ["/photos/image_hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "Wrj4IYxVseUT8AaXzasCyU33NulJDntrsrTurzDwBTo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Forum OSIS Daerah Gorontalo",
    alternateName: "FODA",
    url: "https://fodagorontalo.netlify.app/",
    logo: "https://fodagorontalo.netlify.app/foda.png",
    description:
      "Wadah kolaborasi, aspirasi, dan pengembangan potensi pengurus OSIS se-Provinsi Gorontalo.",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Gorontalo",
      addressCountry: "ID",
    },
  };

  return (
    <html
      lang="id"
      className={cn(
        "h-full",
        "antialiased",
        fontSans.variable,
        fontSerif.variable,
        fontMono.variable,
        "font-sans",
      )}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
