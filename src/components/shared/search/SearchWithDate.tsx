import { IoBedOutline } from "react-icons/io5";

export default function SearchWithDate() {
  return (
    <div className="w-full h-14 relative">
      <label
        // htmlFor="places"
        className="w-full h-[54px] lg:h-14 bg-white rounded-md flex items-center gap-2 pl-4 lg:pl-2"
      >
        {/* icon */}
        <IoBedOutline
          size={28}
          className="text-secondary-foreground cursor-pointer w-6 h-6 lg:w-7 lg:h-7"
        />
        <input
          type="search"
          //   name="places"
          //   id="places"
          className="w-full outline-none rounded-md placeholder:text-sm placeholder:text-secondary placeholder:font-medium focus:placeholder:text-secondary-foreground"
          placeholder="Search Date"
        />
      </label>
      {/* search place optionns
      <div className="absolute top-16 w-[400px] h-[200px] bg-white rounded-md border border-gray-400"></div> */}
    </div>
  );
}
