import BioSection from "./_components/BioSection";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import HeroSection from "./_sections/HeroSection";
import KegiatanInti from "./_sections/KegiatanInti";
import KegiatanPendahuluan from "./_sections/KegiatanPendahuluan";
import KegiatanPenutup from "./_sections/KegiatanPenutup";

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      <section>
        <div className="boxed">
          {/* Kegiatan Pendahuluan */}
          <KegiatanPendahuluan />

          <hr />

          {/* Kegiatan Inti */}
          <KegiatanInti />

          <hr />

          {/* Kegiatan Penutup */}
          <KegiatanPenutup />
        </div>
      </section>

      {/* Portfolio end */}
      {/* <section className="bg-alt">
        <BioSection />
      </section> */}

      <Footer />
    </>
  );
};

export default Home;
