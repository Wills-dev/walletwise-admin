"use client";

import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import StreaksTable from "@/components/molecules/StreaksTable/StreaksTable";
import StreakSummary from "@/components/molecules/StreakSummary/StreakSummary";

import { useGetUserStreaks } from "@/lib/hooks/useGetUserStreaks";

const StreaksWrapper = () => {
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
  } = useGetUserStreaks();

  return (
    <div className="space-y-6">
      <PageTitle
        title="Streaks"
        description="Manage and monitor users streaks "
      />
      <StreakSummary
        isLoading={isLoading}
        totalTransactions={data?.totalEarningsAllUsers}
      />
      <StreaksTable
        data={data?.users}
        isLoading={isLoading}
        totalPages={data?.pagination?.totalPages}
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

export default StreaksWrapper;
