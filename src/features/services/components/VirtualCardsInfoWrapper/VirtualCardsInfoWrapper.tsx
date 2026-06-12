"use client";

import { motion } from "framer-motion";
import { ColumnDef } from "@tanstack/react-table";

import { useVirtualCardsInfo } from "../../hooks/useVirtualCardsInfo";
import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import AppBreadcrumb from "@/components/molecules/AppBreadcrumb/AppBreadcrumb";
import { virtualcardBreadcrumb } from "@/features/users/constants";
import VirtualCardInfoSummary from "../VirtualCardInfoSummary/VirtualCardInfoSummary";
import TableWrapper from "@/components/organisms/TableWrapper/TableWrapper";
import { Column } from "./Column";
import { useAdminPermission } from "@/lib/hooks/useAdminPermission";
import { virtualCardInfoSortOptions } from "@/lib/constants/dateFilter";
import CardInfoWrapper from "../CardInfoWrapper/CardInfoWrapper";

const VirtualCardsInfoWrapper = ({ id }: { id: string }) => {
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
  } = useVirtualCardsInfo(id);

  const { hasPermission } = useAdminPermission();

  const typedColumns = Column(hasPermission) as ColumnDef<unknown>[];

  return (
    <div className="space-y-4">
      <PageTitle
        title="Virtual card details"
        description="Comprehensive card information and activity"
      />

      <AppBreadcrumb items={virtualcardBreadcrumb} />
      <CardInfoWrapper card={data?.card} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="space-y-6"
      >
        <VirtualCardInfoSummary
          loading={isPending}
          totalRefund={data?.summary.refund_count}
          totalTopup={data?.summary?.topup_count}
          totalTrans={data?.summary?.total_transactions}
          totalWithdrawal={data?.summary?.withdrawal_count}
        />
        <TableWrapper
          setSelectedDateFilterValue={setSelectedDateFilterValue}
          columns={typedColumns}
          data={data?.transactions || []}
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
          sortOptions={virtualCardInfoSortOptions}
          setCurrentPage={setCurrentPage}
          isLoading={isLoading}
        />
      </motion.div>
    </div>
  );
};

export default VirtualCardsInfoWrapper;
