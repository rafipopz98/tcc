import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setIsAtTop(currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  // 🎯 Dynamic styles based on page
  const navBgClass = isHome
    ? isAtTop
      ? "bg-transparent"
      : "bg-transparent backdrop-blur-md border-b border-[#ece1cf]/10 shadow-lg"
    : "bg-[#FFF5E5] border-b border-black/10 shadow-sm";

  const textColor = isHome ? "text-[#ece1cf]" : "text-black";

  const buttonStyle = isHome
    ? "bg-transparent text-[#ece1cf] border-[#ece1cf]/20"
    : "bg-transparent text-black border-black/20";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out px-4 sm:px-8 flex items-center justify-between
      h-20 sm:h-24 ${isVisible ? "translate-y-0" : "-translate-y-full"} ${navBgClass}`}
    >
      {/* Logo */}
      <NavLink
        to="/"
        className="flex items-center justify-center h-10 sm:h-12 px-3 sm:px-4 rounded-[5px] hover:scale-105 transition-transform"
      >
        <img
          src={isHome ? "/logo.png" : "/logo-dark.png"}
          alt="Logo"
          className="h-full w-auto object-contain"
        />
      </NavLink>

      {/* Desktop Links */}
      <div
        className={`hidden md:flex gap-6 text-[13px] font-bold ${textColor}`}
      >
        {["blogs", "polls", "about-us"].map((item) => (
          <NavLink
            key={item}
            to={`/${item}`}
            className={({ isActive }) =>
              `${buttonStyle} border rounded-[5px] py-3 px-6 uppercase transition-all duration-300 hover:-rotate-6 shadow-sm hover:bg-[#e09225] hover:text-black ${
                isActive ? "bg-[#e09225] text-black border-[#e09225]" : ""
              }`
            }
          >
            {item.replace("-", " ")}
          </NavLink>
        ))}
      </div>

      {/* Desktop CTA */}
      <div className="hidden md:flex">
        <NavLink
          to="/match-hub"
          className="bg-[#e09225] text-black font-bold px-5 py-3 rounded-[5px] uppercase shadow-lg hover:scale-105 transition-all"
        >
          Match Hub
        </NavLink>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden bg-[#e09225] text-black px-4 py-2 rounded-[5px] uppercase"
      >
        Menu
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#06182e] border-t border-black flex flex-col items-center gap-4 md:hidden py-4">
          {["blogs", "polls", "about-us"].map((item) => (
            <NavLink
              key={item}
              to={`/${item}`}
              className="w-11/12 text-center bg-[#e09225] text-black py-3 uppercase rounded-[5px]"
              onClick={() => setMenuOpen(false)}
            >
              {item.replace("-", " ")}
            </NavLink>
          ))}

          <NavLink
            to="/match-hub"
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
