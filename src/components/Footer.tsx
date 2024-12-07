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
      { title: "Instagram", url: "/" },
      { title: "Facebook", url: "/" },
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

        <div className={`footer__links ${i18n.language === "ar" ? "text-right" : "text-left"}`}>
          {footerLinks.map((item) => (
            <div key={item.title} className="footer__link">
              <h3 className="font-bold text-white">{t(item.title)}</h3>{" "}
              <div className="flex flex-col gap-5">
                {item.links.map((link) => (
                  <Link
                    key={link.title}
                    to={link.url}
                    className="text-gray-200"
                  >
                    {t(link.title)}
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
