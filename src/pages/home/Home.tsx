import { Link } from "react-router-dom";
import { useState } from "react";
import Hero from "@/components/Hero";
import SearchBar from "@/components/Searchbar";
import CustomFilter from "@/components/CustomFilter";
import MostRented from "@/components/MostRented";

export const yearsOfProduction = [
  { title: "Year", value: "" },
  { title: "2015", value: "2015" },
  { title: "2016", value: "2016" },
  { title: "2017", value: "2017" },
  { title: "2018", value: "2018" },
  { title: "2019", value: "2019" },
  { title: "2020", value: "2020" },
  { title: "2021", value: "2021" },
  { title: "2022", value: "2022" },
  { title: "2023", value: "2023" },
];

export const fuels = [
  {
    title: "Fuel",
    value: "",
  },
  {
    title: "Gas",
    value: "Gas",
  },
  {
    title: "Electricity",
    value: "Electricity",
  },
];

const carData = {
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

const cars = [
  {
    id: 1,
    image: "/cars/porsche.jpeg",
    title: "PORSCHE CAYENNE",
    year: 2023,
    mileage: "13 000 km",
    priceWithVAT: "2 969 000 CZK WITH VAT",
    priceWithoutVAT: "2 453 719 CZK WITHOUT VAT",
  },
  {
    id: 2,
    image: "/cars/mercedes.jpeg",
    title: "MERCEDES-BENZ TŘÍDY V",
    year: 2018,
    mileage: "116 500 km",
    priceWithVAT: "2 300 000 CZK WITH VAT",
    priceWithoutVAT: "1 900 826 CZK WITHOUT VAT",
  },
  {
    id: 3,
    image: "/cars/mercedes.jpeg",
    title: "MERCEDES-BENZ TŘÍDY V",
    year: 2018,
    mileage: "116 500 km",
    priceWithVAT: "2 300 000 CZK WITH VAT",
    priceWithoutVAT: "1 900 826 CZK WITHOUT VAT",
  },
  {
    id: 4,
    image: "/cars/lamborghini.jpeg",
    title: "LAMBORGHINI HURACÁN",
    year: 2021,
    mileage: "79 900 km",
    priceWithVAT: "7 049 000 CZK WITH VAT",
    priceWithoutVAT: "5 825 620 CZK WITHOUT VAT",
  },
  {
    id: 5,
    image: "/cars/porsche.jpeg",
    title: "PORSCHE CAYENNE",
    year: 2023,
    mileage: "13 000 km",
    priceWithVAT: "2 969 000 CZK WITH VAT",
    priceWithoutVAT: "2 453 719 CZK WITHOUT VAT",
  },
];

const logos = [
  {
    id: 1,
    name: "Cadillac",
    link: "/cadillac",
    img: "/car-logo/cadillac.png",
  },
  {
    id: 2,
    name: "Chevrolet",
    link: "/chevrolet",
    img: "/car-logo/Chevrolet.png",
  },
  {
    id: 3,
    name: "Dodge",
    link: "/dodge",
    img: "/car-logo/dodge.png",
  },
  {
    id: 4,
    name: "Land Rover",
    link: "/land-rover",
    img: "/car-logo/Land-Rover.png",
  },
  {
    id: 5,
    name: "Lexus",
    link: "/lexus",
    img: "/car-logo/Lexus.png",
  },
  {
    id: 6,
    name: "Nissan",
    link: "/nissan",
    img: "/car-logo/nissan.png",
  },
];

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(carData.image);

  const handleImageClick = (img: string) => {
    console.log(img);
    setSelectedImage(img);
  };

  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="padding-x max-width">
        <div className="home__text-container pt-8">
          <h1 className="text-4xl font-extrabold">Most Rented</h1>
        </div>
        <MostRented />
      </div>

      <div className="padding-x max-width">
        <div className="home__text-container pt-8">
          <h1 className="text-4xl font-extrabold">Explore Brands</h1>
          <p className="">Explore out cars you might like</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {logos.map((logo) => (
            <button
              onClick={handleScroll}
              key={logo.id + Math.random() * 10}
              className="relative bg-white flex justify-center items-center py-4 shadow-md overflow-hidden border border-gray-200"
            >
              <img
                src={logo.img}
                alt={logo.name}
                width={200}
                height={200}
                className=" hover:scale-[1.2] h-[100px] transition py-2 ease-in-out cursor-pointer object-contain"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
            {cars.map((car) => (
              <Link
                to={`car/${car.id}`}
                key={car.id + Math.random() * 10}
                className="relative bg-white shadow-md overflow-hidden border border-gray-200"
              >
                <div className="overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.title}
                    width={400}
                    height={300}
                    className="w-full object-cover hover:scale-[1.2] transition duration-[1s] ease-in-out"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-bold text-gray-900">
                    {car.title}
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    {car.year} / {car.mileage}
                  </p>
                  <div className="mt-3">
                    <p className="text-xl font-semibold text-gray-900">
                      {car.priceWithVAT}
                    </p>
                    <p className="text-sm text-gray-500">
                      {car.priceWithoutVAT}
                    </p>
                  </div>
                </div>
                <div className=" absolute bottom-0 right-0">
                  <button className="p-4 w-full text-sm text-white bg-red-500 hover:bg-red-600 py-2">
                    {"->"}
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
