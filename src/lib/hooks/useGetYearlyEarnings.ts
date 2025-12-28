import { useQuery } from "@tanstack/react-query";
import { getYearEarnings } from "../api/earnings";

export const useGetYearlyEarnings = (year?: string) => {
  const { data, isPending, isLoading, isError, error } = useQuery({
    queryKey: ["yearly earnings", year],
    queryFn: () => getYearEarnings({ year }),
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
