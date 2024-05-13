"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { VscAccount } from "react-icons/vsc";

export default function HeaderLinks() {
  const pathName = usePathname();

  return (
    <div>
      <div
        className={` items-center gap-3 ${
          pathName === "/sign-in" || pathName === "/register"
            ? "hidden"
            : "hidden sm:flex"
        }`}
      >
        <Link href={"/register"}>
          <Button className="bg-white hover:bg-[#dae9fa]" size="sm">
            Register
          </Button>
        </Link>

        <Link href={"/sign-in"}>
          <Button className="bg-white hover:bg-[#dae9fa]" size="sm">
            Sign in
          </Button>
        </Link>
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
