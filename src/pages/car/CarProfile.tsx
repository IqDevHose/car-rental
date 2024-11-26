import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";

export const carData = {
  id: 1,
  name: "Porsche Cayenne",
  priceWithVAT: "2 969 000 CZK",
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
    <div className="pt-24 padding-x max-width">
      <div className="text-black min-h-screen py-8">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/3 flex flex-col">
            <img
              src={selectedImage}
              alt={carData.name}
              width={1000}
              height={600}
              className="w-full h-auto object-cover border border-gray-500"
            />

            {/* Gallery */}
            <div className="flex space-x-4 mt-4 overflow-x-scroll overflow-y-hidden">
              {carData.gallery.map((img, index) => (
                <button
                  key={index + Math.random() * 10}
                  onClick={() => handleImageClick(img)}
                >
                  <img
                    src={img}
                    alt={`Gallery image ${index + 1}`}
                    width={150}
                    height={150}
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Car Information */}
          <div className="lg:w-1/3 lg:pl-12 mt-8 lg:mt-0">
            <h1 className="text-4xl font-bold">{carData.name}</h1>
            <div className="flex justify-between mt-4">
              <p className="text-xl">With VAT: {carData.priceWithVAT}</p>
              <p className="text-xl">Without VAT: {carData.priceWithoutVAT}</p>
            </div>
            <Link
              to="https://wa.me/9647717504243?text=مرحبًا%2C%20أود%20حجز%20خدمة."
              className="transition bg-green-500 hover:text-black text-white ease-in-out cursor-pointer border flex items-center gap-x-4 hover:bg-transparent border-green-500 px-6 py-2 mt-6"
            >
              <img
                src={"/whatsapp.png"}
                alt={"Whatsapp Logo"}
                width={30}
                height={30}
                className="object-contain"
              />
              Book Now
            </Link>

            {/* Details Table */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold">Information About the Car</h2>
              <table className="w-full text-left mt-4">
                <tbody>
                  <tr>
                    <td className="border-b border-gray-700 py-2">Category:</td>
                    <td className="border-b border-gray-700 py-2">
                      {carData.category}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-700 py-2">Fuel:</td>
                    <td className="border-b border-gray-700 py-2">
                      {carData.fuel}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-700 py-2">Mileage:</td>
                    <td className="border-b border-gray-700 py-2">
                      {carData.mileage}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-700 py-2">
                      Specification:
                    </td>
                    <td className="border-b border-gray-700 py-2">
                      {carData.specification}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-700 py-2">Color:</td>
                    <td className="border-b border-gray-700 py-2">
                      {carData.color}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-700 py-2">Power:</td>
                    <td className="border-b border-gray-700 py-2">
                      {carData.power}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-700 py-2">
                      Engine Displacement:
                    </td>
                    <td className="border-b border-gray-700 py-2">
                      {carData.engineDisplacement}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h1 className="text-2xl font-bold mb-4 border-b border-b-gray-600">
            Rental Terms
          </h1>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Minimum Age Requirement:</strong> Renters must be at least
              21 years old. An additional fee may apply for drivers under 25
              years.
            </li>
            <li>
              <strong>Driver’s License:</strong> A valid driver’s license must
              be presented at the time of rental. International customers must
              provide a valid international driver’s permit if required.
            </li>
            <li>
              <strong>Identification:</strong> A valid government-issued photo
              ID is required for verification.
            </li>
            <li>
              <strong>Reservation Policy:</strong> A confirmed reservation does
              not guarantee availability if the renter arrives late. Please
              inform us in advance of delays.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
