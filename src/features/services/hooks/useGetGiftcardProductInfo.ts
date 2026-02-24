import { useQuery } from "@tanstack/react-query";
import { getGifcardProductInfo } from "../api/giftcard";

export const useGetGiftcardProductInfo = (id: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ["gifcard product info", id],
    queryFn: () =>
      getGifcardProductInfo({
        id,
      }),
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return {
    productInfo: data,
    isLoading,
  };
};
