import { RxCalendar } from "react-icons/rx";
import DatePicker from "./DatePicker";

export default function SearchWithDate() {
  return (
    <div className="w-full h-14 relative">
      <label
        // htmlFor="places"
        className="w-full h-[54px] lg:h-14 bg-white rounded-md flex items-center gap-2 pl-4 lg:pl-2"
      >
        {/* icon */}
        <RxCalendar
          size={28}
          className="text-secondary-foreground cursor-pointer w-5 h-5 lg:w-6 lg:h-6"
        />
        <DatePicker />
      </label>
      {/* search place optionns
      <div className="absolute top-16 w-[400px] h-[200px] bg-white rounded-md border border-gray-400"></div> */}
    </div>
  );
}
