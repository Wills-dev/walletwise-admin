import { useQuery } from "@tanstack/react-query";

import { getUserCount } from "../api";

export const useGetUserCount = (year?: string) => {
  const { data, isPending, isLoading, isError, error } = useQuery({
    queryKey: ["user count", year],
    queryFn: () => getUserCount({ year }),
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return { data, isLoading, isPending, isError, error };
};
