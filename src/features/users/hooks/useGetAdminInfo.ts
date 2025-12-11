import { useQuery } from "@tanstack/react-query";

import { getAdminInfo } from "../api";

export const useGetAdminInfo = (adminId: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["admins info", adminId],
    queryFn: () =>
      getAdminInfo({
        adminId,
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
