import { Facebook, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Links",
    links: [
      { title: "Home", url: "/" },
      { title: "Gallery", url: "/gallery" },
      { title: "Contact", url: "/contact" },
      { title: "About", url: "/about" },
    ],
  },
  {
    title: "Socials",
    links: [
      {
        // title: "Instagram",
        icon: <Instagram size={24} className="text-gray-200" />,
        url: "https://www.instagram.com/middleast.iq?igsh=cmZ5OTZ3Nms1anI=",
      },
      {
        // title: "Facebook",
        icon: <Facebook size={24} className="text-gray-200" />,
        url: "https://www.facebook.com/100090548941415/",
      },
    ],
  },
];

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <footer className="flex flex-col text-black-100 bg-black mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <img
            src="/logo.png"
            alt="logo"
            width={150}
            height={18}
            className="object-contain"
          />
        </div>

        <div
          className={`footer__links ${
            i18n.language === "ar" ? "text-right" : "text-left"
          }`}
        >
          {footerLinks.map((item) => (
            <div key={item.title} className="footer__link">
              <h3 className="font-bold text-white">{t(item.title)}</h3>
              <div className="flex flex-col gap-5">
                {item.links.map((link, index) => (
                  <Link
                    key={index}
                    to={link.url}
                    className="text-gray-200 flex items-center"
                  >
                    {link.icon}
                    <span>{t(link.title)}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>{t("@2024 Middle East. All rights reserved")}</p>

        <div className="footer__copyrights-link">
          <Link to="/" className="text-gray-500">
            {t("Privacy Policy")}
          </Link>
          <Link to="/" className="text-gray-500">
            {t("Terms & Conditions")}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
