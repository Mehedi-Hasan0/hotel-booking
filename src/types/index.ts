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

export interface IReviews {
  name: string;
  country: string;
  good: string;
  bad: string;
}

export interface ICategories {
  staff: number;
  comfort: number;
  freeWifi: number;
  facilities: number;
  valueForMoney: number;
  cleanliness: number;
  location: number;
}

export interface IGuest {
  total: number;
  categories: ICategories;
  reviews: IReviews[];
}

export interface IHouseRules {
  checkIn: string;
  checkOut: string;
  cancellation: string;
  ageRestrictions: string;
  smoking: string;
  parties: string;
  pets: string;
}

export interface IBed {
  small: number;
  medium: number;
  large: number;
  extraLarge: number;
}

export interface IDetails {
  title: string;
  desc: string;
}

export interface IApartment {
  title: string;
  numberOfGuest: string;
  price: string;
  availableRoom: number;
  bed: IBed;
  details: IDetails;
}

export interface IHotel {
  id: number;
  image: string[];
  title: string;
  location: string;
  ratings: number;
  description: string;
  popularFacilities: string[];
  amenities: string[];
  guestReviews: IGuest;
  houseRules: IHouseRules;
  apartment: IApartment[];
}

export interface IDataContext {
  hotels: IHotel[];
  isLoading: boolean;
}
