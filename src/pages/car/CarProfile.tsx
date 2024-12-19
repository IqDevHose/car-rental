import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import axiosInstance from "@/utils/AxiosInstance";
import { useQuery } from "@tanstack/react-query";
import WheelLoader from "@/components/WheelLoader";

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
  discountPrice: string;
  images: ImageType[];
  year: string;
  youtubeLink: string;
  Model: any | null;
};

export default function CarProfile() {
  const { t, i18n } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [showVideo, setShowVideo] = useState(false);

  // Handle image selection
  const handleImageClick = (img: string) => {
    setSelectedImage(img);
    setShowVideo(false);
  };

  // Handle video click
  const handleVideoClick = () => {
    setShowVideo(true);
    setSelectedImage("");
  };

  // Extract video ID from YouTube URL
  const getYouTubeEmbedUrl = (url: string | undefined) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url?.match(regExp);
    return match && match[2].length === 11
      ? `https://www.youtube.com/embed/${match[2]}`
      : undefined;
  };

  // Fetch car data based on ID
  const fetchCarProfile = async (): Promise<CarsItem> => {
    const response = await axiosInstance.get(`/cars/${id}`);
    return response.data;
  };

  // Query to fetch car profile
  const {
    data: carProfile,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["car-profile", id],
    queryFn: fetchCarProfile,
  });

  // Loading and error states
  if (isLoading)
    return (
      <div className="w-[100vw] h-[100vh] bg-white z-[100] absolute top-0 bottom-0">
        <WheelLoader />
      </div>
    );
  if (error) return <p>Error: {error.message}</p>;

  // Determine what to show in the main display area
  const mainDisplay = showVideo ? (
    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
      <iframe
        src={getYouTubeEmbedUrl(carProfile?.youtubeLink)}
        title="YouTube video player"
        className="absolute top-0 left-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  ) : (
    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden group cursor-pointer">
      <motion.img
        src={selectedImage || carProfile?.images[0].link}
        alt={carProfile?.name}
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="w-full h-full object-cover"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div
        dir={i18n.language === "ar" ? "rtl" : "ltr"}
        className="max-w-7xl mx-auto pt-28 px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="flex flex-col lg:flex-row">
            {/* Left: Image Gallery and Video */}
            <div className="lg:w-2/3 p-8">
              {mainDisplay}

              <div className="mt-6 grid grid-cols-4 gap-4">
                {carProfile?.images?.map((img) => (
                  <motion.button
                    key={img.id}
                    whileHover={{ y: -2 }}
                    onClick={() => handleImageClick(img.link)}
                    className={`relative aspect-square rounded-xl overflow-hidden 
                      ${
                        !showVideo && selectedImage === img.link
                          ? "ring-2 ring-blue-500 ring-offset-2"
                          : "hover:ring-2 hover:ring-blue-300 hover:ring-offset-2"
                      } transition-all duration-200`}
                  >
                    <img
                      src={img.link}
                      alt={t(`Gallery Image ${img.id}`)}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
                {carProfile?.youtubeLink && (
                  <motion.button
                    whileHover={{ y: -2 }}
                    onClick={handleVideoClick}
                    className={`relative aspect-square rounded-xl overflow-hidden 
                      ${
                        showVideo
                          ? "ring-2 ring-blue-500 ring-offset-2"
                          : "hover:ring-2 hover:ring-blue-300 hover:ring-offset-2"
                      } transition-all duration-200 bg-gray-100 flex items-center justify-center`}
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-red-600 rounded-full">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </motion.button>
                )}
              </div>
            </div>

            {/* Rest of the component remains the same */}
            {/* ... */}
          </div>
        </div>
      </div>
    </div>
  );
}
