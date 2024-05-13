import { Button } from "@/components/ui/button";
import Link from "next/link";
import { VscAccount } from "react-icons/vsc";

export default function NavHeader() {
  return (
    <div className="flex-center gap-8">
      <Link
        href={"/"}
        className="text-white text-[22px] sm:text-2xl font-bold tracking-tight"
      >
        Hotel.com
      </Link>
      <div className="hidden sm:flex items-center gap-3">
        <Button className="bg-white hover:bg-[#dae9fa]" size="sm">
          Register
        </Button>

        <Button className="bg-white hover:bg-[#dae9fa]" size="sm">
          Sign in
        </Button>
      </div>
      {/* account icon for small device */}
      <div className="block rounded-sm hover:bg-[#57a6f431] p-2 transition-colors duration-300 ease-in-out sm:hidden">
        <Link href={"#"}>
          <VscAccount size={24} color="#f1f1f1" />
        </Link>
      </div>
    </div>
  );
}
