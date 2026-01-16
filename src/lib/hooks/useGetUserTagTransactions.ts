import { useQuery } from "@tanstack/react-query";

import { useTableState } from "./useTableState";
import { getUsertagTransactions } from "../api/allTransactions";

export const useGetUserTagTransactions = () => {
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
    filter,
    handleSortChange,
    selectedDateFilterValue,
    setSelectedDateFilterValue,
    setCurrentPage,
  } = useTableState();

  const { data, isPending, isLoading, isError, error, refetch } = useQuery({
    queryKey: [
      "usertag transactions",
      submittedQuery,
      limit,
      currentPage,
      selectedDateFilterValue,
    ],
    queryFn: () =>
      getUsertagTransactions({
        currentPage,
        limit,
        search: submittedQuery,
        filter,
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
    refetch,
    filter,
    handleSortChange,
    setSelectedDateFilterValue,
    setCurrentPage,
  };
};
