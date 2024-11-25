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
    <div className="bg-[url('/brown.jpg')] bg-cover bg-center h-screen flex justify-center items-center px-[10px] sm:px-[0] relative">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      {/* Dark overlay */}
      <div className="flex-1 pt-36 flex flex-col justify-center items-center relative z-10">
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
          className="2xl:text-[62px] text-white xl:text[52px] lg:text[42px] sm:text-[34px] text-[24px] font-extrabold"
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
          className="text-[27px] text-white font-light mt-5"
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
