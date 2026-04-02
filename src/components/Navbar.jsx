import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      if (currentScrollY < 50) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }

      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full  z-50 transition-all duration-300 ease-in-out px-4 sm:px-8 flex items-center justify-between
        h-20 sm:h-24 ${isVisible ? "translate-y-0" : "-translate-y-full"} ${
          // isAtTop
          //   ? // ? "bg-[url('/public/bg.jpeg')] bg-cover bg-center"
          //     //   "bg-linear-to-br from-[#42C8F2] via-[#1A5B7A] to-[#051A2B]"
          //     "bg-[#06182e]"
          //   : "bg-transparent backdrop-blur-md border-b border-white/10"
          isAtTop
            ? "bg-transparent"
            : "bg-transparent backdrop-blur-md border-b border-[#ece1cf]/10 shadow-lg"
        }`}
    >
      <NavLink
        to="/"
        className="flex items-center justify-center h-10 sm:h-12 px-3 sm:px-4 rounded-[5px] hover:scale-105 transition-transform"
      >
        <img
          src="/logo.png"
          alt="Logo"
          width={360}
          className="h-full w-auto object-contain"
        />
      </NavLink>

      <div className="hidden md:flex gap-6 text-[13px] font-bold">
        {["Blogs", "Polls", "Build XI"].map((item) => (
          <NavLink
            to={`/${item}`}
            className="bg-transparent text-[#ece1cf] border-[#ece1cf]/20 hover:bg-[#e09225] hover:text-black hover:border-[#e09225] border rounded-[5px] py-3 px-6 uppercase transition-all duration-300 hover:-rotate-6  shadow-sm "
          >
            {item}
          </NavLink>
        ))}
      </div>

      <div className="hidden md:flex ">
        <NavLink
          to={"/match-hub"}
          className="bg-[#e09225] text-black font-bold px-5 py-3 rounded-[5px] uppercase shadow-lg hover:scale-105 transition-all"
        >
          Match Hub
        </NavLink>
      </div>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className=" md:hidden bg-[#e09225] text-black px-4  py-2 rounded-[5px] uppercase"
      >
        Menu
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#06182e] border-t border-black  flex flex-col items-center gap-4 md:hidden mb-4 py-4">
          {["Blogs", "Polls", "Build XI"].map((item) => (
            <NavLink
              to={`/${item}`}
              className="w-11/12 text-center bg-[#e09225] text-black py-3 uppercase rounded-[5px]"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </NavLink>
          ))}
          <NavLink
            to={"/match-hub"}
            className="w-11/12 text-center bg-[#e09225] text-black py-3 uppercase rounded-[5px]"
            onClick={() => setMenuOpen(false)}
          >
            Match Hub
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
