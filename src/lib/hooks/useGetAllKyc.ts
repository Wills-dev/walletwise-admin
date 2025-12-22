import { useQuery } from "@tanstack/react-query";

import { useTableState } from "./useTableState";
import { getAllKYC } from "../api/kyc";

export const useGetAllKyc = () => {
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
    tier,
    handleTierChange,
    status,
    handleStatusChange,
  } = useTableState();

  const { data, isPending, isLoading, isError, error } = useQuery({
    queryKey: ["kyc", submittedQuery, limit, currentPage, tier, status],
    queryFn: () =>
      getAllKYC({
        currentPage,
        limit,
        search: submittedQuery,
        status,
        tier,
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
    tier,
    handleTierChange,
    status,
    handleStatusChange,
  };
};
