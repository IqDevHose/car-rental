import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const { t, i18n } = useTranslation();

  const handleScroll = () => {
    const nextSection = document.getElementById("discover");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fadeInUp = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className={`h-full w-full ${
            i18n.language === "ar" ? "scale-x-100" : "scale-x-[-1]"
          }`}
        >
          <img
            src="./ray.avif"
            alt="Background"
            className="h-full w-full object-cover"
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      </div>

      {/* Content Container */}
      <div className="relative h-full">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center">
          {/* Main Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-4xl text-center space-y-6"
          >
            {/* Decorative Element */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="inline-block px-4 py-2 text-xl md:text-3xl bg-primary-blue/20 rounded-full backdrop-blur-sm">
                <span className="text-sky-200 font-semibold">
                  {t("Middle East Car Rentals")}
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-4xl font-bold text-white leading-tight"
            >
              {t("Find, book, rent a car—quick and super easy!")}
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
            >
              {t(
                "Streamline your car rental experience with our effortless booking process."
              )}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            >
              <button
                onClick={handleScroll}
                className="px-8 py-4 bg-primary-blue text-white rounded-lg font-semibold hover:bg-primary-blue/90 transition-colors duration-300"
              >
                {t("Explore Cars")}
              </button>
              {/* <button className="px-8 py-4 bg-white/10 text-white rounded-lg font-semibold backdrop-blur-sm hover:bg-white/20 transition-colors duration-300">
                {t("Learn More")}
              </button> */}
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-white cursor-pointer"
              onClick={handleScroll}
            >
              <ChevronDown size={32} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
