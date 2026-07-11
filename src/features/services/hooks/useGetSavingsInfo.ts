import { useQuery } from "@tanstack/react-query";

import { getSavingsInfo } from "../api/savings";

export const useGetSavingsInfo = (id: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["service info", id],
    queryFn: () => getSavingsInfo({ id }),
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return {
    data,
    isLoading,
  };
};
