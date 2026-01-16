"use client";

import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import TransactionHistory from "@/components/molecules/TransactionHistory/TransactionHistory";
import TransactionSummary from "@/components/molecules/TransactionSummary/TransactionSummary";
import { useGetAllTransactions } from "@/lib/hooks/useGetAllTransactions";

const AllTransactions = () => {
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
    setSelectedDateFilterValue,
    setExcludeTransfer,
    setCurrentPage,
  } = useGetAllTransactions();

  return (
    <div className="space-y-6">
      <PageTitle
        title="All Transactions"
        description="Track and manage all transaction details"
      />
      <TransactionSummary
        totalTransactionsExcludeTransfer={
          data?.summary?.total_transactions_exclude_transfer | 0
        }
        setExcludeTransfer={setExcludeTransfer}
        isLoading={isLoading}
        totalTransactions={data?.summary?.total_transactions | 0}
      />
      <TransactionHistory
        data={data?.transactions}
        isLoading={isLoading}
        totalPages={data?.pagination?.total_pages}
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
        handleChange={handleSearchChange}
        handleClear={handleClear}
        onSubmit={handleSearch}
        setCurrentPage={setCurrentPage}
        setSelectedDateFilterValue={setSelectedDateFilterValue}
      />
    </div>
  );
};

export default AllTransactions;
