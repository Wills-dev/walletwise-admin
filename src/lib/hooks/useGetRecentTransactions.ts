import { useQuery } from "@tanstack/react-query";

import { getRecentTransactions } from "../api/recentTransactions";

export const useGetRecentTransactions = () => {
  const { data, isPending, isLoading, isError, error } = useQuery({
    queryKey: ["recent transactions"],
    queryFn: getRecentTransactions,
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return {
    data,
    isLoading,
    isPending,
    isError,
    error,
  };
};
