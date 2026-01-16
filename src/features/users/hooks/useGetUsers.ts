import { useQuery } from "@tanstack/react-query";

import { getUsers } from "../api";
import { useTableState } from "@/lib/hooks/useTableState";

export const useGetUsers = () => {
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
    status,
    handleStatusChange,
    handleSortChange,
    setCurrentPage,
  } = useTableState();

  const { data, isPending, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["users", submittedQuery, limit, currentPage, status],
    queryFn: () =>
      getUsers({
        currentPage,
        limit,
        search: submittedQuery,
        filter,
        status,
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
    handleStatusChange,
    handleSortChange,
    setCurrentPage,
  };
};
