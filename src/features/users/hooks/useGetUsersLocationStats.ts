import { useQuery } from "@tanstack/react-query";
import { getUserDistribution } from "../api";

export const useGetUsersLocationStats = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["user distribution"],
    queryFn: getUserDistribution,
    staleTime: 10 * 60 * 60 * 1000,
    gcTime: 10 * 60 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return {
    isLoading,
    data,
    refetch,
  };
};
