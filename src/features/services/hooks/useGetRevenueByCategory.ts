import { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { getRevenueByCategory } from "../api";

export const useGetRevenueByCategory = () => {
  const [selectedService, setSelectedService] = useState("airtime");
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState("");

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["revenueByCategory"],
    queryFn: () =>
      getRevenueByCategory({
        selectedService,
        selectedYear: selectedYear.toString(),
        selectedMonth,
      }),
    enabled: false,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return {
    data,
    isLoading,
    selectedMonth,
    setSelectedMonth,
    selectedYear,
    setSelectedYear,
    selectedService,
    setSelectedService,
    isError,
    refetch,
  };
};
