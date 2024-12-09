import { Link } from "react-router-dom";
import { fuels, yearsOfProduction } from "../home/Home"; // Import fuels and yearsOfProduction correctly
import SearchBar from "@/components/Searchbar";
import CustomFilter from "@/components/CustomFilter";
import { ArrowLeft, ArrowRight, Calendar, Gauge, Info } from "lucide-react";
import { useTranslation } from "react-i18next";
import axiosInstance from "@/utils/AxiosInstance";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

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
  images: ImageType[];
};
function Gallery() {
  const [searchTerm, setSearchTerm] = useState("");
  const { t, i18n } = useTranslation();

  // const carData = [
  //   {
  //     id: 1,
  //     name: "Porsche Cayenne",
  //     priceWithVAT: "129,000",
  //     priceWithoutVAT: "107,500",
  //     mileage: "8,000",
  //     category: "Passenger",
  //     fuel: "Gasoline",
  //     specification: "Coupe/PDLS/Carbon/Panoramic/HUD/Ventilation",
  //     inOperationSince: "November 2023",
  //     body: "SUV",
  //     power: "354 hp (260 kW)",
  //     engineDisplacement: "3.0L",
  //     color: "Gray",
  //     image: "/cars/porsche.jpeg",
  //     gallery: [
  //       "/cars/porsche.jpeg",
  //       "/cars/1.jpg",
  //       "/cars/2.jpg",
  //       "/cars/3.jpg",
  //       "/cars/4.jpg",
  //       "/cars/5.jpg",
  //       "/cars/6.jpg",
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: "BMW X5",
  //     priceWithVAT: "106,000",
  //     priceWithoutVAT: "87,500",
  //     mileage: "15,500",
  //     category: "Passenger",
  //     fuel: "Diesel",
  //     specification: "XDrive/Leather/Heads-up Display/Automatic",
  //     inOperationSince: "May 2022",
  //     body: "SUV",
  //     power: "340 hp (250 kW)",
  //     engineDisplacement: "3.0L",
  //     color: "Black",
  //     image: "/cars/bmw.avif",
  //     gallery: [
  //       "/cars/bmw-x5.jpeg",
  //       "/cars/bmw-1.jpg",
  //       "/cars/bmw-2.jpg",
  //       "/cars/bmw-3.jpg",
  //       "/cars/bmw-4.jpg",
  //       "/cars/bmw-5.jpg",
  //     ],
  //   },
  //   {
  //     id: 3,
  //     name: "Audi Q7",
  //     priceWithVAT: "134,000",
  //     priceWithoutVAT: "108,000",
  //     mileage: "18,500",
  //     category: "Passenger",
  //     fuel: "Hybrid",
  //     specification: "Quattro/Advanced/LED Lights",
  //     inOperationSince: "March 2021",
  //     body: "SUV",
  //     power: "300 hp (220 kW)",
  //     engineDisplacement: "2.7L",
  //     color: "White",
  //     image: "/cars/audi.avif",
  //     gallery: [
  //       "/cars/audi-q7.jpeg",
  //       "/cars/audi-1.jpg",
  //       "/cars/audi-2.jpg",
  //       "/cars/audi-3.jpg",
  //       "/cars/audi-4.jpg",
  //     ],
  //   },
  //   {
  //     id: 4,
  //     name: "Mercedes-Benz GLE",
  //     priceWithVAT: "151,000",
  //     priceWithoutVAT: "125,000",
  //     mileage: "24,800",
  //     category: "Passenger",
  //     fuel: "Gasoline",
  //     specification: "4MATIC/Panoramic Sunroof/Leather",
  //     inOperationSince: "July 2020",
  //     body: "SUV",
  //     power: "367 hp (270 kW)",
  //     engineDisplacement: "3.5L",
  //     color: "Silver",
  //     image: "/cars/benz.avif",
  //     gallery: [
  //       "/cars/mercedes-gle.jpeg",
  //       "/cars/mercedes-1.jpg",
  //       "/cars/mercedes-2.jpg",
  //       "/cars/mercedes-3.jpg",
  //       "/cars/mercedes-4.jpg",
  //     ],
  //   },
  //   {
  //     id: 5,
  //     name: "Tesla Model X",
  //     priceWithVAT: "181,000",
  //     priceWithoutVAT: "150,800",
  //     mileage: "6,200",
  //     category: "Electric",
  //     fuel: "Electric",
  //     specification: "All-Wheel Drive/Autopilot/Zero Emissions",
  //     inOperationSince: "January 2023",
  //     body: "SUV",
  //     power: "670 hp (500 kW)",
  //     engineDisplacement: "Electric",
  //     color: "Blue",
  //     image: "/cars/tesla.avif",
  //     gallery: [
  //       "/cars/tesla-model-x.jpeg",
  //       "/cars/tesla-1.jpg",
  //       "/cars/tesla-2.jpg",
  //       "/cars/tesla-3.jpg",
  //       "/cars/tesla-4.jpg",
  //     ],
  //   },
  //   {
  //     id: 6,
  //     name: "Volvo XC90",
  //     priceWithVAT: "125,000",
  //     priceWithoutVAT: "103,500",
  //     mileage: "31,000",
  //     category: "Passenger",
  //     fuel: "Diesel",
  //     specification: "AWD/Leather Seats/Automatic",
  //     inOperationSince: "June 2019",
  //     body: "SUV",
  //     power: "326 hp (240 kW)",
  //     engineDisplacement: "2.2L",
  //     color: "Gray",
  //     image: "/cars/volvo.avif",
  //     gallery: [
  //       "/cars/volvo-xc90.jpeg",
  //       "/cars/volvo-1.jpg",
  //       "/cars/volvo-2.jpg",
  //       "/cars/volvo-3.jpg",
  //       "/cars/volvo-4.jpg",
  //     ],
  //   },
  //   {
  //     id: 7,
  //     name: "Land Rover Defender",
  //     priceWithVAT: "164,000",
  //     priceWithoutVAT: "135,800",
  //     mileage: "3,100",
  //     category: "Passenger",
  //     fuel: "Diesel",
  //     specification: "Terrain Response/Leather/Navigation",
  //     inOperationSince: "April 2023",
  //     body: "SUV",
  //     power: "544 hp (400 kW)",
  //     engineDisplacement: "3.0L",
  //     color: "Green",
  //     image: "/cars/land.avif",
  //     gallery: [
  //       "/cars/land-rover-defender.jpeg",
  //       "/cars/land-rover-1.jpg",
  //       "/cars/land-rover-2.jpg",
  //       "/cars/land-rover-3.jpg",
  //       "/cars/land-rover-4.jpg",
  //     ],
  //   },
  //   {
  //     id: 8,
  //     name: "Jaguar F-Pace",
  //     priceWithVAT: "117,000",
  //     priceWithoutVAT: "95,300",
  //     mileage: "12,400",
  //     category: "Passenger",
  //     fuel: "Gasoline",
  //     specification: "AWD/LED/Panoramic Roof",
  //     inOperationSince: "September 2022",
  //     body: "SUV",
  //     power: "408 hp (300 kW)",
  //     engineDisplacement: "2.0L",
  //     color: "Red",
  //     image: "/cars/bean.webp",
  //     gallery: [
  //       "/cars/jaguar-f-pace.jpeg",
  //       "/cars/jaguar-1.jpg",
  //       "/cars/jaguar-2.jpg",
  //       "/cars/jaguar-3.jpg",
  //       "/cars/jaguar-4.jpg",
  //     ],
  //   },
  // ];

  const fetchCars = async (): Promise<CarsItem[]> => {
    const response = await axiosInstance.get("/cars");
    return response.data;
  };

  const { data: cars } = useQuery({
    queryKey: ["cars"],
    queryFn: fetchCars,
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredCars = cars?.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto">
      <div className="items-center justify-between pt-32 flex">
        <SearchBar
          handleSearchChange={handleSearchChange}
          searchTerm={searchTerm}
        />
      </div>

      <section className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-6">
          {filteredCars?.map((car) => (
            <div
              dir={i18n.language === "ar" ? "rtl" : "ltr"}
              // variants={fadeIn}
              key={car.name}
              className="group"
            >
              <Link
                to={`/car/${car.id}`}
                className="block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={car.images[0].link}
                    alt={car.name}
                    className="w-full h-56 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900">
                    {t(car.name)}
                  </h2>
                  <p className="text-gray-600 mt-2">
                    {t(`${car.category}`)} / {t(`${car.fuel}`)} /{" "}
                    {t(`${car.mileage} km`)}
                  </p>
                  <p className="text-gray-500 mt-2">
                    {t(`Seats: ${car.seats}`)}
                  </p>
                  <div className="mt-4">
                    <p className="text-2xl font-semibold text-gray-900">
                      {car.price.toLocaleString()} {t(`IQD`)}
                    </p>
                    <p className="text-sm text-gray-500">
                      {t(car.specification)}
                    </p>
                  </div>
                  <div className="mt-6">
                    <span className="inline-flex items-center text-red-500 font-semibold">
                      {t("View Details")}
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Gallery;

const InfoLabel = ({ label, value }: any) => {
  const { t, i18n } = useTranslation();
  return (
    <div
      className={`flex ${
        i18n.language === "ar" ? "" : ""
      } items-center gap-2 justify-between`}
    >
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <span className="text-sm text-gray-600">{value}</span>
    </div>
  );
};
