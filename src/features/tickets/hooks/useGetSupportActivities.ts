import { useQuery } from "@tanstack/react-query";

import { useTicketStates } from "./useTicketStates";
import { getSupportActivities } from "../api";

export const useGetSupportActivities = () => {
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
    search,
    handleSearchChange,
    handleClear,
    submittedQuery,
    handleSearch,
    selectedDateFilterValue,
    setSelectedDateFilterValue,
  } = useTicketStates();

  const { data, isPending, isLoading, isError, error } = useQuery({
    queryKey: [
      "support activity logs",
      submittedQuery,
      limit,
      currentPage,
      selectedDateFilterValue,
    ],
    queryFn: () =>
      getSupportActivities({
        currentPage,
        limit,
        search: submittedQuery,
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
    search,
    handleSearchChange,
    data,
    isPending,
    isLoading,
    isError,
    error,
    handleSearch,
    handleClear,
    currentPage,
    limit,
    setSelectedDateFilterValue,
  };
};
