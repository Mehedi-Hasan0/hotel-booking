import { DateRange } from "react-day-picker";

export type ISearchPlaceOptions = {
  place: string;
  country: string;
};

export type IDate = {
  from: Date;
  to: Date;
};

export type ISearchPlaceWithPeople = {
  adults: number;
  children: number;
  rooms: number;
  pets?: boolean;
};

export interface ISearchWithDateProps {
  date: DateRange | undefined;
  setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
  className?: string;
}
