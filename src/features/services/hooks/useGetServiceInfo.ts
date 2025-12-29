import { useQuery } from "@tanstack/react-query";

import { getServiceInfo } from "../api";

export const useGetServiceInfo = (id: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["service info", id],
    queryFn: () => getServiceInfo({ id }),
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return {
    data,
    isLoading,
  };
};
