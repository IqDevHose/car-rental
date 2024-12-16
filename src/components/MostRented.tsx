import axiosInstance from "@/utils/AxiosInstance";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

type Props = {};

const cars = [
  {
    id: 1,
    image:
      "https://www.advantage-cars.cz/media/cars/1156/d09211b72488947ed092.jpg",
    secondImage:
      "https://www.advantage-cars.cz/media/cars/1156/567d96f3d5959b83567d.jpg",
    title: "Mercedes-Benz AMG GT",
    year: 2024,
    mileage: "13 000 km",
    priceWithVAT: "2 969 000 CZK WITH VAT",
    priceWithoutVAT: "2 453 719 CZK WITHOUT VAT",
  },
  {
    id: 2,
    image:
      "https://www.advantage-cars.cz/media/cars/2041/9008f0c3fb5406319008.jpg",
    secondImage:
      "https://www.advantage-cars.cz/media/cars/2041/587015910e0d33415870.jpg",
    title: "Lamborghini Huracán",
    year: 2024,
    mileage: "13 000 km",
    priceWithVAT: "2 969 000 CZK WITH VAT",
    priceWithoutVAT: "2 453 719 CZK WITHOUT VAT",
  },
  {
    id: 3,
    image:
      "https://www.advantage-cars.cz/media/cars/1916/8bc836f7b634c76b8bc8.jpg",
    secondImage:
      "https://www.advantage-cars.cz/media/cars/1916/6480072d977cd3886480.jpg",
    title: "Alpina B5",
    year: 2024,
    mileage: "13 000 km",
    priceWithVAT: "2 969 000 CZK WITH VAT",
    priceWithoutVAT: "2 453 719 CZK WITHOUT VAT",
  },
];

type MostRentedCarsProps = {
  id: string;
  name: string;
  seats: number;
  category: string;
  fuel: string;
  mileage: number;
  specification: string;
  color: string;
  power: number;
  engineDisplacement: number;
  price: number;
  description: string;
  isAvailable: boolean;
  isMostRented: boolean;
  createdAt: string;
  updatedAt: string;
  modelId: string | null;
  images: Image[];
  Model: any | null;
  Variant: any[];
};

type Image = {
  id: string;
  link: string;
  carId: string;
};

const MostRented = (props: Props) => {
  const { t, i18n } = useTranslation();

  const fetchMostRentedCars = async (): Promise<MostRentedCarsProps> => {
    const response = await axiosInstance.get("/cars/most-rented");
    return response.data;
  };

  const { data: MostRentedCars } = useQuery({
    queryKey: ["most-rented"],
    queryFn: fetchMostRentedCars,
  });

  console.log(MostRentedCars);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {MostRentedCars?.map((car) => (
        <Link
          to={`car/${car.id}`}
          key={car.id}
          className={`relative ${
            i18n.language === "ar" ? "text-right" : "text-left"
          } overflow-hidden border border-gray-200 group`}
        >
          <div className="relative overflow-hidden">
            {/* First Image */}
            <img
              src={car.image}
              alt={car.name}
              width={400}
              height={300}
              className="w-full object-cover transition duration-[.8s] ease-in-out"
            />
            {/* Second Image */}
            <img
              src={car.secondImage}
              alt={`${car.name} second`}
              width={400}
              height={300}
              className="absolute inset-0 w-full h-full object-cover opacity-0 transition duration-[.8s] ease-in-out group-hover:opacity-100"
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-900">{car.name}</h2>
            <p className="text-sm text-gray-600 mt-1">
              {car.Model?.name} / {car.category}
            </p>
          </div>
          <div
            className={`absolute bottom-0 ${
              i18n.language === "ar" ? "left-0" : "right-0"
            }`}
          >
            <button
              dir={i18n.language === "ar" ? "rtl" : "ltr"}
              className="p-4 w-full text-sm text-white bg-red-500 hover:bg-red-600 py-2"
            >
              {"->"}
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MostRented;
