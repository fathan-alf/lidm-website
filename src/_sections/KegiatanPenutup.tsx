import Separator from "../_components/Separator";

const KegiatanPenutup = () => {
  return (
    <div id="kegiatan-penutup">
      <h2 className="overview !text-4xl !mb-10 font-medium">
        Kegiatan Penutup
      </h2>
      <p>Bagaimana Pembelajaran hari ini? Menyenangkan tidak?</p>
      <Separator className="!mb-10 !max-w-[480px] !w-full !mx-auto" />
      <p>
        Apa saja kesulitan yang kalian alami saat mengidentifikasi atau mengukur
        sudut, baik di gerakan tari maupun pada topeng?
      </p>
      <Separator className="!mb-10 !max-w-[480px] !w-full !mx-auto" />
      <p>
        Apakah penggunaan Angle Meter dan website membantu kalian memahami
        konsep sudut dengan lebih baik?
      </p>
      <Separator className="!mb-10 !max-w-[480px] !w-full !mx-auto" />
      <p>
        Apa hal menarik yang kalian pelajari hari ini tentang hubungan
        matematika dan budaya Tari Topeng Malangan?
      </p>

      <Separator className="!max-w-[480px] !w-full !mx-auto" />
      <h2 className="uppercase !mt-10 slider-heading">
        Adakah yang bisa menyimpulkan kegiatan pembelajaran hari ini?
      </h2>
      <div className="!max-w-[480px] !w-full !mx-auto">
        <ol className="!text-xl !space-y-4">
          <li className="!list-item !list-decimal !list-outside">
            Kita belajar tentang berbagai macam jenis sudut
          </li>
          <li className="!list-item !list-decimal !list-outside">
            Ada sudut siku-siku, lancip, dan tumpul
          </li>
          <li className="!list-item !list-decimal !list-outside">
            Kita juga belajar tentang jenis-jenis sudut yang ada pada Tari
            Topeng Malangan
          </li>
        </ol>
      </div>
    </div>
  );
};

export default KegiatanPenutup;
