import { Link } from "react-router-dom";
import { cars, fuels, yearsOfProduction } from "../home/Home";
import SearchBar from "@/components/Searchbar";
import CustomFilter from "@/components/CustomFilter";

function Gallery() {
  return (
    <div>
      <div className="items-center justify-between mx-20 pt-32  flex">
        <SearchBar />

        <div className="home__filter-container ">
          <CustomFilter title="fuel" options={fuels} />
          <CustomFilter title="year" options={yearsOfProduction} />
        </div>
      </div>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
          {cars.map((car) => (
            <Link
              to={`/car/${car.id}`}
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
                <h2 className="text-lg font-bold text-gray-900">{car.title}</h2>
                <p className="text-sm text-gray-600 mt-1">
                  {car.year} / {car.mileage}
                </p>
                <div className="mt-3">
                  <p className="text-xl font-semibold text-gray-900">
                    {car.priceWithVAT}
                  </p>
                  <p className="text-sm text-gray-500">{car.priceWithoutVAT}</p>
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
  );
}

export default Gallery;
