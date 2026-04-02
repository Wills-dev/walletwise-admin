"use client";

import AllTransactions from "../AllTransactions/AllTransactions";
import DynamicTabs from "@/components/molecules/DynamicTabs/DynamicTabs";

import { useGetAllTransactions } from "@/lib/hooks/useGetAllTransactions";

const TransactionsWrapper = () => {
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
    tab,
    handleSwithTab,
  } = useGetAllTransactions();

  const tabs = [
    {
      value: "all-transactions",
      label: "All transactions",
      content: (
        <AllTransactions
          setLimit={setLimit}
          nextPage={nextPage}
          prevPage={prevPage}
          goToFirstPage={goToFirstPage}
          goToLastPage={goToLastPage}
          isFirstPage={isFirstPage}
          isLastPage={isLastPage}
          search={search}
          total_transactions={data?.summary?.total_transactions}
          totalPages={data?.pagination?.total_pages}
          total_transactions_exclude_transfer={
            data?.summary?.total_transactions_exclude_transfer
          }
          handleChange={handleSearchChange}
          transactions={data?.transactions || []}
          isLoading={isLoading}
          onSubmit={handleSearch}
          handleClear={handleClear}
          currentPage={currentPage}
          limit={limit}
          refetch={refetch}
          handleSortChange={handleSortChange}
          setSelectedDateFilterValue={setSelectedDateFilterValue}
          setExcludeTransfer={setExcludeTransfer}
          setCurrentPage={setCurrentPage}
          title="All Transactions"
        />
      ),
    },
    {
      value: "commission-transactions",
      label: "Commission transactions",
      content: (
        <AllTransactions
          setLimit={setLimit}
          nextPage={nextPage}
          prevPage={prevPage}
          goToFirstPage={goToFirstPage}
          goToLastPage={goToLastPage}
          isFirstPage={isFirstPage}
          isLastPage={isLastPage}
          search={search}
          total_transactions={data?.summary?.total_transactions}
          totalPages={data?.pagination?.total_pages}
          total_transactions_exclude_transfer={
            data?.summary?.total_transactions_exclude_transfer
          }
          handleChange={handleSearchChange}
          transactions={data?.transactions || []}
          isLoading={isLoading}
          onSubmit={handleSearch}
          handleClear={handleClear}
          currentPage={currentPage}
          limit={limit}
          refetch={refetch}
          handleSortChange={handleSortChange}
          setSelectedDateFilterValue={setSelectedDateFilterValue}
          setExcludeTransfer={setExcludeTransfer}
          setCurrentPage={setCurrentPage}
          title="Commission Transactions"
        />
      ),
    },
  ];

  const defaultTab = "all-transactions";

  return (
    <div className="space-y-6">
      <DynamicTabs
        tabs={tabs}
        defaultTab={tab || defaultTab}
        onClick={handleSwithTab}
      />
    </div>
  );
};

export default TransactionsWrapper;
