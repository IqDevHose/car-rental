import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import SearchBar from "@/components/Searchbar";
import CustomFilter from "@/components/CustomFilter";
import MostRented from "@/components/MostRented";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import i18n from "@/utils/i18n";
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/utils/AxiosInstance";
import { Fuel, GalleryHorizontal, Milestone } from "lucide-react";

// const queryClient = useQueryClient();

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

// const carData = {
//   id: 1,
//   name: "Porsche Cayenne",
//   priceWithVAT: "2 969 000 CZK",
//   priceWithoutVAT: "2 453 719 CZK",
//   mileage: "13 000 km",
//   category: "Osobní",
//   fuel: "Benzín",
//   specification: "Coupe/PDLS/Karbon/Pano/HUD/Ventilace",
//   inOperationSince: "2023-11",
//   body: "SUV",
//   power: "260 kW / 354 koní",
//   engineDisplacement: "2995 ccm",
//   color: "Šedá",
//   image: "/cars/porsche.jpeg", // Update this with a valid path
//   gallery: [
//     "/cars/porsche.jpeg",
//     "/cars/1.jpg",
//     "/cars/2.jpg",
//     "/cars/3.jpg",
//     "/cars/4.jpg",
//     "/cars/5.jpg",
//     "/cars/6.jpg",
//   ],
// };

// export const cars = [
//   {
//     id: 1,
//     image: "/cars/porsche.jpeg",
//     title: "PORSCHE CAYENNE",
//     year: 2023,
//     mileage: "13 000 km",
//     priceWithVAT: "2 969 000 CZK WITH VAT",
//     priceWithoutVAT: "2 453 719 CZK WITHOUT VAT",
//   },
//   {
//     id: 2,
//     image: "/cars/mercedes.jpeg",
//     title: "MERCEDES-BENZ TŘÍDY V",
//     year: 2018,
//     mileage: "116 500 km",
//     priceWithVAT: "2 300 000 CZK WITH VAT",
//     priceWithoutVAT: "1 900 826 CZK WITHOUT VAT",
//   },
//   {
//     id: 3,
//     image: "/cars/mercedes.jpeg",
//     title: "MERCEDES-BENZ TŘÍDY V",
//     year: 2018,
//     mileage: "116 500 km",
//     priceWithVAT: "2 300 000 CZK WITH VAT",
//     priceWithoutVAT: "1 900 826 CZK WITHOUT VAT",
//   },
//   {
//     id: 4,
//     image: "/cars/lamborghini.jpeg",
//     title: "LAMBORGHINI HURACÁN",
//     year: 2021,
//     mileage: "79 900 km",
//     priceWithVAT: "7 049 000 CZK WITH VAT",
//     priceWithoutVAT: "5 825 620 CZK WITHOUT VAT",
//   },
//   {
//     id: 5,
//     image: "/cars/porsche.jpeg",
//     title: "PORSCHE CAYENNE",
//     year: 2023,
//     mileage: "13 000 km",
//     priceWithVAT: "2 969 000 CZK WITH VAT",
//     priceWithoutVAT: "2 453 719 CZK WITHOUT VAT",
//   },
// ];

// const logos = [
//   {
//     id: 1,
//     name: "Cadillac",
//     link: "/cadillac",
//     img: "/car-logo/cadillac.png",
//   },
//   {
//     id: 2,
//     name: "Chevrolet",
//     link: "/chevrolet",
//     img: "/car-logo/Chevrolet.png",
//   },
//   {
//     id: 3,
//     name: "Dodge",
//     link: "/dodge",
//     img: "/car-logo/dodge.png",
//   },
//   {
//     id: 4,
//     name: "Land Rover",
//     link: "/land-rover",
//     img: "/car-logo/Land-Rover.png",
//   },
//   {
//     id: 5,
//     name: "Lexus",
//     link: "/lexus",
//     img: "/car-logo/Lexus.png",
//   },
//   {
//     id: 6,
//     name: "Nissan",
//     link: "/nissan",
//     img: "/car-logo/nissan.png",
//   },
// ];

// /cars/brands/all
type Model = {
  name: string;
  year: number;
};

type BrandsItem = {
  name: string;
  image: string;
  model?: Model[];
};
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

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const { t } = useTranslation();

  const fetchBrands = async (): Promise<BrandsItem[]> => {
    const response = await axiosInstance.get("/cars/brands/all");
    return response.data;
  };

  const fetchCars = async (): Promise<CarsItem[]> => {
    const response = await axiosInstance.get("/cars");
    return response.data;
  };

  const { data: cars } = useQuery({
    queryKey: ["cars"],
    queryFn: fetchCars,
  });

  const {
    data: logos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["car-brands"],
    queryFn: fetchBrands,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      const navbarHeight = 80;
      const offsetTop = nextSection.offsetTop - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredCars = cars?.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="overflow-hidden ">
      <Hero />

      <section className="py-16 bg-white">
        <motion.div
          className="padding-x max-width"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <SectionHeader number="01" title={t("Most Rented")} />
          <MostRented />
        </motion.div>
      </section>

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
              number="02"
              title={t("Explore Brands")}
              subTitle={t("Explore out cars you might like")}
            />
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={stagger}
          >
            {logos?.map((logo, index) => (
              <>
                {index < 6 && (
                  <motion.button
                    variants={fadeIn}
                    onClick={handleScroll}
                    key={logo.name} // Use a unique key
                    className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      src={logo.image} // Ensure 'image' is available in your data
                      alt={logo.name}
                      className="h-[100px] w-auto mx-auto object-contain"
                    />
                  </motion.button>
                )}
              </>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="py-16 bg-white" id="discover">
        <motion.div
          className="padding-x max-width"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="mb-4">
            <SectionHeader number="03" title={t("Our Cars")} />
          </div>
          <div className="flex items-center space-x-4">
            <SearchBar
              searchTerm={searchTerm}
              handleSearchChange={handleSearchChange}
            />
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10"
            variants={stagger}
            dir={i18n.language === "ar" ? "rtl" : "ltr"}
          >
            {filteredCars?.map((car) => (
              <motion.div
                dir={i18n.language === "ar" ? "rtl" : "ltr"}
                // variants={fadeIn}
                key={car.name}
                className="group"
              >
                <Link
                  to={`car/${car.id}`}
                  className="block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      src={car.images[0].link}
                      alt={car.name}
                      className="w-full h-56 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900">
                      {t(car.name)}
                    </h2>
                    <div className="mt-4">
                      <p className="text-2xl font-semibold text-gray-900">
                        {car.price.toLocaleString()} {t(`IQD`)}
                      </p>
                      <p className="text-sm text-gray-500">
                        {t(car.specification)}
                      </p>
                      <div className="mt-2">

                        <div className="bg-green-500 flex justify-around rounded-md py-2 px-4 text-white  gap-x-8">
                          <div className="flex flex-col gap-y-1 items-center gap-x-4 mt-2">
                            <Fuel size={"20"} /> <p className="text-[14px]">{t(`${car.fuel}`)}</p>
                          </div>

                          <div className="flex flex-col gap-y-1 items-center gap-x-4 mt-2">
                            <Milestone size={"20"} /> <p className="text-[14px]">{t(`${car.mileage} km`)}</p>
                          </div>

                          <div className="flex flex-col gap-y-1 items-center gap-x-4 mt-2">
                            <GalleryHorizontal size={"20"} /> <p className="text-[14px]">{car.seats}</p>
                            {/* {t(`Seats: ${car.seats}`)} */}
                          </div>

                        </div>
                      </div>
                    </div>

                    {/* <motion.div className="mt-6" whileHover={{ x: 5 }}>
                      <span className="inline-flex items-center text-red-500 font-semibold">
                        {t("View Details")}
                        <svg
                          className={`${i18n.language === "ar" && "rotate-180 mr-2"} w-5 h-5 ml-2`}
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
                    </motion.div> */}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}

type sectionType = {
  number: string;
  title: string;
  subTitle?: string;
};
const SectionHeader = ({ number, title, subTitle }: sectionType) => {
  const { t, i18n } = useTranslation();

  return (
    <div
      className={`flex ${i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
        } items-center space-x-4 border-b border-gray-300 pb-2 `}
    >
      <span className="text-gray-400 text-2xl font-medium ml-2">{number}</span>
      <div className="">
        <h2 className="text-black text-xl font-semibold">{title}</h2>

        <p className="text-gray-600">{subTitle}</p>
      </div>
    </div>
  );
};
