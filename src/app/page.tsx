import TopRatedHomes from "@/components/topRatedHomes/TopRatedHomes";

export default function Home() {
  console.log("server");
  return (
    <main className="main-container min-h-screen mt-9 sm:mt-8 md:mt-10 lg:mt-7">
      <TopRatedHomes />
    </main>
  );
}
