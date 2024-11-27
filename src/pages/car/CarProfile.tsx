import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";

export const carData = {
  id: 1,
  name: "Porsche Cayenne",
  priceWithVAT: "190,000",
  priceWithoutVAT: "2 453 719 CZK",
  mileage: "13 000 km",
  category: "Osobní",
  fuel: "Benzín",
  specification: "Coupe/PDLS/Karbon/Pano/HUD/Ventilace",
  inOperationSince: "2023-11",
  body: "SUV",
  power: "260 kW / 354 koní",
  engineDisplacement: "2995 ccm",
  color: "Šedá",
  image: "/cars/porsche.jpeg", // Update this with a valid path
  gallery: [
    "/cars/porsche.jpeg",
    "/cars/1.jpg",
    "/cars/2.jpg",
    "/cars/3.jpg",
    "/cars/4.jpg",
    "/cars/5.jpg",
    "/cars/6.jpg",
  ],
};

export default function CarProfile() {
  const [selectedImage, setSelectedImage] = useState(carData.image);
  const handleImageClick = (img: string) => {
    console.log(img);
    setSelectedImage(img);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto pt-28 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="flex flex-col lg:flex-row">
            {/* Left: Image Gallery */}
            <div className="lg:w-2/3 p-8">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden group cursor-pointer">
                <motion.img
                  src={selectedImage}
                  alt={carData.name}
                  initial={{ scale: 1 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-6 grid grid-cols-4 gap-4">
                {carData.gallery.map((img, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ y: -2 }}
                    onClick={() => handleImageClick(img)}
                    className={`relative aspect-square rounded-xl overflow-hidden 
                    ${
                      selectedImage === img
                        ? "ring-2 ring-blue-500 ring-offset-2"
                        : "hover:ring-2 hover:ring-blue-300 hover:ring-offset-2"
                    } transition-all duration-200`}
                  >
                    <img
                      src={img}
                      alt={`Gallery ${index + 1}`}
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
                  {carData.name}
                </h1>

                <div className="mt-6 space-y-2">
                  <p className="text-3xl font-semibold text-blue-600">
                    {carData.priceWithVAT} IQD
                  </p>
                  <p className="text-gray-500 text-sm">
                    Without VAT: {carData.priceWithoutVAT}
                  </p>
                </div>

                <Link
                  to="https://wa.me/9647717504243?text=مرحبًا%2C%20أود%20حجز%20خدمة."
                  className="mt-8 flex items-center justify-center w-full gap-3 px-6 py-4 text-white bg-green-500 rounded-xl hover:bg-green-600 transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                >
                  <img src="/whatsapp.png" alt="WhatsApp" className="w-6 h-6" />
                  <span className="font-semibold">Book Now</span>
                </Link>

                <div className="mt-10">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">
                    Car Specifications
                  </h2>
                  <div className="space-y-4">
                    {Object.entries({
                      Category: carData.category,
                      Fuel: carData.fuel,
                      Mileage: carData.mileage,
                      Color: carData.color,
                      Power: carData.power,
                      "Engine Displacement": carData.engineDisplacement,
                    }).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between items-center py-3 border-b border-gray-200 group hover:bg-gray-50 rounded-lg px-3 transition-colors duration-200"
                      >
                        <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-200">
                          {key}
                        </span>
                        <span className="font-medium text-gray-900">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rental Terms */}
          <div className="p-8 bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Rental Terms & Conditions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Minimum Age Requirement",
                  description:
                    "Must be at least 21 years old. Additional fee may apply for drivers under 25 years.",
                },
                {
                  title: "Driver's License",
                  description:
                    "Valid license required. International customers must provide valid international permit if required.",
                },
                {
                  title: "Identification",
                  description:
                    "Valid government-issued photo ID required for verification.",
                },
                {
                  title: "Reservation Policy",
                  description:
                    "Confirmed reservation does not guarantee availability for late arrivals. Please inform of delays.",
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
