import { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import { DateFilterValue } from "../types";
import { getRevenueProfit } from "../api";

export const useGetRevenueProfit = (type?: "profit" | "revenue") => {
  const [includeTransfer, setIncludeTransfer] = useState(false);
  const [selectedDateFilterValue, setSelectedDateFilterValue] =
    useState<DateFilterValue | null>(null);

  const { data, isLoading } = useQuery({
    queryKey: ["revenue-profit", type, includeTransfer],
    queryFn: () =>
      getRevenueProfit({
        includeTransfer,
        type,
        selectedDateFilterValue,
      }),
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return {
    includeTransfer,
    setIncludeTransfer,
    setSelectedDateFilterValue,
    data,
    isLoading,
  };
};
