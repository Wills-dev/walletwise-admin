import { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import { DateFilterValue } from "../types";
import { getRevenueProfitByCategory } from "../api";

export const useGetRevenueProfitByCategory = (type?: "profit" | "revenue") => {
  const [service, setService] = useState("");
  const [selectedDateFilterValue, setSelectedDateFilterValue] =
    useState<DateFilterValue | null>(null);

  const { data, isLoading } = useQuery({
    queryKey: ["revenue-profit", type, service],
    queryFn: () =>
      getRevenueProfitByCategory({
        service,
        type,
        selectedDateFilterValue,
      }),
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return {
    service,
    setService,
    setSelectedDateFilterValue,
    data,
    isLoading,
  };
};
