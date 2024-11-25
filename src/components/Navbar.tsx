import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";

const links = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Gallery",
    link: "/",
  },
  {
    label: "Contact",
    link: "/contact",
  },
  {
    label: "About",
    link: "/about",
  },
];

const translations = {
  en: {
    Home: "Home",
    Gallery: "Gallery",
    Contact: "Contact",
    About: "About",
  },
  es: {
    Home: "Inicio",
    Gallery: "Galería",
    Contact: "Contacto",
    About: "Acerca",
  },
};

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  const getTranslation = (key) => {
    return translations[language][key] || key;
  };

  return (
    <header className="w-full bg-[#c28707] fixed z-40">
      <nav className="max-w-[1440px] mx-auto relative flex items-center sm:px-16 px-6 py-4 md:py-8 bg-transparent">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Left Links */}
        <ul className="hidden md:flex items-center gap-x-6">
          {links.slice(0, links.length / 2).map((link) => (
            <li
              className="py-1 px-2 text-white hover:text-gray-300 transition-colors"
              key={link.link + link.label}
            >
              <Link to={link.link}>{getTranslation(link.label)}</Link>
            </li>
          ))}
        </ul>

        {/* Centered Logo */}

        <Link
          to="/"
          className="rounded absolute left-1/2 -translate-x-1/2 flex justify-center items-center"
        >
          <img
            src="/logo.png"
            alt="logo"
            width={10}
            height={32}
            className="object-contain w-[80px] md:w-[140px]"
          />
        </Link>

        {/* Desktop Right Links */}
        <ul className="hidden md:flex items-center gap-x-6 ml-auto">
          {links.slice(links.length / 2).map((link) => (
            <li
              className="py-1 px-2 text-white hover:text-gray-300 transition-colors"
              key={link.link + link.label}
            >
              <Link to={link.link}>{getTranslation(link.label)}</Link>
            </li>
          ))}
          {/* Language Toggle Button */}
          <li>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
            >
              <Globe size={20} />
              <span className="uppercase">{language}</span>
            </button>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden fixed inset-0 top-[72px] bg-black/95 transition-transform duration-300
            ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <ul className="flex flex-col items-center pt-8 gap-y-6">
            {links.map((link) => (
              <li
                className="py-2 px-4 text-white text-lg hover:text-gray-300 transition-colors"
                key={link.link + link.label}
                onClick={() => setIsMenuOpen(false)}
              >
                <Link to={link.link}>{getTranslation(link.label)}</Link>
              </li>
            ))}
            {/* Mobile Language Toggle Button */}
            <li>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
              >
                <Globe size={20} />
                <span className="uppercase">{language}</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
