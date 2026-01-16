import { useQuery } from "@tanstack/react-query";

import { useTicketStates } from "./useTicketStates";
import { getAllTickets } from "../api";

export const useGetAllTickets = () => {
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
    setCurrentPage,
  } = useTicketStates();

  const { data, isPending, isLoading, isError, error } = useQuery({
    queryKey: ["all tickets", submittedQuery, limit, currentPage],
    queryFn: () =>
      getAllTickets({
        currentPage,
        limit,
        search: submittedQuery,
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
    setCurrentPage,
  };
};
