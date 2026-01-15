import { useQuery } from "@tanstack/react-query";
import { getGifcardRatingInfo } from "../api/giftcard";

export const useGetRatingInfo = (id: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ["gifcard rating info", id],
    queryFn: () =>
      getGifcardRatingInfo({
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
