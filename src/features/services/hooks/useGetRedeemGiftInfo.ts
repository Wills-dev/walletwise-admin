import { useQuery } from "@tanstack/react-query";
import { getRedeemGiftInfo } from "../api/giftcard";

export const useGetRedeemGiftInfo = (id: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["redeem gift info", id],
    queryFn: () =>
      getRedeemGiftInfo({
        id,
      }),
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return {
    data,
    isLoading,
  };
};
