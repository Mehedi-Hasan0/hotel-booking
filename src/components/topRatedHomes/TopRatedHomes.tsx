import TopRatedHomesCarousel from "./TopRatedHomesCarousel";
import dynamic from "next/dynamic";

// const TopRatedHomesCarousel = dynamic(import("./TopRatedHomesCarousel"), {
//   ssr: false,
// });

const TopRatedHomes = () => {
  return (
    <div className="mt-20 flex flex-col gap-4">
      <h3 className="text-lg md:text-xl lg:text-2xl text-secondary font-bold">
        Homes guests Love
      </h3>
      <TopRatedHomesCarousel />
    </div>
  );
};

export default TopRatedHomes;
