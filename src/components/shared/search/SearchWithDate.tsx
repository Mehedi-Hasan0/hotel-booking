import { RxCalendar } from "react-icons/rx";
import DatePicker from "./DatePicker";
import { DateRange } from "react-day-picker";
import { ISearchWithDateProps } from "@/types";

const SearchWithDate: React.FC<ISearchWithDateProps> = ({ date, setDate }) => {
  return (
    <div className="w-full h-14 relative">
      <div className="w-full h-[54px] lg:h-14 bg-white rounded-md flex items-center gap-2 pl-4 lg:pl-2">
        {/* icon */}
        <RxCalendar
          size={28}
          className="text-secondary-foreground cursor-pointer w-5 h-5 lg:w-6 lg:h-6"
        />
        <DatePicker date={date} setDate={setDate} />
      </div>
    </div>
  );
};

export default SearchWithDate;
