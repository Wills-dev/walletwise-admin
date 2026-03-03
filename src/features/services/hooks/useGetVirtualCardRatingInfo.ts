import { useQuery } from "@tanstack/react-query";

import { getVirtualCardRatingInfo } from "../api/virtualCard";

export const useGetVirtualCardRatingInfo = (id: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ["virtual card rating info", id],
    queryFn: () =>
      getVirtualCardRatingInfo({
        id,
      }),
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return {
    ratingInfo: data,
    isLoading,
  };
};
