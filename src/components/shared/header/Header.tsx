import NavHeader from "./NavHeader";
import Search from "../search/Search";

export default function Header() {
  return (
    <div className=" bg-primary py-4">
      <header className="main-container">
        <NavHeader />
        <Search />
      </header>
    </div>
  );
}
