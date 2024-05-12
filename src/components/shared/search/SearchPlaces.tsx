"use client";

import { popularPlaces } from "@/data";
import useOutSideClick from "@/hooks/useOutsideClick";
import { ISearchPlaceOptions } from "@/types";
import { useRef, useState } from "react";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlinePlace } from "react-icons/md";

interface ISearchProps {
  popularPlaceOptions: ISearchPlaceOptions | undefined;
  setPopularPlaceOptions: React.Dispatch<
    React.SetStateAction<ISearchPlaceOptions | undefined>
  >;
}

const SearchPlaces: React.FC<ISearchProps> = ({
  popularPlaceOptions,
  setPopularPlaceOptions,
}) => {
  // STATE
  const [showPlaceOptions, setShowPlaceOptions] = useState<boolean>(false);
  //   REF
  const ref = useRef<HTMLDivElement>(null);
  //   on outside click hiding popular place options
  useOutSideClick(ref, () => {
    if (showPlaceOptions) {
      setShowPlaceOptions(false);
    }
  });

  const handleShowPopulaPlace = () => {
    setShowPlaceOptions(true);
  };

  const handlePlaceOptions = (place: ISearchPlaceOptions) => {
    setPopularPlaceOptions(place);
  };

  return (
    <div ref={ref} className="w-full h-14 relative">
      <label
        onClick={handleShowPopulaPlace}
        htmlFor="places"
        className="w-full h-[54px] lg:h-14 bg-white rounded-md flex items-center gap-2 pl-4 lg:pl-2 cursor-pointer"
      >
        {/* icon */}
        <IoBedOutline
          size={28}
          className="text-secondary-foreground cursor-pointer w-6 h-6 lg:w-7 lg:h-7"
        />
        <input
          type="search"
          name="places"
          id="places"
          value={
            popularPlaceOptions &&
            `${popularPlaceOptions?.place}, ${popularPlaceOptions?.country}`
          }
          className="w-full outline-none rounded-md text-sm text-secondary font-medium placeholder:text-sm placeholder:text-secondary placeholder:font-medium focus:placeholder:text-secondary-foreground hide-cross-btn"
          placeholder="Where are you going?"
        />
      </label>
      {/* search place optionns */}
      <div
        onClick={() => setShowPlaceOptions(false)}
        className={`absolute top-14 lg:top-16 w-[320px] sm:w-[400px] bg-white search-card-shadow rounded-md border z-30 ${
          showPlaceOptions ? "block" : "hidden"
        }`}
      >
        <p className="text-secondary text-sm font-bold px-4 pt-4 pb-2">
          Popular nearby destinations
        </p>
        {popularPlaces.map((place, idx) => (
          <div
            key={place.id}
            onClick={() => handlePlaceOptions(place)}
            className={`flex items-center gap-5 px-3 py-2 bg-transparent hover:bg-zinc-100 transition-colors duration-300 ease-in-out cursor-pointer ${
              idx !== 4 && "border-b border-zinc-200"
            }`}
          >
            <MdOutlinePlace size={28} className="text-secondary-foreground" />
            <div>
              <p className="text-sm text-secondary font-bold">{place.place}</p>
              <p className="text-xs text-secondary-foreground">
                {place.country}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPlaces;
