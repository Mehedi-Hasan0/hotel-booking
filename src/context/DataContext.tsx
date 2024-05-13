"use client";

import { IDataContext, IHotel } from "@/types";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

const INITIAL_STATE = {
  hotels: [],
  isLoading: true,
};

const DataContext = createContext<IDataContext>(INITIAL_STATE);

const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [hotels, setHotels] = useState<IHotel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const API = process.env.NEXT_PUBLIC_BACKEND_API;

  const fetchData = async () => {
    const data = await axios.get(`${API}`);

    if (data.status !== 200) {
      toast("Something went wrong! Try again");
      setIsLoading(false);
    } else {
      setHotels(data.data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const value = {
    hotels,
    isLoading,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;

export const useDataContext = () => useContext(DataContext);
