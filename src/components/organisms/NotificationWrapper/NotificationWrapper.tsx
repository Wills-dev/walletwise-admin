"use client";

import { motion } from "framer-motion";
import { ColumnDef } from "@tanstack/react-table";

import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import TableLoader from "@/components/atoms/skeleton/TableLoader";
import TableWrapper from "@/components/organisms/TableWrapper/TableWrapper";

import { useGetAllNotifications } from "@/lib/hooks/useGetAllNotifications";
import { Column } from "./Column";

const NotificationWrapper = () => {
  const {
    setLimit,
    nextPage,
    prevPage,
    goToFirstPage,
    goToLastPage,
    isFirstPage,
    isLastPage,
    data,
    isLoading,
    currentPage,
    limit,
  } = useGetAllNotifications();

  const typedColumns = Column as ColumnDef<unknown>[];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <PageTitle
          title="Notifications"
          description="Manage notification details "
        />
      </div>
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
            data={data?.notifications || []}
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
          />
        )}
      </motion.div>
    </div>
  );
};

export default NotificationWrapper;
