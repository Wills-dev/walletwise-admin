import { useQuery } from "@tanstack/react-query";
import { getGifcardCatgoryInfo } from "../api/giftcard";

export const useGetGiftcardCategoryInfo = (id: number, enabled = false) => {
  const { data, isLoading } = useQuery({
    queryKey: ["gifcard category info", id],
    queryFn: () =>
      getGifcardCatgoryInfo({
        id,
      }),
    enabled,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return {
    categoryInfo: data,
    isLoading,
  };
};
