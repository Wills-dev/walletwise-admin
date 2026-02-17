import { useQuery } from "@tanstack/react-query";

import { getRoles } from "../api/roles";

export const useGetAllAdminRoles = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["roles"],
    queryFn: getRoles,
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return {
    roles: data || [],
    isLoading,
    error,
  };
};
