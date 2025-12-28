import { useQuery } from "@tanstack/react-query";
import { generalStat } from "../api";

export const useGetGeneralStat = () => {
  const { data, isPending, isLoading, isError, error } = useQuery({
    queryKey: ["general statistics"],
    queryFn: generalStat,
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
