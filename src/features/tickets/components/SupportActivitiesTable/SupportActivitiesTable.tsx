"use client";

import { FormEvent } from "react";

import { motion } from "framer-motion";
import { ColumnDef } from "@tanstack/react-table";

import { Column } from "./Column";
import { DateFilterValue } from "@/lib/types";

import TableLoader from "@/components/atoms/skeleton/TableLoader";
import TableWrapper from "@/components/organisms/TableWrapper/TableWrapper";

interface SupportActivitiesTableProps<TData = unknown> {
  data: TData[];
  totalPages: number;
  currentPage: number;
  prevPage: () => void;
  nextPage: (totalPages: number) => void;
  goToLastPage: (totalPages: number) => void;
  goToFirstPage: () => void;
  isFirstPage: () => boolean;
  isLastPage: (totalPages: number) => boolean;
  limit: number;
  setLimit: (limit: number) => void;
  setSelectedDateFilterValue?: (value: DateFilterValue) => void;
  search?: string | number;
  handleChange?: (search: string) => void;
  handleClear?: () => void;
  onSubmit?: (e: FormEvent) => void;
  isLoading: boolean;
  setCurrentPage?: (page: number) => void;
}

const SupportActivitiesTable = ({
  data,
  totalPages,
  currentPage,
  prevPage,
  nextPage,
  goToLastPage,
  goToFirstPage,
  isFirstPage,
  isLastPage,
  limit,
  setLimit,
  setSelectedDateFilterValue,
  search,
  handleChange,
  handleClear,
  onSubmit,
  isLoading,
  setCurrentPage,
}: SupportActivitiesTableProps) => {
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
          search={search}
          handleChange={handleChange}
          handleClear={handleClear}
          onSubmit={onSubmit}
          setCurrentPage={setCurrentPage}
        />
      )}
    </motion.div>
  );
};

export default SupportActivitiesTable;
