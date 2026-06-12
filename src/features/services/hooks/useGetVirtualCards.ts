import { useQuery } from "@tanstack/react-query";

import { useTableState } from "@/lib/hooks/useTableState";
import { getVirtualCards } from "../api/virtualCard";

export const useGetVirtualCards = () => {
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
    status,
    filter,
    selectedDateFilterValue,
    setSelectedDateFilterValue,
    handleSortChange,
    transferType,
    handleSwitchTransferType,
    handleStatusChange,
    setCurrentPage,
  } = useTableState();

  const { data, isPending, isLoading, isError, error, refetch } = useQuery({
    queryKey: [
      submittedQuery,
      limit,
      currentPage,
      status,
      selectedDateFilterValue,
    ],
    queryFn: () =>
      getVirtualCards({
        currentPage,
        limit,
        search: submittedQuery,
        status,
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
    handleSortChange,
    setSelectedDateFilterValue,
    handleSwitchTransferType,
    transferType,
    handleStatusChange,
    setCurrentPage,
  };
};
