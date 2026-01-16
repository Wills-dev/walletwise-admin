"use client";

import { AnimatePresence } from "framer-motion";

import { sortOptions } from "@/lib/constants/dateFilter";
import { useAdminPermission } from "@/lib/hooks/useAdminPermission";
import { useGetServiceTransactions } from "../../hooks/useGetServiceTransactions";

import ServiceSummary from "../ServiceSummary/ServiceSummary";
import ServiceLayout from "@/components/templates/ServiceLayout/ServiceLayout";
import ServiceHistory from "../ServiceHistory/ServiceHistory";

const ServiceWrapper = ({ service }: { service: string }) => {
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
    handleStatusChange,
    handleSortChange,
    handleSwithTab,
    tab,
    setSelectedDateFilterValue,
    setCurrentPage,
  } = useGetServiceTransactions(service);

  const { hasPermission } = useAdminPermission();

  const tabs = [
    {
      value: "summary",
      label: "Summary",
      content: (
        <AnimatePresence>
          <ServiceSummary
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
          <ServiceHistory
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
            service={service}
            setCurrentPage={setCurrentPage}
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
          <ServiceHistory
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
            service={service}
            setCurrentPage={setCurrentPage}
          />
        </AnimatePresence>
      ),
    },
  ];

  return (
    <ServiceLayout
      title={`${service} Transactions`}
      tabs={hasPermission ? tabs : tab2}
      defaultTab={
        hasPermission && tab ? tab : !hasPermission ? "history" : "summary"
      }
      onClick={handleSwithTab}
    />
  );
};

export default ServiceWrapper;
