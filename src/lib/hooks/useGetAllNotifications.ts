import { useQuery } from "@tanstack/react-query";

import { useTableState } from "./useTableState";
import { getAllNotifications } from "../api/notification";

export const useGetAllNotifications = () => {
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
  } = useTableState();

  const { data, isPending, isLoading, isError, error } = useQuery({
    queryKey: ["all notification", limit, currentPage],
    queryFn: () =>
      getAllNotifications({
        currentPage,
        limit,
        search: null,
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
    data,
    isPending,
    isLoading,
    isError,
    error,
    currentPage,
    limit,
  };
};
