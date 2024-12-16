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
import OfferSection from "@/components/OfferSection";
import WheelLoader from "@/components/WheelLoader";

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

type BrandsItem = {
  name: string;
  image: string;
  Model: any | null;
};
type ImageType = {
  link: string;
  id: string;
};
type CarsItem = {
  Model: any | null;
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

  const { data: cars, isLoading } = useQuery({
    queryKey: ["cars"],
    queryFn: fetchCars,
  });

  const { data: logos, error } = useQuery({
    queryKey: ["car-brands"],
    queryFn: fetchBrands,
  });

  if (isLoading)
    return (
      <div className="w-[100vw] h-[100vh] bg-white z-[100] absolute top-0 bottom-0">
        <WheelLoader />
      </div>
    );
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
    <main className="overflow-hidden">
      <Hero />
      <OfferSection />
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
                            <Fuel size={"20"} />{" "}
                            <p className="text-[14px]">{t(`${car.fuel}`)}</p>
                          </div>

                          <div className="flex flex-col gap-y-1 items-center gap-x-4 mt-2">
                            <Milestone size={"20"} />{" "}
                            <p className="text-[14px]">
                              {t(`${car.Model?.name}`)}
                            </p>
                          </div>

                          <div className="flex flex-col gap-y-1 items-center gap-x-4 mt-2">
                            <GalleryHorizontal size={"20"} />{" "}
                            <p className="text-[14px]">{car.seats}</p>
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
      className={`flex ${
        i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
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
