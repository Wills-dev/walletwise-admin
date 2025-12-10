import { useQuery } from "@tanstack/react-query";

import { getServiceTransaction } from "../api";
import { useTableState } from "@/lib/hooks/useTableState";

export const useGetServiceTransactions = (
  service: string,
  transferType?: string
) => {
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
    setStatus,
    status,
    filter,
    handleSwithTab,
    tab,
    selectedDateFilterValue,
    setSelectedDateFilterValue,
    handleSortChange,
  } = useTableState();

  const { data, isPending, isLoading, isError, error, refetch } = useQuery({
    queryKey: [
      "services",
      submittedQuery,
      limit,
      currentPage,
      service,
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
    setStatus,
    filter,
    handleSwithTab,
    tab,
    handleSortChange,
    setSelectedDateFilterValue,
  };
};
