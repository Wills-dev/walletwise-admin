import { useQuery } from "@tanstack/react-query";

import { getEventAttendees } from "../api/events";
import { useTableState } from "@/lib/hooks/useTableState";

export const useGetEventAttendees = (eventId: string) => {
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
  } = useTableState();

  const { data, isPending, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["event attendees", eventId, submittedQuery, limit, currentPage],
    queryFn: () =>
      getEventAttendees({
        currentPage,
        limit,
        search: submittedQuery,
        eventId,
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
    setCurrentPage,
  };
};
