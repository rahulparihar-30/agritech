import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e, target) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 1.2,
      scrollTo: target,
      ease: "power2.inOut",
    });
  };

  const handleMobileLinkClick = (e, target) => {
    handleScrollTo(e, target);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        menuOpen
          ? "bg-green-700/95 backdrop-blur-md shadow-md"
          : scrolled
          ? "bg-green-700/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleScrollTo(e, "#home")}
          className="font-oswald text-2xl font-bold text-white cursor-pointer"
        >
          AgriTech
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-white font-medium">
          {["home", "about", "services", "contact"].map((item, i) => (
            <a
              key={i}
              href={`#${item}`}
              onClick={(e) => handleScrollTo(e, `#${item}`)}
              className="relative inline-block transition-colors hover:text-green-200
                after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
                after:bg-green-200 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#F0FFF4]/90 backdrop-blur shadow-md px-6 py-4 space-y-4 text-[#2F855A] font-medium">
          {["home", "about", "services", "contact"].map((item, i) => (
            <>
            <a
              key={i}
              href={`#${item}`}
              className=" relative inline-block transition-colors hover:text-green-900
                after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
                after:bg-green-900 after:transition-all after:duration-300 hover:after:w-full"
              onClick={(e) => handleMobileLinkClick(e, `#${item}`)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
            <br/>
            </>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
