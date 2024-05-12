import { Button } from "@/components/ui/button";
import SearchPlaces from "./SearchPlaces";
import SearchWithDate from "./SearchWithDate";
import SearchWithPeople from "./SearchWithPeople";

export default function Search() {
  return (
    <div className="mt-10 sm:mt-12 md:mt-16 lg:mt-20 mb-52 sm:mb-52 lg:mb-16 relative">
      {/* welcome text */}
      <div className="text-white flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
          Find your next stay
        </h1>
        <p className="text-lg sm:text-[22px] md:text-2xl">
          Search low prices on hotels, homes and much more...
        </p>
      </div>
      {/* search fields */}
      <div className="absolute w-full h-56 lg:h-16 bg-yellow-500 rounded-lg -bottom-[264px] sm:-bottom-64 md:-bottom-[268px] lg:-bottom-28 z-20 flex flex-col lg:flex-row items-center justify-center gap-1 p-1">
        <SearchPlaces />
        <SearchWithDate />
        <SearchWithPeople />
        {/* search btn */}
        <Button className="w-full h-12 lg:w-fit lg:h-full px-6 rounded-md text-white bg-primary-foreground hover:bg-primary text-sm sm:text-base lg:text-lg">
          Search
        </Button>
      </div>
    </div>
  );
}
