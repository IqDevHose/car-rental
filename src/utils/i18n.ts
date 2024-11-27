// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi) // Load translations using HTTP
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Bind with React
  .init({
    fallbackLng: "en", // Default language
    debug: true, // Enable debug mode in development
    interpolation: {
      escapeValue: false, // React already escapes values to prevent XSS
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Path to translation files
    },
  });

export default i18n;
