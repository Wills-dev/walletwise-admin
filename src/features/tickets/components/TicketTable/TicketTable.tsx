"use client";

import { motion } from "framer-motion";
import { ColumnDef } from "@tanstack/react-table";

import { Column } from "./Column";
import { useGetAllTickets } from "../../hooks/useGetAllTickets";

import TableLoader from "@/components/atoms/skeleton/TableLoader";
import TableWrapper from "@/components/organisms/TableWrapper/TableWrapper";

const TicketTable = () => {
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
  } = useGetAllTickets();

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
          columns={typedColumns}
          data={data?.disputes || []}
          totalPages={data?.totalPages}
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
          handleChange={handleSearchChange}
          handleClear={handleClear}
          onSubmit={handleSearch}
        />
      )}
    </motion.div>
  );
};

export default TicketTable;
