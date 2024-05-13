"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { peopleList } from "@/constant";
import useOutSideClick from "@/hooks/useOutsideClick";
import { ISearchPlaceWithPeople } from "@/types";
import { useRef, useState } from "react";
import { GoPeople } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { PiMinus, PiPlus } from "react-icons/pi";

interface ISearchPlaceWithPeopleProps {
  searchPlacesWithPeople: ISearchPlaceWithPeople;
  setSearchPlacesWithPeople: React.Dispatch<
    React.SetStateAction<ISearchPlaceWithPeople>
  >;
}

const SearchWithPeople: React.FC<ISearchPlaceWithPeopleProps> = ({
  searchPlacesWithPeople,
  setSearchPlacesWithPeople,
}) => {
  // STATE
  const [showPeopleOptions, setShowPeopleOptions] = useState<boolean>(false);
  //   REF
  const ref = useRef<HTMLDivElement>(null);
  //   on outside click hiding popular place options
  useOutSideClick(ref, () => {
    if (showPeopleOptions) {
      setShowPeopleOptions(false);
    }
  });

  const handleShowOptions = () => {
    setShowPeopleOptions(true);
  };

  const handleHideOptions = () => {
    setShowPeopleOptions(false);
  };

  const handlePeopleChange = (people: string, type?: string) => {
    setSearchPlacesWithPeople((prev) => {
      const updatedState = { ...prev };
      const key = people.toLowerCase() as keyof ISearchPlaceWithPeople;

      if (key === "pets") {
        updatedState[key] = !updatedState[key];
      } else if (typeof updatedState[key] === "number" && type === "inc") {
        updatedState[key] = updatedState[key] + 1;
      } else if (typeof updatedState[key] === "number" && type === "dec") {
        if ((key === "adults" || key === "rooms") && updatedState[key] > 1) {
          updatedState[key] = updatedState[key] - 1;
        } else if (key === "children" && updatedState[key] > 0) {
          updatedState[key] = updatedState[key] - 1;
        }
      }
      return updatedState;
    });
  };

  return (
    <div
      ref={ref}
      className="w-full lg:min-w-[336px] h-14 relative bg-white rounded-md"
    >
      <Button
        onClick={handleShowOptions}
        variant={"outline"}
        className="text-left border-none hover:bg-transparent text-sm font-medium text-secondary flex justify-between items-center gap-2 w-full h-full pl-4 lg:pl-2"
      >
        <div className="flex items-center gap-2">
          <GoPeople
            size={24}
            className="text-secondary-foreground cursor-pointer w-5 h-5 lg:w-6 lg:h-6"
          />
          {/* display current people */}
          <div className="flex-center gap-2">
            <span>{searchPlacesWithPeople.adults} adults</span> ·
            <span>{searchPlacesWithPeople.children} children</span> ·
            <span
              className={`${searchPlacesWithPeople.pets ? "inline" : "hidden"}`}
            >
              pets
            </span>
            <span
              className={`${searchPlacesWithPeople.pets ? "inline" : "hidden"}`}
            >
              {" "}
              ·{" "}
            </span>
            <span>{searchPlacesWithPeople.rooms} room</span>
          </div>
        </div>

        {/* arrow */}
        <span>
          <IoIosArrowDown
            size={28}
            className="text-secondary-foreground cursor-pointer w-4 h-4 lg:w-5 lg:h-5"
          />
        </span>
      </Button>
      {/* search with people options */}
      <div
        className={`absolute top-14 lg:right-0 lg:top-16 w-[320px] sm:w-[340px] bg-white search-card-shadow rounded-md border z-30 px-6 sm:px-8 ${
          showPeopleOptions ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-3 pt-8 sm:pt-9">
          {peopleList.map((list, idx) => (
            <div key={idx} className="flex-center gap-5">
              <p className="text-sm text-secondary font-medium">{list}</p>
              <div className="flex-center gap-2 border border-secondary-foreground rounded">
                <Button
                  onClick={() => handlePeopleChange(list, "dec")}
                  variant="outline"
                  className="increase-people-btn"
                >
                  <PiMinus size={24} className="text-primary-foreground" />
                </Button>
                <span className="w-8 h-8 flex items-center justify-center">
                  {
                    searchPlacesWithPeople[
                      list.toLocaleLowerCase() as keyof ISearchPlaceWithPeople
                    ]
                  }
                </span>
                <Button
                  onClick={() => handlePeopleChange(list, "inc")}
                  variant="outline"
                  className="increase-people-btn"
                >
                  <PiPlus size={24} className="text-primary-foreground" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <hr className="bg-zinc-200 my-4" />

        <div className="flex flex-col gap-3 sm:gap-5 pb-8 sm:pb-9">
          <label
            onClick={() => handlePeopleChange("pets")}
            htmlFor="pets"
            className="flex-center gap-4 text-sm text-secondary-foreground"
          >
            <p>Travelling with Pets?</p>
            <Switch id="pets" />
          </label>
          {/* btn */}
          <Button
            onClick={handleHideOptions}
            variant="outline"
            className="text-primary-foreground hover:text-primary-foreground border-primary-foreground hover:bg-[#edf4fc] w-full"
          >
            Done
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchWithPeople;
