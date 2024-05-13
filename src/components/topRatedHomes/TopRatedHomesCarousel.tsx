"use client";

import "swiper/css";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useDataContext } from "@/context/DataContext";
import CarouselCard from "./CarouselCard";
import SwiperCore from "swiper";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

SwiperCore.use([Navigation]);

const TopRatedHomesCarousel = () => {
  const [swiperLoaded, setSwiperLoaded] = useState(false);
  const { isLoading, hotels } = useDataContext();
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);
  const [slidePerView, setSlidePerView] = useState(
    typeof window !== "undefined"
      ? window.innerWidth < 640
        ? 1
        : window.innerWidth < 1024
        ? 2
        : window.innerWidth < 1280
        ? 3
        : 4
      : 1
  );

  useEffect(() => {
    const carouselSettingsOnWindowWidth = () => {
      setSlidePerView(
        window.innerWidth < 640
          ? 1
          : window.innerWidth < 1024
          ? 2
          : window.innerWidth < 1280
          ? 3
          : 4
      );
    };

    window.addEventListener("resize", carouselSettingsOnWindowWidth);

    return () => {
      window.removeEventListener("resize", carouselSettingsOnWindowWidth);
    };
  }, []);

  useEffect(() => {
    import("swiper").then((SwiperModule) => {
      SwiperModule.default.use([Navigation]);
      setSwiperLoaded(true);
    });
  });

  const handlePrevSlide = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const handleSwiperInit = (swiper: SwiperCore) => {
    setSwiper(swiper);
  };

  if (!swiperLoaded && isLoading) {
    return null; // loading state
  }

  return (
    <div className="relative">
      {/* left slider btn */}
      <p
        onClick={handlePrevSlide}
        className="absolute top-[40%] left-0 md:-left-5 z-10 flex items-center justify-center w-7 h-7 lg:w-9 lg:h-9 rounded-full bg-white shadow-lg border cursor-pointer"
      >
        <MdKeyboardArrowLeft size={24} className="text-secondary w-5 h-5" />
      </p>
      <Swiper
        onSwiper={handleSwiperInit}
        slidesPerView={slidePerView}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper flex justify-center items-center"
      >
        {/* slider data */}
        {hotels.map((hotel, idx) => (
          <SwiperSlide key={idx}>
            <Link href={`/hotels/${hotel.id}`}>
              <CarouselCard hotel={hotel} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* right slider btn */}
      <p
        onClick={handleNextSlide}
        className="absolute top-[40%] right-0 md:-right-5 z-10 flex items-center justify-center w-7 h-7 lg:w-9 lg:h-9 rounded-full bg-white shadow-lg border cursor-pointer"
      >
        <MdKeyboardArrowRight size={24} className="text-secondary w-5 h-5" />
      </p>
    </div>
  );
};

export default TopRatedHomesCarousel;
