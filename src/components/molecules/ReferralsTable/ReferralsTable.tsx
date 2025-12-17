"use client";

import { motion } from "framer-motion";
import { ColumnDef } from "@tanstack/react-table";

import { Column } from "./Column";
import { useGetUsersReferrals } from "@/lib/hooks/useGetUsersReferrals";

import TableLoader from "@/components/atoms/skeleton/TableLoader";
import TableWrapper from "@/components/organisms/TableWrapper/TableWrapper";

const ReferralsTable = () => {
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
    setSelectedDateFilterValue,
  } = useGetUsersReferrals();

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
          data={data?.users || []}
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

export default ReferralsTable;
