import { useQuery } from "@tanstack/react-query";

import { getServiceTransaction } from "../api";
import { useTableState } from "@/lib/hooks/useTableState";

export const useGetServiceTransactions = (service: string) => {
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
    handleSwithTab,
    tab,
    selectedDateFilterValue,
    setSelectedDateFilterValue,
    handleSortChange,
    transferType,
    handleSwitchTransferType,
    handleStatusChange,
  } = useTableState();

  const { data, isPending, isLoading, isError, error, refetch } = useQuery({
    queryKey: [
      service,
      submittedQuery,
      limit,
      currentPage,
      status,
      transferType,
    ],
    queryFn: () =>
      getServiceTransaction({
        currentPage,
        limit,
        search: submittedQuery,
        service,
        status,
        transferType,
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
    handleSwithTab,
    tab,
    handleSortChange,
    setSelectedDateFilterValue,
    handleSwitchTransferType,
    transferType,
    handleStatusChange,
  };
};
