import CustomButton from "../components/CustomButton";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[url('/brown.jpg')] bg-cover bg-center h-screen flex justify-center items-center px-[10px] sm:px-[0] relative">
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Dark overlay */}
      <div className="flex-1 pt-48 flex flex-col justify-center items-center relative z-10">
        <h1 className="2xl:text-[62px] text-white xl:text[52px] lg:text[42px] sm:text-[34px] text-[24px] font-extrabold">
          Find, book, rent a car—quick and super easy!
        </h1>

        <p className="text-[27px] text-white font-light mt-5">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
    </div>
  );
};

export default Hero;
