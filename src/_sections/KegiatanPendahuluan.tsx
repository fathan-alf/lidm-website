import Separator from "../_components/Separator";
import ReactPlayer from "react-player";

const KegiatanPendahuluan = () => {
  return (
    <div id="kegiatan-pendahuluan">
      <h2 className="overview !text-4xl !mb-10 font-medium">
        Kegiatan Pendahuluan
      </h2>

      {/* Project start */}
      <img src="./_images/sphere-01.jpg" alt="Slide alt text" />
      <p className="!mt-10">
        Halo anak anak hebat! Sebelum memulai pembelajaran kali ini, Mari kita
        berdoa bersama-sama sesuai dengan keyakinan kita masing-masing ya, agar
        kegiatan pembelajaran kita kali ini bisa berjalan dengan baik!
      </p>

      <Separator className="!max-w-[480px] !w-full !mx-auto" />
      <h2 className="uppercase !mt-10 slider-heading">
        MENYANYIKAN LAGU INDONESIA RAYA
      </h2>
      <div className="rounded-3xl overflow-hidden">
        <ReactPlayer
          src="https://www.youtube.com/watch?v=A0mUjA4BDVY"
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "1020px",
            aspectRatio: "16/9",
          }}
        />
      </div>
      <Separator className="!mt-10 !max-w-[480px] !w-full !mx-auto" />

      <h2 className="uppercase !mt-10 slider-heading">AYO KITA BERPIKIR!!</h2>
      <div className="!max-w-[480px] !w-full !mx-auto">
        <ol className="!text-xl !space-y-4">
          <li className="!list-item !list-decimal !list-outside">
            Siapa yang bisa menggambarkan titik, garis, dan siku-siku?
          </li>
          <li className="!list-item !list-decimal !list-outside">
            Siapa di sini yang suka menari atau pernah melihat tarian
            tradisional?
          </li>
          <li className="!list-item !list-decimal !list-outside">
            Ketika melihat orang menari, pernahkah kalian memperhatikan gerakan
            tubuhnya? Kira-kira gerakan tariannya bisa dikaitkan dengan
            matematika tidak ya?
          </li>
        </ol>
      </div>

      <Separator className="!mt-10 !max-w-[480px] !w-full !mx-auto" />
      <h2 className="uppercase !mt-10 slider-heading">Mengingat Kembali</h2>
      <img src="./_images/little-girl-pondering.jpg" alt="Image alt text" />
      <p className="!mt-10">
        Ingatkah kalian materi tentang sudut siku-siku pada pertemuan
        sebelumnya? Hari ini kita akan menghubungkannya dengan sesuatu yang
        unik: Tari Topeng Malangan.
      </p>
      <Separator className="!max-w-[480px] !w-full !mx-auto" />
      <h2 className="uppercase !mt-10 slider-heading">
        Apa Sih Topeng Malangan Itu?
      </h2>
      <p>
        Tari ini adalah tarian tradisional dari Malang yang menggunakan topeng
        khas. Selain indah, gerakannya juga bisa kita analisis secara matematis,
        terutama bentuk sudut yang terbentuk.
      </p>

      <Separator className="!max-w-[480px] !w-full !mx-auto" />
      <h2 className="uppercase !mt-10 slider-heading">Tujuan Pembelajaran</h2>
      <div className="!max-w-[480px] !w-full !mx-auto">
        <ol className="!text-xl !space-y-4">
          <li className="!list-item !list-decimal !list-outside">
            Melalui video tari Topeng Malangan yang ditayangkan melalui website,
            peserta didik dapat menentukan jenis-jenis sudut yang terbentuk dari
            gerakan tari dengan tepat. (C3)
          </li>
          <li className="!list-item !list-decimal !list-outside">
            Melalui kegiatan berdiskusi, peserta didik dapat menelaah
            jenis-jenis sudut yang terbentuk pada tubuh penari (siku, lutut,
            bahu) dan motif topeng secara tepat. (C4)
          </li>
          <li className="!list-item !list-decimal !list-outside">
            Melalui diskusi dan hasil pengukuran sudut menggunakan aplikasi
            Angle Meter, peserta didik dapat memprediksi jenis sudut yang
            ditemukan pada gerak tari dengan logis. (C5)
          </li>
          <li className="!list-item !list-decimal !list-outside">
            Melalui LKPD yang dibagikan guru peserta didik dapat mengkreasikan
            gambar hiasan mahkota topeng malangan dengan memperhatikan berbagai
            jenis sudut secara estetis dan tepat. (C6)
          </li>
          <li className="!list-item !list-decimal !list-outside">
            Melalui kolaborasi dalam perancangan topeng Malangan, peserta didik
            dapat memadukan nilai-nilai kerja sama dan tanggung jawab dalam
            kelompok secara konsisten. (A4)
          </li>
          <li className="!list-item !list-decimal !list-outside">
            Melalui LKPD pada platform Live Worksheet, peserta didik dapat
            menentukan jenis sudut dalam gerakan tari yang dipraktekkan dengan
            tepat. (P5)
          </li>
        </ol>
      </div>

      <Separator className="!mt-10 !max-w-[480px] !w-full !mx-auto" />
      <h2 className="uppercase !mt-10 slider-heading">
        Langkah-Langkah Pembelajaran
      </h2>
      <div className="!max-w-[480px] !w-full !mx-auto">
        <ol className="!text-xl !space-y-4">
          <li className="!list-item !list-decimal !list-outside">
            Mengamati Video Tari Topeng Malangan
          </li>
          <li className="!list-item !list-decimal !list-outside">
            Mengidentifikasi sudut yang terbentuk pada Topeng Malangan dan Gerak
            pada Tari Topeng Malangan
          </li>
          <li className="!list-item !list-decimal !list-outside">
            Mengamati bentuk topeng dan menemukan jenis sudut di dalamnya
          </li>
          <li className="!list-item !list-decimal !list-outside">
            Menggambar hiasan topeng malangan dengan memadukan unsur sudut
          </li>
          <li className="!list-item !list-decimal !list-outside">
            Diskusi dan mempresentasikan hasil
          </li>
          <li className="!list-item !list-decimal !list-outside">
            Pengerjaan soal evaluasi
          </li>
        </ol>
      </div>
    </div>
  );
};

export default KegiatanPendahuluan;
