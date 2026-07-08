"use client";

import { motion } from "framer-motion";
import { ColumnDef } from "@tanstack/react-table";

import { useGetVirtualCards } from "../../hooks/useGetVirtualCards";
import VirtualCardSummary from "../VirtualCardSummary/VirtualCardSummary";
import TableWrapper from "@/components/organisms/TableWrapper/TableWrapper";
import { Column } from "./Column";
import { virtualCardSortOptions } from "@/lib/constants/dateFilter";

const VirtualCards = () => {
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
    isPending,
    isLoading,
    handleSearch,
    handleClear,
    currentPage,
    limit,
    refetch,
    handleSortChange,
    setSelectedDateFilterValue,
    setCurrentPage,
  } = useGetVirtualCards();

  const typedColumns = Column as ColumnDef<unknown>[];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="space-y-6"
    >
      <VirtualCardSummary
        loading={isPending}
        totalCards={data?.summary?.total_cards}
        totalVisa={data?.summary?.total_cards_by_brand.VISA}
        totalMasterCards={data?.summary?.total_cards_by_brand.MASTERCARD}
        totalTopup={data?.summary?.total_topups}
        totalRefund={data?.summary?.total_refunds}
      />
      <TableWrapper
        setSelectedDateFilterValue={setSelectedDateFilterValue}
        columns={typedColumns}
        data={data?.cards || []}
        totalPages={data?.totalPages || 1}
        currentPage={currentPage}
        prevPage={prevPage}
        nextPage={nextPage}
        goToFirstPage={goToFirstPage}
        goToLastPage={goToLastPage}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        limit={limit}
        setLimit={setLimit}
        handleSortChange={handleSortChange}
        refetch={refetch}
        search={search}
        handleChange={handleSearchChange}
        handleClear={handleClear}
        onSubmit={handleSearch}
        sortOptions={virtualCardSortOptions}
        setCurrentPage={setCurrentPage}
        isLoading={isLoading}
      />
    </motion.div>
  );
};

export default VirtualCards;
