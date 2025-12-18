"use client";

import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import TransactionHistory from "@/components/molecules/TransactionHistory/TransactionHistory";
import TransactionSummary from "@/components/molecules/TransactionSummary/TransactionSummary";

import { useGetUserTagTransactions } from "@/lib/hooks/useGetUserTagTransactions";

const UsertagTransactions = () => {
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
  } = useGetUserTagTransactions();

  return (
    <div className="space-y-6">
      <PageTitle
        title="Usertag Transactions"
        description="Track and manage all usertag transactions"
      />
      <TransactionSummary
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
        setSelectedDateFilterValue={setSelectedDateFilterValue}
      />
    </div>
  );
};

export default UsertagTransactions;
