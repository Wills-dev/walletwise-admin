import { useQuery } from "@tanstack/react-query";
import { getKycInfo } from "../api/kyc";

export const useGetKycInfo = (kycId: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["kyc info", kycId],
    queryFn: () =>
      getKycInfo({
        kycId,
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
