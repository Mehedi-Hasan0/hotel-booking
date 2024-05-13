import { Skeleton } from "../ui/skeleton";

export default function CarouselSkeleton() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <Skeleton className="w-full h-[280px] rounded-xl bg-zinc-200" />
        <Skeleton className="w-full h-[280px] rounded-xl bg-zinc-200 hidden sm:block" />
        <Skeleton className="w-full h-[280px] rounded-xl bg-zinc-200 hidden md:block" />
        <Skeleton className="w-full h-[280px] rounded-xl bg-zinc-200 hidden lg:block" />
      </div>
    </>
  );
}
