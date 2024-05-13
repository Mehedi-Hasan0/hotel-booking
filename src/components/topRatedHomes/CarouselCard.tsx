import { IHotel } from "@/types";
import Image from "next/image";

interface CarouselCardProps {
  hotel: IHotel;
}

const CarouselCard: React.FC<CarouselCardProps> = ({ hotel }) => {
  return (
    <div>
      <Image src={hotel.image[0]} alt={hotel.title} width={300} height={300} />
    </div>
  );
};

export default CarouselCard;
