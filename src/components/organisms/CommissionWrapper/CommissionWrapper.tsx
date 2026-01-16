"use client";

import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import CommissionSummary from "@/components/molecules/CommissionSummary/CommissionSummary";
import CommissionTable from "@/components/molecules/CommissionTable/CommissionTable";

import { useGetCommissions } from "@/lib/hooks/useGetCommissions";

const CommissionWrapper = () => {
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
    setCurrentPage,
  } = useGetCommissions();

  return (
    <div className="space-y-6">
      <PageTitle title="Commissions" description="Manage commission details " />
      <CommissionSummary
        isLoading={isLoading}
        totalTransactions={data?.summary?.total_transactions}
        activeUsers={data?.summary?.active_users}
        referrals={data?.summary?.total_referrals}
      />
      <CommissionTable
        data={data?.users}
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
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default CommissionWrapper;
