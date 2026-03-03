"use client";

import { motion } from "framer-motion";
import { ColumnDef } from "@tanstack/react-table";

import { Column } from "./Column";
import { CommissionTableProps } from "@/lib/types";

import TableLoader from "@/components/atoms/skeleton/TableLoader";
import TableWrapper from "@/components/organisms/TableWrapper/TableWrapper";
import { streakSortOptions } from "@/lib/constants";

const StreaksTable = ({
  isLoading,
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
  setCurrentPage,
}: CommissionTableProps) => {
  const typedColumns = Column as ColumnDef<unknown>[];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="space-y-6"
    >
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
          sortOptions={streakSortOptions}
          setCurrentPage={setCurrentPage}
        />
      )}
    </motion.div>
  );
};

export default StreaksTable;
