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
      "https://www.advantage-cars.cz/media/cars/2036/5842387f556d81e15842.jpg",
    secondImage:
      "https://www.advantage-cars.cz/media/cars/2036/f8f14e5b3dc15df4f8f1.jpg",
    title: "Lamborghini Urus",
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

const MostRented = (props: Props) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {cars.map((car) => (
        <Link
          to={`car/${car.id}`}
          key={car.id}
          className={`relative ${i18n.language === "ar" ? "text-right" : "text-left"} overflow-hidden border border-gray-200 group`}
        >
          <div className="relative overflow-hidden">
            {/* First Image */}
            <img
              src={car.image}
              alt={car.title}
              width={400}
              height={300}
              className="w-full object-cover transition duration-[.8s] ease-in-out"
            />
            {/* Second Image */}
            <img
              src={car.secondImage}
              alt={`${car.title} second`}
              width={400}
              height={300}
              className="absolute inset-0 w-full h-full object-cover opacity-0 transition duration-[.8s] ease-in-out group-hover:opacity-100"
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-900">{car.title}</h2>
            <p className="text-sm text-gray-600 mt-1">
              {car.year} / {car.mileage}
            </p>
          </div>
          <div className="absolute bottom-0 right-0">
            <button className="p-4 w-full text-sm text-white bg-red-500 hover:bg-red-600 py-2">
              {"->"}
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MostRented;
