import Popup from "@/components/animations/popup";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Mosque,
  UserGroup,
  Computer,
  TicTacToe,
  Signature,
  User2,
} from "lucide-react";
import CallToActionLink from "@/components/shared/call-to-action-link";

export default function OrganizationStructure() {
  return (
    <section id="organization-structure">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-6">
        <div className="flex flex-col items-center text-center md:items-baseline md:text-left md:w-[60vw]">
          <h2 className="text-sm md:text-base font-bold">
            STRUKTUR ORGANISASI
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold">
            Susunan Kepengurusan FODA Gorontalo
          </h1>
          <p className="mt-4 mb-4 text-muted-foreground">
            Lihat setiap bidang kepengurusan yang ada di Forum OSIS Daerah
            Gorontalo. Setiap bidang berperan menjalankan program kerja,
            memperkuat koordinasi antar-sekolah, serta mendukung pengembangan
            organisasi pelajar di Gorontalo.
          </p>
        </div>
        <CallToActionLink href="/struktur-organisasi" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Popup>
          <Card className="transition-all duration-300 hover:scale-105 bg-transparent ring-0! text-center">
            <CardHeader>
              <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
                <UserGroup className="w-10 h-10" />
              </div>
              <CardTitle className="text-lg font-bold">
                BPH (Badan Pengurus Harian)
              </CardTitle>
              <CardDescription className="text-sm">
                Pemegang kendali utama organisasi yang bertanggung jawab atas
                arah kebijakan, pengambilan keputusan tertinggi, serta
                pengawasan seluruh kinerja departemen demi menjaga keselarasan
                visi dan misi Forum OSIS.
              </CardDescription>
            </CardHeader>
          </Card>
        </Popup>
        <Popup>
          <Card className="transition-all duration-300 hover:scale-105 bg-transparent ring-0! text-center">
            <CardHeader>
              <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
                <Mosque className="w-10 h-10" />
              </div>
              <CardTitle className="text-lg font-bold">
                Keagamaan dan Budi Pekerti
              </CardTitle>
              <CardDescription className="text-sm">
                Penggerak nilai spiritual dan moral pelajar yang fokus
                menyelenggarakan program peningkatan akhlak, penguatan iman,
                serta penanaman sikap toleransi antarumat beragama di lingkungan
                generasi muda.
              </CardDescription>
            </CardHeader>
          </Card>
        </Popup>
        <Popup>
          <Card className="transition-all duration-300 hover:scale-105 bg-transparent ring-0! text-center">
            <CardHeader>
              <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
                <Computer className="w-10 h-10" />
              </div>
              <CardTitle className="text-lg font-bold">
                Hubungan Masyarakat & Kominfo
              </CardTitle>
              <CardDescription className="text-sm">
                Jembatan komunikasi organisasi yang bertugas membangun relasi
                strategis dengan pihak internal maupun eksternal, sekaligus
                mengelola publikasi, penyebaran informasi, dan dokumentasi
                seluruh kegiatan forum.
              </CardDescription>
            </CardHeader>
          </Card>
        </Popup>
        <Popup>
          <Card className="transition-all duration-300 hover:scale-105 bg-transparent ring-0! text-center">
            <CardHeader>
              <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
                <TicTacToe className="w-10 h-10" />
              </div>
              <CardTitle className="text-lg font-bold">
                Kajian Strategis
              </CardTitle>
              <CardDescription className="text-sm">
                Menyusun & mengkaji strategi program kerja forum OSIS daerah
                kedepannya serta merumuskan rekomendasi atau sikap resmi forum
                OSIS.
              </CardDescription>
            </CardHeader>
          </Card>
        </Popup>
        <Popup>
          <Card className="transition-all duration-300 hover:scale-105 bg-transparent ring-0! text-center">
            <CardHeader>
              <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
                <Signature className="w-10 h-10" />
              </div>
              <CardTitle className="text-lg font-bold">
                Organisasi & Kelembagaan
              </CardTitle>
              <CardDescription className="text-sm">
                Jantung tata kelola internal yang bertanggung jawab atas
                ketertiban administrasi, manajemen surat-menyurat, dan
                pengarsipan dokumen resmi di bawah koordinasi langsung
                Sekretaris Umum.
              </CardDescription>
            </CardHeader>
          </Card>
        </Popup>
        <Popup>
          <Card className="transition-all duration-300 hover:scale-105 bg-transparent ring-0! text-center">
            <CardHeader>
              <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
                <User2 className="w-10 h-10" />
              </div>
              <CardTitle className="text-lg font-bold">
                PSDM (Pengembangan Sumber Daya Manusia)
              </CardTitle>
              <CardDescription className="text-sm">
                Eksekutor peningkatan kapasitas yang bertugas menjalankan kajian
                dari Departemen Kajian Strategis melalui program pengembangan
                kompetensi, kepemimpinan, karakter, dan solidaritas
                antar-pengurus.
              </CardDescription>
            </CardHeader>
          </Card>
        </Popup>
      </div>
    </section>
  );
}
