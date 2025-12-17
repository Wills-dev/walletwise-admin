import { useQuery } from "@tanstack/react-query";

import { useTableState } from "./useTableState";
import { getReferrals } from "../api/referrals";

export const useGetUsersReferrals = () => {
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
    selectedDateFilterValue,
    setSelectedDateFilterValue,
  } = useTableState();

  const { data, isPending, isLoading, isError, error } = useQuery({
    queryKey: [
      "referrals",
      submittedQuery,
      limit,
      currentPage,
      selectedDateFilterValue,
    ],
    queryFn: () =>
      getReferrals({
        currentPage,
        limit,
        search: submittedQuery,
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
    setSelectedDateFilterValue,
  };
};
