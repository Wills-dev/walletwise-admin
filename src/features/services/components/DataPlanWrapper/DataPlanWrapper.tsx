"use client";

import { motion } from "framer-motion";

import { useGetDataPlans } from "../../hooks/useGetDataPlans";
import Button from "@/components/atoms/Button/Button";
import { useCreateCustomDataPlan } from "../../hooks/useCreateCustomDataPlan";
import CreateDataPlanModal from "@/components/molecules/modals/CreateDataPlanModal/CreateDataPlanModal";

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
    filter,
  } = useGetDataPlans();

  const {
    dataPlan,
    handleChange,
    isPending,
    handleSubmit,
    openModal,
    setOpenModal,
  } = useCreateCustomDataPlan();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
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
    </motion.div>
  );
};

export default DataPlanWrapper;
