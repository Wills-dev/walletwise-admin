import { useQuery } from "@tanstack/react-query";

import { useTableState } from "./useTableState";
import { getAllTransactions } from "../api/allTransactions";
import { useState } from "react";

export const useGetAllTransactions = () => {
  const [excludeTransfer, setExcludeTransfer] = useState(false);
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
      "all transactions",
      submittedQuery,
      limit,
      currentPage,
      selectedDateFilterValue,
      excludeTransfer,
    ],
    queryFn: () =>
      getAllTransactions({
        currentPage,
        limit,
        search: submittedQuery,
        filter,
        selectedDateFilterValue,
        exclude: excludeTransfer,
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
    excludeTransfer,
    setExcludeTransfer,
    setCurrentPage,
  };
};
