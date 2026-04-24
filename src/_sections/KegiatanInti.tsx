import Separator from "../_components/Separator";
import ReactPlayer from "react-player";

const KegiatanInti = () => {
  return (
    <div id="kegiatan-inti">
      <h2 className="overview !text-4xl !mb-10 font-medium">Kegiatan Inti</h2>
      <p>
        Malang memiliki warisan budaya yang sangat unik dan memukau? Salah
        satunya adalah Tari Topeng Malangan – sebuah tarian tradisional yang
        menggunakan topeng berwarna-warni dengan karakter yang beragam. Tarian
        ini tidak hanya memikat dari gerakannya, tetapi juga mengandung
        cerita-cerita legenda, nilai moral, dan keindahan bentuk seni rupa,
        termasuk bentuk-bentuk sudut yang bisa kita pelajari bersama. <br />
        <br />
        Yuk, kita jelajahi keunikan topeng Malangan dari bentuk, warna,
        ekspresi, hingga makna yang tersembunyi di balik setiap gerak tarinya!
      </p>
      <Separator className="!max-w-[480px] !w-full !mx-auto" />
      <h2 className="uppercase !mt-10 slider-heading">
        TAHAP 1: ORIENTASI MASALAH
      </h2>
      <img src="./_images/museum-jakarta.jpg" alt="Slide alt text" />
      <h2 className="uppercase !mt-10 slider-heading">Permasalahan</h2>
      <p>
        Sebuah museum di luar negeri ingin membuat pameran digital bertema
        Matematika dalam Budaya Indonesia. Mereka memilih Topeng Malangan,
        tetapi kesulitan menjelaskan bagaimana seni ini terhubung dengan
        matematika. Kalian sebagai tim kurator junior diminta membuat analisis
        dan pameran mini (hasil LKPD) yang menunjukkan Kode Geometri di Balik
        Gerakan dan Ukiran Topeng Malangan.
      </p>
      <h2 className="uppercase slider-heading">Cermatilah Video Berikut</h2>
      <div className="rounded-3xl overflow-hidden">
        <ReactPlayer
          src="https://www.youtube.com/watch?v=MUb9kWd0kVM"
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "1020px",
            aspectRatio: "16/9",
          }}
        />
      </div>
      <p className="!mt-10">
        Setelah kalian mengamati Video Tari Topeng Malangan di atas, bisakah
        kalian temukan apa saja atribut yang dipakai oleh penari topeng
        tersebut? Bisakah kalian mengaitkannya dengan konsep matematika?
      </p>
      <img src="./_images/karakter-topeng-malangan.png" alt="Slide alt text" />
      <h2 className="uppercase !mt-10 slider-heading">KOTAK INFO</h2>
      <p>
        Gambar diatas merupakan penjelasan singkat mengenai berbagai jenis
        topeng malangan beserta makna warna dalam karakter Topeng Malangan. Wahh
        ternyata makna dan karakter dalam Topeng Malangan sangat beragam dan
        bervariasi yaa.....
      </p>
      <h2 className="uppercase slider-heading">
        Perhatikan Topeng Malangan dan Gerakan Tari Topeng Malangan di bawah
        ini!
      </h2>
      <img src="./_images/topeng-malangan-1.png" alt="Slide alt text" />
      <img
        src="./_images/topeng-malangan-2.png"
        alt="Slide alt text"
        className="!mt-10"
      />
      <h2 className="uppercase !mt-10 slider-heading">
        Apakah terdapat pojok-pojok atau tikungan yang kalian lihat? Menurut
        Kalian apa sih hubungannya dengan matematika?
      </h2>
      <p>
        Pojok-pojok tersebut dinamakan dengan sudut. <br />
        <br /> Sudut adalah daerah yang terbentuk dari dua garis lurus yang
        berpotongan di satu titik. Untuk mengetahui letak sudut coba perhatikan
        gambar di bawah ini!
      </p>
      <img src="./_images/sudut-1.png" alt="Slide alt text" />
      <img
        src="./_images/sudut-2.png"
        alt="Slide alt text"
        className="!mt-10"
      />
      <h2 className="uppercase !mt-10 slider-heading">
        Sekarang Coba Perhatikan Salah Satu Jenis Topeng Malangan yang dibawa
        oleh Gurumu di Depan Kelas!
      </h2>
      <img src="./_images/sudut-3.png" alt="Slide alt text" />
      <h2 className="uppercase !mt-10 slider-heading">
        LALU APA SIH HUBUNGAN ANTARA SUDUT DENGAN TARI TOPENG MALANGAN?
      </h2>
      <div className="!max-w-[480px] !w-full !mx-auto">
        <ol className="!text-xl !space-y-4">
          <li className="!list-item !list-decimal !list-outside">
            Gerak Tari Topeng dan Sudut
            <p className="!my-2">
              Dalam tari Topeng Malangan, setiap gerakan penari memiliki pola
              arah tertentu, misalnya:
            </p>
            <ul className="!space-y-2">
              <li className="!list-item !list-disc !list-inside">
                Gerakan tangan membuka ke samping membentuk sudut lurus (180°)
              </li>
              <li className="!list-item !list-disc !list-inside">
                Gerakan menekuk siku atau lutut membentuk sudut lancip (0°-90°)
              </li>
              <li className="!list-item !list-disc !list-inside">
                Gerakan tubuh berputar membentuk sudut putar (360°)
              </li>
            </ul>
            <p className="!mt-2 !mb-0">
              Hal tersebut memiliki arti bahwa setiap posisi tubuh penari bisa
              dijelaskan dengan konsep sudut yang terdapat dalam matematika
            </p>
          </li>
          <li className="!list-item !list-decimal !list-outside">
            Arah Hadap Penari
            <ul className="!mt-2 !space-y-2">
              <li className="!list-item !list-disc !list-inside">
                Pada Tari Topeng Malangan, penari bisa berpindah arah: depan,
                samping, atau serong
              </li>
              <li className="!list-item !list-disc !list-inside">
                Pergeseran arah hadap ini menggambarkan sudut putar (misalnya
                berputar 90°, 180°, atau 270°)
              </li>
              <li className="!list-item !list-disc !list-inside">
                Dari sini, siswa bisa memahami bahwa sudut adalah ukuran besar
                putaran dari suatu titik
              </li>
            </ul>
          </li>
          <li className="!list-item !list-decimal !list-outside">
            Properti Tari dan Sudut
            <ul className="!mt-2 !space-y-2">
              <li className="!list-item !list-disc !list-inside">
                Properti seperti topeng atau selendang dalam gerakan penari
                kadang diarahkan ke kanan/ kiri/ atas/ bawah
              </li>
              <li className="!list-item !list-disc !list-inside">
                Perubahan arah selendang ini dapat di gambarkan sebagai garis
                yang membentuk sudut terhadap tubuh penari
              </li>
            </ul>
          </li>
        </ol>
      </div>
      <blockquote>
        <p>
          Scan QR Code pada lembar yang dibagikan guru untuk melihat berbagai
          jenis Topeng Malangan dalam bentuk 3D. Setelah itu, hubungkan bentuk
          atau posisi topeng dengan jenis sudut yang sudah kalian pelajari.
          Jangan lupa ikuti instruksi dari gurumu!
        </p>
      </blockquote>
      <Separator className="!max-w-[480px] !w-full !mx-auto" />
      <h2 className="uppercase !mt-10 slider-heading">
        TAHAP 2: PENGUMPULAN DATA DAN VERIFIKASI
      </h2>
      <p>
        Perhatikan instruksi yang diberikan gurumu untuk pengerjaan LKPD.
        Pastikan pada perangkatmu sudah terinstall aplikasi{" "}
        <span className="font-bold">angle meter</span>.
      </p>
      <Separator className="!max-w-[480px] !w-full !mx-auto" />
      <h2 className="uppercase !mt-10 slider-heading">
        TAHAP 3: PENGUMPULAN DATA MELALUI EKSPERIMEN
      </h2>
      <p>
        Perhatikan instruksi yang diberikan gurumu untuk pengerjaan LKPD. Pada
        tahap ini kalian akan mempraktikkan gerakan tari topeng malangan dan
        menganalisis sudutnya.
        <br />
        <br />
        LKPD yang akan dibagi guru:
      </p>
      <img src="./_images/sphere-01.jpg" alt="Slide alt text" />
      <Separator className="!max-w-[480px] !w-full !mx-auto" />
      <h2 className="uppercase !mt-10 slider-heading">
        TAHAP 4: PENGORGANISASIAN DAN FORMULASI EKSPLANASI
      </h2>
      <p>
        Sampaikan hasil pengerjaan LKPD yang kalian dapatkan di depan kelas.
      </p>
      <Separator className="!max-w-[480px] !w-full !mx-auto" />

      <h2 className="uppercase !mt-10 slider-heading">
        TAHAP 5: ANALISIS PROSES INKUIRI
      </h2>
      <p>
        Perhatikan masukan atau pertanyaan yang diberikan oleh gurumu maupun
        temanmu.
      </p>
      <p>
        <a
          href="https://onepagelove.com/sphere"
          className="cta-project"
          title="Visit custom link"
        >
          Link →
        </a>
      </p>
    </div>
  );
};

export default KegiatanInti;
