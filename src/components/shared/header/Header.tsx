import Link from "next/link";
import { Button } from "../../ui/button";
import NavHeader from "./NavHeader";

export default function Header() {
  return (
    <div className=" bg-primary py-4">
      <header className="main-container">
        <NavHeader />
      </header>
    </div>
  );
}
