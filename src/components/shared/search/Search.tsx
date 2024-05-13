"use client";

import { Button } from "@/components/ui/button";
import SearchPlaces from "./SearchPlaces";
import SearchWithDate from "./SearchWithDate";
import SearchWithPeople from "./SearchWithPeople";
import { useState } from "react";
import { ISearchPlaceOptions, ISearchPlaceWithPeople } from "@/types";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";
import SearchHeader from "./SearchHeader";

export default function Search() {
  // STATE
  const [popularPlaceOptions, setPopularPlaceOptions] = useState<
    ISearchPlaceOptions | string
  >("");
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 1),
  });
  const [searchPlacesWithPeople, setSearchPlacesWithPeople] =
    useState<ISearchPlaceWithPeople>({
      adults: 1,
      children: 0,
      rooms: 1,
      pets: false,
    });

  return (
    <div className="mt-10 sm:mt-12 md:mt-16 lg:mt-20 mb-52 sm:mb-52 lg:mb-16 relative">
      <SearchHeader />
      {/* search fields */}
      <div className="absolute w-full h-56 lg:h-16 bg-yellow-500 rounded-lg -bottom-[264px] sm:-bottom-64 md:-bottom-[268px] lg:-bottom-28 z-20 flex flex-col lg:flex-row items-center justify-center gap-1 p-1">
        <SearchPlaces
          popularPlaceOptions={popularPlaceOptions}
          setPopularPlaceOptions={setPopularPlaceOptions}
        />
        <SearchWithDate date={date} setDate={setDate} />
        <SearchWithPeople
          searchPlacesWithPeople={searchPlacesWithPeople}
          setSearchPlacesWithPeople={setSearchPlacesWithPeople}
        />
        {/* search btn */}
        <Button className="w-full h-12 lg:w-fit lg:h-full px-6 rounded-md text-white bg-primary-foreground hover:bg-primary text-sm sm:text-base lg:text-lg">
          Search
        </Button>
      </div>
    </div>
  );
}
