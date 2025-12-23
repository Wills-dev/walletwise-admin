"use client";

import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import KYCSummary from "@/components/molecules/KYCSummary/KYCSummary";
import KYCTable from "@/components/molecules/KYCTable/KYCTable";

import { useGetAllKyc } from "@/lib/hooks/useGetAllKyc";

const ManageKycWrapper = () => {
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
    isLoading,
    handleSearch,
    handleClear,
    currentPage,
    limit,
    data,
    isPending,
    handleTierChange,
    handleStatusChange,
  } = useGetAllKyc();

  return (
    <div className="space-y-6">
      <PageTitle
        title="KYC Management"
        description="Manage and track users KYC details"
      />
      <KYCSummary
        tierCounts={data?.tierCounts}
        isLoading={isPending}
        handleTierChange={handleTierChange}
        handleStatusChange={handleStatusChange}
        declinedCount={data?.declinedCount}
        processingCount={data?.processingCount}
        totalCount={data?.total}
      />
      <KYCTable
        prevPage={prevPage}
        nextPage={nextPage}
        goToFirstPage={goToFirstPage}
        goToLastPage={goToLastPage}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        limit={limit}
        setLimit={setLimit}
        data={data?.data || []}
        totalPages={data?.totalPages}
        currentPage={currentPage}
        isLoading={isLoading}
        search={search}
        handleChange={handleSearchChange}
        handleClear={handleClear}
        onSubmit={handleSearch}
      />
    </div>
  );
};

export default ManageKycWrapper;
