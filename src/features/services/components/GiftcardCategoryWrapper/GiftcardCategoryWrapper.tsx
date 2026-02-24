"use client";

import { motion } from "framer-motion";

import { ColumnDef } from "@tanstack/react-table";

import Button from "@/components/atoms/Button/Button";
import CreateCategoryModal from "@/components/molecules/modals/CreateCategoryModal/CreateCategoryModal";
import TableLoader from "@/components/atoms/skeleton/TableLoader";
import TableWrapper from "@/components/organisms/TableWrapper/TableWrapper";

import { useGetGiftcardCategory } from "../../hooks/useGetGiftcardCategory";
import { GiftcardCategoryColumn } from "./GiftcardCatgoryColumn";
import { productGiftSortOptions } from "@/lib/constants";
import { useCreateGiftcardCategory } from "../../hooks/useCreateGiftcardCategory";

const GiftcardCategoryWrapper = () => {
  const {
    openModal,
    setOpenModal,
    category,
    handleChange,
    handleCreate,
    isPending,
  } = useCreateGiftcardCategory();

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
    setCurrentPage,
  } = useGetGiftcardCategory();

  const typedColumns = GiftcardCategoryColumn as ColumnDef<unknown>[];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="space-y-6"
    >
      <div className="flex justify-end">
        <Button onClick={() => setOpenModal(true)} width="w-fit">
          Create Category
        </Button>
        <CreateCategoryModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          handleCreate={handleCreate}
          handleChange={handleChange}
          category={category}
          isSubmitting={isPending}
        />
      </div>
      {isLoading ? (
        <TableLoader />
      ) : (
        <TableWrapper
          columns={typedColumns}
          data={data?.items || []}
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
          sortOptions={productGiftSortOptions}
          setCurrentPage={setCurrentPage}
        />
      )}
    </motion.div>
  );
};

export default GiftcardCategoryWrapper;
