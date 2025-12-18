import { useQuery } from "@tanstack/react-query";

import { getTicketInfo } from "../api";

export const useGetTicketInfo = (ticketId: string) => {
  const { data, isPending, isLoading, isError, error } = useQuery({
    queryKey: ["ticket info", ticketId],
    queryFn: () =>
      getTicketInfo({
        ticketId,
      }),
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return {
    data,
    isLoading,
    isPending,
    isError,
    error,
  };
};
