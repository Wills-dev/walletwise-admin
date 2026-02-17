import { getPermissions } from "../api/permission";

import { useQuery } from "@tanstack/react-query";

export const useGetAllPermissions = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["permissions"],
    queryFn: getPermissions,
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return {
    permissions: data || [],
    isLoading,
    error,
  };
};
