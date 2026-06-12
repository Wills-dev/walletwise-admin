import { useQuery } from "@tanstack/react-query";

import { useTableState } from "@/lib/hooks/useTableState";
import { getVirtualCardsInfo } from "../api/virtualCard";

export const useVirtualCardsInfo = (id: string) => {
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
      id,
      selectedDateFilterValue,
    ],
    queryFn: () =>
      getVirtualCardsInfo({
        currentPage,
        limit,
        search: submittedQuery,
        status,
        filter,
        eventId: id,
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
