import { useQuery } from "@tanstack/react-query";
import { getTopServices } from "../api/topServices";

export const useGetTopServices = () => {
  const { data, isPending, isLoading, isError, error } = useQuery({
    queryKey: ["top services"],
    queryFn: getTopServices,
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return { data, isLoading, isPending, isError, error };
};
