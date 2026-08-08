import Popup from "@/components/animations/popup";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Users, Sparkles, Megaphone } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about-us">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-6">
        <div className="flex flex-col items-center text-center md:items-baseline md:text-left md:w-[60vw] mb-6">
          <h2 className="text-sm md:text-base font-bold">TENTANG KAMI</h2>
          <h1 className="text-3xl md:text-4xl font-bold">
            Wadah Kolaborasi & Kepemimpinan Pelajar Gorontalo
          </h1>
          <p className="mt-4 text-muted-foreground">
            Forum OSIS Daerah Gorontalo adalah wadah terpadu yang menyatukan
            gagasan, energi, dan semangat seluruh pengurus OSIS SMA/SMK/MA
            se-Provinsi Gorontalo. Kami hadir untuk membangun sinergi
            antar-sekolah, mengasah jiwa kepemimpinan generasi muda, serta
            menjadi jembatan aspirasi pelajar demi kemajuan pendidikan di
            daerah.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Popup>
          <Card className="rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <CardHeader>
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <CardTitle className="text-lg font-bold">
                Sinergi & Jaringan
              </CardTitle>
              <CardDescription className="text-sm">
                Mempererat tali silaturahmi dan membuka ruang kolaborasi antar
                pengurus OSIS lintas sekolah se-Gorontalo.
              </CardDescription>
            </CardHeader>
          </Card>
        </Popup>
        <Popup>
          <Card className="rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <CardHeader>
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <CardTitle className="text-lg font-bold">
                Pengembangan Diri
              </CardTitle>
              <CardDescription className="text-sm">
                Membina potensi kepemimpinan, keterampilan organisasi, dan
                kreativitas pelajar melalui program-program strategis.
              </CardDescription>
            </CardHeader>
          </Card>
        </Popup>

        <Popup>
        <Card className="rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
          <CardHeader>
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Megaphone className="w-5 h-5" />
            </div>
            <CardTitle className="text-lg font-bold">
              Suara & Aspirasi
            </CardTitle>
            <CardDescription className="text-sm">
              Menjadi panggung inklusif bagi generasi muda untuk menyuarakan
              gagasan positif dan berkontribusi nyata bagi daerah.
            </CardDescription>
          </CardHeader>
        </Card>
        </Popup>
      </div>
    </section>
  );
}
