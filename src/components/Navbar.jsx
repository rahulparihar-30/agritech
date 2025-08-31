import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // icons for menu toggle

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-green-200/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="font-oswald text-2xl font-bold text-green-700"
        >
          AgriTech
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-white font-medium">
          <a href="#home" className="hover:text-green-600">
            Home
          </a>
          <a href="#about" className="hover:text-green-600">
            About
          </a>
          <a href="#services" className="hover:text-green-600">
            Services
          </a>
          <a href="#contact" className="hover:text-green-600">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-green-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-green-200/90 backdrop-blur-md shadow-md px-6 py-4 space-y-4 text-green-900 font-medium">
          <a
            href="#home"
            className="block hover:text-green-700"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block hover:text-green-700"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#services"
            className="block hover:text-green-700"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#contact"
            className="block hover:text-green-700"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
