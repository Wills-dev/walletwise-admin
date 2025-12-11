import { useQuery } from "@tanstack/react-query";
import { getRolePermissions } from "../api";

export const useGetRoles = () => {
  const { data, isPending, isLoading, isError, error } = useQuery({
    queryKey: ["roles"],
    queryFn: getRolePermissions,
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return {
    isPending,
    isLoading,
    roles: data,
    isError,
    error,
  };
};
