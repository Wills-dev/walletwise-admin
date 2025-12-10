"use client";

import { AnimatePresence } from "framer-motion";

import { sortOptions } from "@/lib/constants/dateFilter";
import { useAdminPermission } from "@/lib/hooks/useAdminPermission";
import { useGetServiceTransactions } from "../../hooks/useGetServiceTransactions";

import AirtimeSummary from "../AirtimeSummary/AirtimeSummary";
import AirtimeHistory from "../AirtimeHistory/AirtimeHistory";
import ServiceLayout from "@/components/templates/ServiceLayout/ServiceLayout";

const AirtimeWrapper = () => {
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
    setStatus,
    handleSortChange,
    handleSwithTab,
    tab,
    setSelectedDateFilterValue,
  } = useGetServiceTransactions("airtime");

  const { hasPermission } = useAdminPermission();

  const handleStatusChange = (status: string) => {
    setStatus(status);
  };

  const tabs = [
    {
      value: "summary",
      label: "Summary",
      content: (
        <AnimatePresence>
          <AirtimeSummary
            statusCount={data?.status_counts}
            totalRevenue={data?.total_amount}
            totalTransactions={data?.total_count}
            totalCompanyCommission={data?.total_company_commission}
            totalUserCommission={data?.total_user_commission}
            isLoading={isLoading}
            onClick={handleStatusChange}
          />
        </AnimatePresence>
      ),
    },
    {
      value: "history",
      label: "History",
      content: (
        <AnimatePresence>
          <AirtimeHistory
            setSelectedDateFilterValue={setSelectedDateFilterValue}
            statusCount={data?.status_counts}
            totalRevenue={data?.total_amount}
            totalTransactions={data?.total_count}
            totalCompanyCommission={data?.total_company_commission}
            totalUserCommission={data?.total_user_commission}
            isLoading={isLoading}
            onClick={handleStatusChange}
            data={data?.transactions}
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
            handleSortChange={handleSortChange}
            refetch={refetch}
            search={search}
            handleChange={handleSearchChange}
            handleClear={handleClear}
            onSubmit={handleSearch}
            sortOptions={sortOptions}
          />
        </AnimatePresence>
      ),
    },
  ];

  const tab2 = [
    {
      value: "history",
      label: "History",
      content: (
        <AnimatePresence>
          <AirtimeHistory
            setSelectedDateFilterValue={setSelectedDateFilterValue}
            statusCount={data?.status_counts}
            totalRevenue={data?.total_amount}
            totalTransactions={data?.total_count}
            totalCompanyCommission={data?.total_company_commission}
            totalUserCommission={data?.total_user_commission}
            isLoading={isLoading}
            onClick={handleStatusChange}
            data={data?.transactions}
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
            handleSortChange={handleSortChange}
            refetch={refetch}
            search={search}
            handleChange={handleSearchChange}
            handleClear={handleClear}
            onSubmit={handleSearch}
            sortOptions={sortOptions}
          />
        </AnimatePresence>
      ),
    },
  ];

  return (
    <ServiceLayout
      title="Airtime Transaction"
      tabs={hasPermission ? tabs : tab2}
      defaultTab={
        hasPermission && tab ? tab : !hasPermission ? "history" : "summary"
      }
      onClick={handleSwithTab}
    />
  );
};

export default AirtimeWrapper;
