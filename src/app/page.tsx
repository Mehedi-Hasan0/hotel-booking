import AllHotel from "@/components/allHotel/AllHotel";
import TopRatedHomes from "@/components/topRatedHomes/TopRatedHomes";

export default function Home() {
  return (
    <main className="main-container mt-9 sm:mt-8 md:mt-10 lg:mt-7 pb-8 lg:pb-20">
      <TopRatedHomes />
      <AllHotel />
    </main>
  );
}
