"use client";

import { motion } from "framer-motion";

import { Column } from "./Column";
import { ColumnDef } from "@tanstack/react-table";

import { dataPlanSortOptions } from "@/lib/constants";
import { useGetDataPlans } from "../../hooks/useGetDataPlans";
import { useCreateCustomDataPlan } from "../../hooks/useCreateCustomDataPlan";

import Button from "@/components/atoms/Button/Button";
import CreateDataPlanModal from "@/components/molecules/modals/CreateDataPlanModal/CreateDataPlanModal";
import TableLoader from "@/components/atoms/skeleton/TableLoader";
import TableWrapper from "@/components/organisms/TableWrapper/TableWrapper";

const DataPlanWrapper = () => {
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
    handleSortChange,
  } = useGetDataPlans();

  const {
    dataPlan,
    handleChange,
    isPending,
    handleSubmit,
    openModal,
    setOpenModal,
  } = useCreateCustomDataPlan();

  const typedColumns = Column as ColumnDef<unknown>[];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="space-y-6"
    >
      <div className="flex justify-end">
        <Button width="w-fit" onClick={() => setOpenModal(true)}>
          Create New Custom Plan
        </Button>
        <CreateDataPlanModal
          dataPlan={dataPlan}
          handleChange={handleChange}
          isPending={isPending}
          handleSubmit={handleSubmit}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      </div>
      <div>
        {isLoading ? (
          <TableLoader />
        ) : (
          <TableWrapper
            columns={typedColumns}
            data={data?.records || []}
            totalPages={data?.pagination?.totalPages || 1}
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
            handleSortChange={handleSortChange}
            refetch={refetch}
            sortOptions={dataPlanSortOptions}
          />
        )}
      </div>
    </motion.div>
  );
};

export default DataPlanWrapper;
