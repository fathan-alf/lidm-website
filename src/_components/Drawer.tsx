import { IoIosClose } from "react-icons/io";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Drawer = ({ isOpen, onClose, children }: DrawerProps) => {
  return (
    <div
      className={`fixed inset-0 z-50 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Drawer panel */}
      <div
        className={`absolute right-0 top-0 h-full w-full bg-white shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-end items-center">
          <button
            type="button"
            className="!p-4 inline-flex items-center justify-center bg-transparent !hover:bg-gray-100 !active:bg-gray-200 rounded-full focus:outline-none"
            onClick={onClose}
          >
            <IoIosClose className="w-10 h-10" />
            <span className="sr-only">Close</span>
          </button>
        </div>

        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Drawer;
