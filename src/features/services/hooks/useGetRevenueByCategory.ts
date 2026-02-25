import { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { getRevenueByCategory } from "../api";
import { serviceType } from "@/lib/types";

export const useGetRevenueByCategory = () => {
  const currentYear = new Date().getFullYear();
  const [selectedService, setSelectedService] =
    useState<serviceType>("airtime");
  const [selectedYear, setSelectedYear] = useState(currentYear.toString());
  const [selectedMonth, setSelectedMonth] = useState("");

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [
      "revenueByCategory",
      selectedService,
      selectedYear,
      selectedMonth,
    ],
    queryFn: () =>
      getRevenueByCategory({
        selectedService,
        selectedYear: selectedYear.toString(),
        selectedMonth,
      }),
    enabled: true,
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
