import { useQuery } from "@tanstack/react-query";

import { useTableState } from "./useTableState";
import { getEarnings } from "../api/earnings";

export const useGetEarnings = () => {
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
    handleSwithTab,
    tab,
  } = useTableState();

  const { data, isPending, isLoading, isError, error } = useQuery({
    queryKey: ["earnings", limit, currentPage, tab, selectedDateFilterValue],
    queryFn: () =>
      getEarnings({
        currentPage,
        limit,
        selectedDateFilterValue,
        service: tab,
        search: null,
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
    handleSwithTab,
    tab,
  };
};
