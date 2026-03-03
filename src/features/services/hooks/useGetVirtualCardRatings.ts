import { useQuery } from "@tanstack/react-query";

import { useTableState } from "@/lib/hooks/useTableState";
import { getVirtualCardRatings } from "../api/virtualCard";

export const useGetVirtualCardRatings = () => {
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
    queryKey: ["virtual card rating", submittedQuery, limit, currentPage],
    queryFn: () =>
      getVirtualCardRatings({
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
