"use client";

import { AnimatePresence } from "framer-motion";

import { sortOptions } from "@/lib/constants/dateFilter";
import { useGetServiceTransactions } from "../../hooks/useGetServiceTransactions";

const TransferWapper = () => {
  const {
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
    isLoading,
    handleSearch,
    handleClear,
    currentPage,
    limit,
    refetch,
    setStatus,
    handleSortChange,
    handleSwithTab,
    tab,
    setSelectedDateFilterValue,
  } = useGetServiceTransactions("transfer");

  const handleStatusChange = (status: string) => {
    setStatus(status);
  };

  const tabs = [
    {
      value: "summary",
      label: "Summary",
      content: <AnimatePresence></AnimatePresence>,
    },
    {
      value: "history",
      label: "History",
      content: <AnimatePresence></AnimatePresence>,
    },
  ];

  return <div>TransferWapper</div>;
};

export default TransferWapper;
