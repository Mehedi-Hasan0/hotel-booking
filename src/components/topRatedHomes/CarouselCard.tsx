import { IHotel } from "@/types";
import Image from "next/image";
import { GoStarFill } from "react-icons/go";
import { SlLocationPin } from "react-icons/sl";

interface CarouselCardProps {
  hotel: IHotel;
}

const CarouselCard: React.FC<CarouselCardProps> = ({ hotel }) => {
  //   console.log(hotel, "hotel");

  return (
    <div className="flex flex-col gap-1 sm:gap-2 border border-zinc-300 rounded-lg h-[350px] sm:h-[380px] relative">
      <div className="group overflow-hidden rounded-tr-lg rounded-tl-lg">
        <Image
          src={hotel.image[0]}
          alt={hotel.title}
          width={700}
          height={700}
          className="group-hover:scale-110 transition-all duration-700 ease-in-out rounded-tr-lg rounded-tl-lg h-[200px] object-cover overflow-hidden"
        />
      </div>
      <div className="px-2 flex flex-col gap-1  mt-1">
        <div className="">{renderStars(hotel.ratings)}</div>

        <h3 className="text-secondary text-sm md:text-base font-bold leading-5 mt-1">
          {hotel.title}
        </h3>

        <div className="flex items-center gap-2">
          <div className="text-xs text-white font-medium p-1 bg-primary rounded-tr-md rounded-tl-md rounded-br-md">
            {hotel.guestReviews.total}
          </div>
          <p className="text-xs text-secondary-foreground">
            {hotel.guestReviews.total > 9 ? "Exceptional" : "Superb"}
          </p>
        </div>

        <div className="flex items-center gap-2 mt-1">
          <SlLocationPin
            size={18}
            className="text-secondary-foreground w-4 h-4"
          />
          <p className="text-xs text-secondary-foreground">{hotel.location}</p>
        </div>
      </div>

      <div className="absolute bottom-2 right-2 flex items-center gap-1">
        <span className="text-xs text-secondary-foreground">Starting from</span>
        <span className="text-base text-secondary font-bold">
          {hotel.apartment[0].price}
        </span>
      </div>
    </div>
  );
};

const renderStars = (rating: number): JSX.Element => {
  const starCount = Math.ceil(rating); // Round up the rating to determine the number of stars
  const stars = [];

  // Loop starCount times and push JSX elements to stars array
  for (let i = 0; i < starCount; i++) {
    stars.push(
      <span key={i} className="text-yellow-400">
        <GoStarFill size={12} className="text-[#ffb700] w-3 h-3" />
      </span>
    );
  }

  return <div className="flex items-center gap-1">{stars}</div>; // Return JSX containing the stars
};

export default CarouselCard;
