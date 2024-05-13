"use client";

import { useDataContext } from "@/context/DataContext";
import AllDataSkeleton from "../shared/AllDataSkeleton";
import CarouselCard from "../topRatedHomes/CarouselCard";
import Link from "next/link";

const HotelData = () => {
  const { isLoading, hotels } = useDataContext();

  if (isLoading) {
    return <AllDataSkeleton />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {hotels.map((hotel, idx) => (
        <div key={idx}>
          <Link href={`/hotels/${hotel.id}`}>
            <CarouselCard hotel={hotel} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HotelData;
