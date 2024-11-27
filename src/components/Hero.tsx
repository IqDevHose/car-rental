import CustomButton from "../components/CustomButton";
import { motion } from "framer-motion";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-screen flex justify-center items-center px-[10px] sm:px-[0] relative ">
      {/* Reversed Background Image */}
      <div className="absolute inset-0 bg-[url('/ray.avif')] bg-cover bg-center transform scale-x-[-1]"></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start md:justify-start mx-auto container relative z-10">
        <motion.h1
          initial={{
            y: 50,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          className="2xl:text-[50px] text-white xl:text[52px] lg:text[42px] sm:text-[34px] text-[24px] font-extrabold lg:w-[40rem] "
        >
          Find, book, rent a car—quick and super easy!
        </motion.h1>

        <motion.p
          initial={{
            y: 50,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 2,
          }}
          className="text-[14px] text-white font-light mt-5 lg:w-[20rem]"
        >
          Streamline your car rental experience with our effortless booking
          process.
        </motion.p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white mt-10"
          handleClick={handleScroll}
        />
      </div>
    </div>
  );
};

export default Hero;
