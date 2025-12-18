"use client";

import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import SupportActivitiesSummary from "../SupportActivitiesSummary/SupportActivitiesSummary";
import SupportActivitiesTable from "../SupportActivitiesTable/SupportActivitiesTable";
import { useGetSupportActivities } from "../../hooks/useGetSupportActivities";

const SupportActivities = () => {
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
    setSelectedDateFilterValue,
  } = useGetSupportActivities();

  return (
    <div className="space-y-6">
      <PageTitle
        title="Support activities"
        description="Manage and track activities of your customer support"
      />
      <SupportActivitiesSummary
        isLoading={isLoading}
        totalLogs={data?.totalLogs}
      />
      <SupportActivitiesTable
        setSelectedDateFilterValue={setSelectedDateFilterValue}
        data={data?.logs || []}
        totalPages={data?.totalPages}
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
        isLoading={isLoading}
      />
    </div>
  );
};

export default SupportActivities;
