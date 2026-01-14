import { useTableState } from "@/lib/hooks/useTableState";
import { useQuery } from "@tanstack/react-query";
import { getGiftcardRedemption } from "../api/giftcard";

export const useGetGiftCardRedemption = () => {
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
    handleStatusChange,
  } = useTableState();

  const { data, isPending, isLoading, isError, error, refetch } = useQuery({
    queryKey: [submittedQuery, limit, currentPage, status],
    queryFn: () =>
      getGiftcardRedemption({
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
    filter,
    handleSortChange,
    setSelectedDateFilterValue,
    handleStatusChange,
  };
};
