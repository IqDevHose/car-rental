import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Shield, Clock, BadgeCheck, Banknote } from "lucide-react";

const OfferSection = () => {
  const { t, i18n } = useTranslation();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  const offerItems = [
    {
      icon: <Shield className="w-12 h-12 text-primary-blue" />,
      title: "Insurance Coverage",
      description:
        "Comprehensive insurance for worry-free rentals with 24/7 support.",
    },
    {
      icon: <Clock className="w-12 h-12 text-primary-blue" />,
      title: "Flexible Rental Periods",
      description:
        "Choose from hourly, daily, weekly, or monthly rental options.",
    },
    {
      icon: <BadgeCheck className="w-12 h-12 text-primary-blue" />,
      title: "Quality Guaranteed",
      description:
        "All vehicles undergo thorough maintenance and quality checks.",
    },
    {
      icon: <Banknote className="w-12 h-12 text-primary-blue" />,
      title: "Best Price Guarantee",
      description: "We match competitors' prices for the best rental deals.",
    },
  ];

  return (
    <section className="py-16 bg-neutral-100">
      <motion.div
        className="padding-x max-width"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="mb-8">
          <SectionHeader
            number="04"
            title={t("What We Offer")}
            subTitle={t("Discover our premium services and benefits")}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerItems.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeIn}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-blue-50 rounded-full">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{t(item.title)}</h3>
                <p className="text-gray-600">{t(item.description)}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Promotional Banner */}
        <motion.div
          variants={fadeIn}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-primary-blue to-blue-600 rounded-xl p-8 text-white"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">
                {t("Special Discount for Long-term Rentals")}
              </h3>
              <p className="text-blue-100">
                {t("Get up to 25% off on monthly rentals. Limited time offer!")}
              </p>
            </div>
            <button className="bg-white text-primary-blue px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
              {t("Learn More")}
            </button>
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "1000+", label: "Happy Customers" },
            { value: "150+", label: "Premium Cars" },
            { value: "99%", label: "Satisfaction Rate" },
            { value: "24/7", label: "Customer Support" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeIn}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-primary-blue mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{t(stat.label)}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

// Keep the SectionHeader component for consistency
const SectionHeader = ({ number, title, subTitle }) => {
  const { t, i18n } = useTranslation();

  return (
    <div
      className={`flex ${
        i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
      } items-center space-x-4 border-b border-gray-300 pb-2`}
    >
      <span className="text-gray-400 text-2xl font-medium ml-2">{number}</span>
      <div>
        <h2 className="text-black text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">{subTitle}</p>
      </div>
    </div>
  );
};

export default OfferSection;
