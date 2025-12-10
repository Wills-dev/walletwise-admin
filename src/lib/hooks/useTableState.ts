import { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createAuthCookie, readAuthCookie } from "../helpers/cookie";
import { DateFilterValue } from "../types";

export const useTableState = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const savedLimit = readAuthCookie("limit");
  const savedPage = readAuthCookie("page");

  const initialPage =
    Number(searchParams.get("page")) || Number(savedPage) || 1;
  const initialLimit =
    Number(searchParams.get("limit")) || Number(savedLimit) || 10;
  const initialSearch = searchParams.get("search") || "";
  const initialStatus = searchParams.get("status") || "";
  const initialTab = searchParams.get("tab") || "";
  const initialTransferType = searchParams.get("transferType") || "";

  const [currentPage, setCurrentPage] = useState(initialPage);
  const [limit, setLimit] = useState(initialLimit);
  const [search, setSearch] = useState(initialSearch);
  const [filter, setFilter] = useState<{ [key: number]: string }>({});
  const [status, setStatus] = useState(initialStatus);
  const [tab, setTab] = useState(initialTab);
  const [submittedQuery, setSubmittedQuery] = useState<string | null>(null);
  const [selectedDateFilterValue, setSelectedDateFilterValue] =
    useState<DateFilterValue | null>(null);
  const [transferType, setTransferType] = useState(initialTransferType);

  const handleSwitchTransferType = (value: string) => {
    setTransferType(value);
  };

  const handleSwithTab = (tab: string) => {
    setTab(tab);
  };

  const handleSortChange = (values: { [key: number]: string }): void => {
    setFilter(values);
  };

  const nextPage = (totalPages: number) => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    } else {
      return;
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    } else {
      return;
    }
  };

  const goToLastPage = (totalPages: number) => {
    setCurrentPage(totalPages);
  };

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const isLastPage = (totalPages: number) => {
    return currentPage === totalPages;
  };

  const isFirstPage = () => {
    return currentPage === 1;
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  const handleClear = () => {
    setSearch("");
    setSubmittedQuery(null);
  };

  const handleSearch = async () => {
    setCurrentPage(1);
    setSubmittedQuery(search);
  };

  const updateUrl = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (tab) params.set("tab", tab);
    else if (!tab) params.delete("tab");
    params.set("page", String(currentPage));
    params.set("limit", String(limit));
    createAuthCookie("limit", limit.toString());
    createAuthCookie("page", currentPage.toString());
    if (search) params.set("search", search);
    else if (!search) params.delete("search");
    if (status) params.set("status", status);
    else if (!status) params.delete("status");
    if (transferType) params.set("transferType", transferType);
    else if (!transferType) params.delete("transferType");
    router.replace(`?${params.toString()}`);
  }, [
    router,
    search,
    searchParams,
    limit,
    currentPage,
    status,
    tab,
    transferType,
  ]);

  useEffect(() => {
    updateUrl();
  }, [updateUrl]);

  return {
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
    setFilter,
    filter,
    status,
    setStatus,
    handleSwithTab,
    tab,
    selectedDateFilterValue,
    setSelectedDateFilterValue,
    handleSortChange,
    transferType,
    handleSwitchTransferType,
  };
};
