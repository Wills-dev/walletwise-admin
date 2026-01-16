import { useQuery } from "@tanstack/react-query";

import { getUserInfo } from "../api";
import { useTableState } from "@/lib/hooks/useTableState";

export const useGetUserInfo = (userId: string) => {
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
    setCurrentPage,
  } = useTableState();

  const { data, isLoading } = useQuery({
    queryKey: ["user info", userId, currentPage, limit],
    queryFn: () =>
      getUserInfo({
        userId,
        limit,
        currentPage,
      }),
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return {
    data,
    isLoading,
    currentPage,
    limit,
    setLimit,
    nextPage,
    prevPage,
    goToFirstPage,
    goToLastPage,
    isFirstPage,
    isLastPage,
    setCurrentPage,
  };
};
