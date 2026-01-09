import { useQuery } from "@tanstack/react-query";

import { useTableState } from "@/lib/hooks/useTableState";
import { getDataPlans } from "../api";

export const useGetDataPlans = (exclude?: boolean) => {
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
  } = useTableState();

  const { data, isPending, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["data plans", submittedQuery, limit, currentPage, exclude],
    queryFn: () =>
      getDataPlans({
        currentPage,
        limit,
        search: submittedQuery,
        filter,
        exclude,
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
    filter,
  };
};
