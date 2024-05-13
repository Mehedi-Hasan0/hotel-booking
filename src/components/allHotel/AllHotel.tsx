import HotelData from "./HotelData";

const AllHotel = () => {
  return (
    <div className="mt-20 flex flex-col gap-4 lg:gap-7">
      <h3 className="text-lg md:text-xl lg:text-2xl text-secondary font-bold flex justify-center items-center">
        Feel at home wherever you go
      </h3>
      <HotelData />
    </div>
  );
};

export default AllHotel;
