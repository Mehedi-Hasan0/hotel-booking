import Link from "next/link";
import HeaderLinks from "./HeaderLinks";

export default function NavHeader() {
  return (
    <div className="flex-center gap-8">
      <Link
        href={"/"}
        className="text-white text-[22px] sm:text-2xl font-bold tracking-tight"
      >
        Hotel.com
      </Link>
      <HeaderLinks />
    </div>
  );
}
