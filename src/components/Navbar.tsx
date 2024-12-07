import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [language, setLanguage] = useState("en");
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const links = [
    {
      label: t("Home"),
      link: "/",
    },
    {
      label: t("Gallery"),
      link: "/gallery",
    },
    {
      label: t("Contact"),
      link: "/contact",
    },
    {
      label: t("About"),
      link: "/about",
    },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHomePage = location.pathname === "/";

  return (
    <header
      className={`w-full fixed z-40 transition-colors duration-300 ${isHomePage
        ? isScrolled
          ? "backdrop-blur-lg bg-black/50"
          : "backdrop-blur-md bg-transparent"
        : "backdrop-blur-md bg-gray-700"
        }`}
    >
      <nav className="container mx-auto relative flex items-center py-4 md:py-8">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden p-2 ${isScrolled ? "text-gray-800" : "text-gray-100"
            }`}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Left Links */}
        <ul className="hidden md:flex items-center gap-x-6 font-bold">
          {links.slice(0, links.length / 2).map((link) => (
            <li
              className={`py-1 px-2 transition-colors ${isScrolled
                ? "text-gray-50 hover:text-gray-300"
                : "text-gray-100 hover:text-gray-300"
                }`}
              key={link.link + link.label}
            >
              <Link to={link.link}>{t(link.label)}</Link>
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
        <ul className="hidden md:flex items-center gap-x-6 ml-auto font-bold">
          {links.slice(links.length / 2).map((link) => (
            <li
              className={`py-1 px-2 transition-colors ${isScrolled
                ? "text-gray-50 hover:text-gray-300"
                : "text-gray-100 hover:text-gray-300"
                }`}
              key={link.link + link.label}
            >
              <Link to={link.link}>{t(link.label)}</Link>
            </li>
          ))}
          {/* Language Toggle Button */}
          <li>
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-2 transition-colors ${isScrolled
                ? "text-gray-50 hover:text-gray-300"
                : "text-gray-100 hover:text-gray-300"
                }`}
            >
              <Globe size={20} />
              <span className="uppercase">{i18n.language}</span>
            </button>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div
          className={`
          md:hidden absolute -inset-14 top-[72px]  h-screen bg-black/95 transition-transform duration-300
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
                <Link to={link.link}>{t(link.label)}</Link>
              </li>
            ))}
            {/* Mobile Language Toggle Button */}
            <li>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
              >
                <Globe size={20} />
                <span className="uppercase">{i18n.language}</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
