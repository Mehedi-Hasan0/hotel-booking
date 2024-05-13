"use client";

import "swiper/css";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useDataContext } from "@/context/DataContext";
import CarouselCard from "./CarouselCard";

const TopRatedHomesCarousel = () => {
  const [swiperLoaded, setSwiperLoaded] = useState(false);
  const { isLoading, hotels } = useDataContext();

  useEffect(() => {
    import("swiper").then((SwiperModule) => {
      SwiperModule.default.use([Navigation]);
      setSwiperLoaded(true);
    });
  });

  if (!swiperLoaded && isLoading) {
    return null; // loading state
  }

  return (
    <div>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper flex justify-center items-center"
      >
        <p>Mahedi</p>
        {hotels.map((hotel, idx) => (
          <SwiperSlide key={idx}>
            <CarouselCard hotel={hotel} />
          </SwiperSlide>
        ))}
        <p>Mahedi</p>
      </Swiper>
    </div>
  );
};

export default TopRatedHomesCarousel;
