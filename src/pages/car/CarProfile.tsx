import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import axiosInstance from "@/utils/AxiosInstance";
import { useQuery } from "@tanstack/react-query";
import WheelLoader from "@/components/WheelLoader";

type ImageType = {
  link: string;
  id: string;
};

type CarsItem = {
  id: string;
  name: string;
  category: string;
  fuel: string;
  mileage: number;
  specification: string;
  color: string;
  power: number;
  engineDisplacement: number;
  isAvailable?: boolean;
  price: number;
  seats: number;
  description: string;
  discountPrice: string
  images: ImageType[];
  year: string;
  Model: any | null;
};

export default function CarProfile() {
  const { t, i18n } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState<string>("");

  // Handle image selection
  const handleImageClick = (img: string) => {
    setSelectedImage(img);
  };

  // Fetch car data based on ID
  const fetchCarProfile = async (): Promise<CarsItem> => {
    const response = await axiosInstance.get(`/cars/${id}`);
    return response.data;
  };

  // Query to fetch car profile
  const {
    data: carProfile,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["car-profile", id],
    queryFn: fetchCarProfile,
  });

  // Loading and error states
  if (isLoading)
    return (
      <div className="w-[100vw] h-[100vh] bg-white z-[100] absolute top-0 bottom-0">
        <WheelLoader />
      </div>
    );
  if (error) return <p>Error: {error.message}</p>;

  // Fallback to default image or empty
  const image = selectedImage || carProfile?.images[0].link;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div
        dir={i18n.language === "ar" ? "rtl" : "ltr"}
        className="max-w-7xl mx-auto pt-28 px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="flex flex-col lg:flex-row">
            {/* Left: Image Gallery */}
            <div className="lg:w-2/3 p-8">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden group cursor-pointer">
                <motion.img
                  src={image}
                  alt={carProfile?.name}
                  initial={{ scale: 1 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-6 grid grid-cols-4 gap-4">
                {carProfile?.images?.map((img) => (
                  <motion.button
                    key={img.id}
                    whileHover={{ y: -2 }}
                    onClick={() => handleImageClick(img.link)}
                    className={`relative aspect-square rounded-xl overflow-hidden 
                  ${image === img.link
                        ? "ring-2 ring-blue-500 ring-offset-2"
                        : "hover:ring-2 hover:ring-blue-300 hover:ring-offset-2"
                      } transition-all duration-200`}
                  >
                    <img
                      src={img.link}
                      alt={t(`Gallery Image ${img.id}`)}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Right: Car Information */}
            <div className="lg:w-1/3 p-8 bg-gradient-to-b from-gray-50 to-white">
              <div className="sticky top-8">
                <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
                  {carProfile?.name}
                </h1>

                <div className="mt-6 space-y-2">
                  <p className="text-3xl font-semibold text-blue-600 flex items-center gap-3">
                    {carProfile?.discountPrice ? (
                      <>
                        <span className="line-through text-gray-400">
                          {carProfile?.price.toLocaleString()}{" "}
                          {i18n.language === "ar" ? "د.ع" : "IQD"}
                        </span>
                        <span>
                          {carProfile?.discountPrice}{" "}
                          {i18n.language === "ar" ? "د.ع" : "IQD"}
                        </span>
                      </>
                    ) : (
                      <>
                        {carProfile?.price.toLocaleString()}{" "}
                        {i18n.language === "ar" ? "د.ع" : "IQD"}
                      </>
                    )}
                  </p>
                </div>

                <Link
                  to="https://wa.me/9647865559555?text=مرحبًا%2C%20أود%20حجز%20خدمة."
                  className="mt-8 flex items-center justify-center w-full gap-3 px-6 py-4 text-white bg-green-500 rounded-xl hover:bg-green-600 transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                >
                  <img src="/whatsapp.png" alt="WhatsApp" className="w-6 h-6" />
                  <span className="font-semibold">{t("Book Now")}</span>
                </Link>

                <div className="mt-10">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">
                    {t("Car Specifications")}
                  </h2>
                  <div className="space-y-4">
                    {Object.entries({
                      [t("Type")]: carProfile?.category,
                      [t("Fuel")]: carProfile?.fuel,
                      [t("Color")]: carProfile?.color,
                      [t("Year")]: carProfile?.year,
                      [t("Engine Displacement")]:
                        carProfile?.engineDisplacement,
                    }).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between items-center py-3 border-b border-gray-200 group hover:bg-gray-50 rounded-lg px-3 transition-colors duration-200"
                      >
                        <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-200">
                          {key}
                        </span>
                        {key === t("Color") ? (
                          <div className="flex items-center gap-2">
                            <div
                              className="w-6 h-6 rounded-full border border-gray-200 shadow-sm"
                              style={{
                                backgroundColor: (
                                  value as string
                                ).toLowerCase(),
                              }}
                            />
                          </div>
                        ) : (
                          <span className="font-medium text-gray-900">
                            {value}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rental Terms */}
          <div
            dir={i18n.language === "ar" ? "rtl" : "ltr"}
            className="p-8 bg-gradient-to-b from-white to-gray-50 border-t border-gray-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {t("Rental Terms & Conditions")}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: t("Minimum Age Requirement"),
                  description: t(
                    "Must be at least 21 years old. Additional fee may apply for drivers under 25 years."
                  ),
                },
                {
                  title: t("Driver's License"),
                  description: t(
                    "Valid license required. International customers must provide valid international permit if required."
                  ),
                },
                {
                  title: t("Identification"),
                  description: t(
                    "Valid government-issued photo ID required for verification."
                  ),
                },
                {
                  title: t("Reservation Policy"),
                  description: t(
                    "Confirmed reservation does not guarantee availability for late arrivals. Please inform of delays."
                  ),
                },
              ].map((term, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
                >
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                    {term.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {term.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
