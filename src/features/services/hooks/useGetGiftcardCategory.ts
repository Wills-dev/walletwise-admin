import { useQuery } from "@tanstack/react-query";

import { getGifcardCategories } from "../api/giftcard";
import { useTableState } from "@/lib/hooks/useTableState";

export const useGetGiftcardCategory = () => {
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
    setCurrentPage,
  } = useTableState();

  const { data, isPending, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["giftcard categories", submittedQuery, limit, currentPage],
    queryFn: () =>
      getGifcardCategories({
        currentPage,
        limit,
        search: submittedQuery,
        filter,
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
    setCurrentPage,
  };
};
