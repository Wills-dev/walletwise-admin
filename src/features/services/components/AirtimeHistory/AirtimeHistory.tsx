"use client";

import { motion } from "framer-motion";
import { ColumnDef } from "@tanstack/react-table";

import { Column } from "./Column";
import { HistoryProps } from "@/lib/types";
import { useAdminPermission } from "@/lib/hooks/useAdminPermission";

import ServiceCardWrapper from "../ServiceCardWrapper/ServiceCardWrapper";
import TableWrapper from "@/components/organisms/TableWrapper/TableWrapper";
import TableLoader from "@/components/atoms/skeleton/TableLoader";

const AirtimeHistory = ({
  statusCount,
  totalRevenue,
  totalCompanyCommission,
  totalTransactions,
  totalUserCommission,
  isLoading,
  onClick,
  data,
  totalPages,
  currentPage,
  prevPage,
  nextPage,
  goToFirstPage,
  goToLastPage,
  isFirstPage,
  isLastPage,
  limit,
  setLimit,
  setSelectedDateFilterValue,
  refetch,
  handleSortChange,
  search,
  handleChange,
  handleClear,
  onSubmit,
  sortOptions,
}: HistoryProps) => {
  const { hasPermission } = useAdminPermission();

  const typedColumns = Column(hasPermission) as ColumnDef<unknown>[];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="space-y-6"
    >
      <div className="">
        <ServiceCardWrapper
          totalRevenue={totalRevenue}
          totalTransactions={totalTransactions}
          totalCommission={totalCompanyCommission}
          totalUserCommission={totalUserCommission}
          success={statusCount?.success}
          reversed={statusCount?.reversed}
          pending={statusCount?.pending}
          failed={statusCount?.failed}
          loading={isLoading}
          onClick={onClick}
        />
      </div>
      <div className="">
        {isLoading ? (
          <TableLoader />
        ) : (
          <TableWrapper
            setSelectedDateFilterValue={setSelectedDateFilterValue}
            columns={typedColumns}
            data={data || []}
            totalPages={totalPages}
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
            handleChange={handleChange}
            handleClear={handleClear}
            onSubmit={onSubmit}
            sortOptions={sortOptions}
          />
        )}
      </div>
    </motion.div>
  );
};

export default AirtimeHistory;
