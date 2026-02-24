import { useQuery } from "@tanstack/react-query";

import { getGifcardProducts } from "../api/giftcard";
import { useTableState } from "@/lib/hooks/useTableState";

export const useGetGiftCardProducts = () => {
  const {
    currentPage,
    limit,
    setLimit,
    nextPage,
    prevPage,
    goToFirstPage,
    goToLastPage,
    isFirstPage,
    isLastPage,
    search,
    handleSearchChange,
    handleClear,
    submittedQuery,
    handleSearch,
    filter,
    handleSortChange,
    setCurrentPage,
  } = useTableState();

  const { data, isPending, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["giftcard products", submittedQuery, limit, currentPage],
    queryFn: () =>
      getGifcardProducts({
        currentPage,
        limit,
        search: submittedQuery,
        filter,
      }),
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  const productOptions = data?.items?.map(
    (product: { asset_id: string; id: number }) => ({
      label: product.asset_id,
      value: product.id.toString(),
    }),
  );

  return {
    setLimit,
    nextPage,
    prevPage,
    goToFirstPage,
    goToLastPage,
    isFirstPage,
    isLastPage,
    search,
    handleSearchChange,
    data,
    isPending,
    isLoading,
    isError,
    error,
    handleSearch,
    handleClear,
    currentPage,
    limit,
    refetch,
    handleSortChange,
    setCurrentPage,
    productOptions,
  };
};
