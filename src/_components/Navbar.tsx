const Navbar = () => {
  return (
    <header className="top !py-10">
      <div className="top__left">
        <span className="top__brand">Sudut Topeng Malangan</span>
      </div>
      <nav className="top__right">
        <div className="links">
          <a href="#kegiatan-pendahuluan" className="top__link">
            Kegiatan Pendahuluan
          </a>

          <a href="#kegiatan-inti" className="top__link">
            Kegiatan Inti
          </a>

          <a href="#kegiatan-penutup" className="top__link">
            Kegiatan Penutup
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
