import { useState } from "react";
import Drawer from "./Drawer";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="top !py-10">
        <div className="top__left">
          <span className="top__brand">Sudut Topeng Malangan</span>
        </div>
        <nav className="top__right">
          <div className="links">
            <a
              href="#kegiatan-pendahuluan"
              className="hidden sm:block top__link"
            >
              Kegiatan Pendahuluan
            </a>

            <a href="#kegiatan-inti" className="hidden sm:block top__link">
              Kegiatan Inti
            </a>

            <a href="#kegiatan-penutup" className="hidden sm:block top__link">
              Kegiatan Penutup
            </a>

            <button
              onClick={() => setOpen(true)}
              className="block sm:hidden rounded-full bg-white/10 px-2.5 py-1.5 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20"
            >
              <IoMenu className="w-7 h-7" />
            </button>
          </div>
        </nav>
      </header>

      <Drawer isOpen={open} onClose={() => setOpen(false)}>
        <ul className="space-y-2">
          <li className="!p-4 hover:bg-gray-100" onClick={() => setOpen(false)}>
            <a href="#kegiatan-pendahuluan">
              <h2 className="overview !text-3xl font-medium !text-center">
                Kegiatan Pendahuluan
              </h2>
            </a>
          </li>
          <li
            className="!p-4 hover:bg-gray-100 rounded"
            onClick={() => setOpen(false)}
          >
            <a href="#kegiatan-inti">
              <h2 className="overview !text-3xl font-medium !text-center">
                Kegiatan Inti
              </h2>
            </a>
          </li>
          <li
            className="!p-4 hover:bg-gray-100 rounded"
            onClick={() => setOpen(false)}
          >
            <a href="#kegiatan-penutup">
              <h2 className="overview !text-3xl font-medium !text-center">
                Kegiatan Penutup
              </h2>
            </a>
          </li>
        </ul>
      </Drawer>
    </>
  );
};

export default Navbar;
