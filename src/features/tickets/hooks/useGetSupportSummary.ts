import { useQuery } from "@tanstack/react-query";

import { useTicketStates } from "./useTicketStates";
import { getSupportSummary } from "../api";

export const useGetSupportSummary = () => {
  const {
    currentPage,
    limit,
    setLimit,
    nextPage,
    prevPage,
    goToFirstPage,
    goToLastPage,
    isFirstPage,
    isLastPage,
    selectedDateFilterValue,
    setSelectedDateFilterValue,
    setCurrentPage,
  } = useTicketStates();

  const { data, isPending, isLoading, isError, error } = useQuery({
    queryKey: ["support summary", limit, currentPage, selectedDateFilterValue],
    queryFn: () =>
      getSupportSummary({
        currentPage,
        limit,
        search: null,
        selectedDateFilterValue,
      }),
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return {
    setLimit,
    nextPage,
    prevPage,
    goToFirstPage,
    goToLastPage,
    isFirstPage,
    isLastPage,
    data,
    isPending,
    isLoading,
    isError,
    error,
    currentPage,
    limit,
    setSelectedDateFilterValue,
    setCurrentPage,
  };
};
