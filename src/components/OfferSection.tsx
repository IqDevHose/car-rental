import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const offers = [
  {
    id: 1,
    image: "/offers/best.webp",
    title: "Summer Special",
    description: "Get 20% off on luxury car rentals",
  },
  {
    id: 2,
    image: "/offers/last.webp",
    title: "Weekend Deal",
    description: "Free upgrade on weekend bookings",
  },
  {
    id: 3,
    image: "/offers/special.webp",
    title: "Long Term Rental",
    description: "Special rates for monthly rentals",
  },
];

const OfferSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <section className="py-8 bg-neutral-100">
      <motion.div
        className="padding-x max-width"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="relative">
          <Slider {...settings}>
            {offers.map((offer) => (
              <div key={offer.id} className="relative">
                <div className="aspect-[21/9] relative overflow-hidden rounded-xl">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
                    <h3 className="text-4xl font-bold mb-4">{offer.title}</h3>
                    <p className="text-xl">{offer.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Custom dots styling */}
          <style jsx>{`
            .slick-dots {
              bottom: 20px;
            }
            .slick-dots li button:before {
              color: white;
              font-size: 12px;
              opacity: 0.7;
            }
            .slick-dots li.slick-active button:before {
              color: white;
              opacity: 1;
            }
          `}</style>
        </div>
      </motion.div>
    </section>
  );
};

export default OfferSection;
