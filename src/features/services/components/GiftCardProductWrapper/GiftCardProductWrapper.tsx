"use client";

import { motion } from "framer-motion";

import { productGiftSortOptions } from "@/lib/constants";
import { useGetGiftCardProducts } from "../../hooks/useGetGiftCardProducts";
import { GiftcardProductColumn } from "./GiftCardProductColumn";
import { ColumnDef } from "@tanstack/react-table";

import { useCreateProduct } from "../../hooks/useCreateProduct";

import TableLoader from "@/components/atoms/skeleton/TableLoader";
import TableWrapper from "@/components/organisms/TableWrapper/TableWrapper";
import Button from "@/components/atoms/Button/Button";
import CreateProductModal from "@/components/molecules/modals/CreateProductModal/CreateProductModal";

const GiftCardProductWrapper = () => {
  const {
    openModal,
    setOpenModal,
    product,
    handleChange,
    handleCreate,
    isPending,
  } = useCreateProduct();

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
  } = useGetGiftCardProducts();

  const typedColumns = GiftcardProductColumn as ColumnDef<unknown>[];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="flex justify-end">
        <Button width="w-fit" onClick={() => setOpenModal(true)}>
          Create Product
        </Button>
        <CreateProductModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          handleCreate={handleCreate}
          handleChange={handleChange}
          product={product}
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

export default GiftCardProductWrapper;
