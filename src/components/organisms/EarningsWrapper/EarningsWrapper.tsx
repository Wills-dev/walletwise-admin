"use client";

import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import DynamicTabs from "@/components/molecules/DynamicTabs/DynamicTabs";
import ServiceEarningsSummary from "../ServiceEarningsSummary/ServiceEarningsSummary";

import { useGetEarnings } from "@/lib/hooks/useGetEarnings";

const EarningsWrapper = () => {
  const {
    setLimit,
    nextPage,
    prevPage,
    goToFirstPage,
    goToLastPage,
    isFirstPage,
    isLastPage,
    data,
    isLoading,
    currentPage,
    limit,
    setSelectedDateFilterValue,
    handleSwithTab,
    tab,
    setCurrentPage,
  } = useGetEarnings();

  const content = (
    <ServiceEarningsSummary
      data={data?.data || []}
      totalPages={data?.pagination?.total_pages}
      totalRevenue={data?.overall?.total_revenue || 0}
      totalProfit={data?.overall?.total_profit || 0}
      isLoading={isLoading}
      currentPage={currentPage}
      prevPage={prevPage}
      nextPage={nextPage}
      goToFirstPage={goToFirstPage}
      goToLastPage={goToLastPage}
      isFirstPage={isFirstPage}
      isLastPage={isLastPage}
      limit={limit}
      setLimit={setLimit}
      setSelectedDateFilterValue={setSelectedDateFilterValue}
      setCurrentPage={setCurrentPage}
    />
  );

  const earningsTab = [
    {
      label: "All",
      value: "",
      content,
    },
    {
      label: "Airtime",
      value: "airtime",
      content,
    },
    {
      label: "Betting",
      value: "betting",
      content,
    },
    {
      label: "Cable",
      value: "cable",
      content,
    },
    {
      label: "Data",
      value: "data",
      content,
    },
    {
      label: "Electricity",
      value: "electricity",
      content,
    },

    {
      label: "Gift Cards",
      value: "giftcard",
      content,
    },

    {
      label: "Transfer",
      value: "transfer",
      content,
    },
  ];
  return (
    <div className="space-y-6">
      <PageTitle
        title="Earnings"
        description="Track and manage company's earnings here"
      />
      <DynamicTabs
        tabs={earningsTab}
        defaultTab={tab}
        onClick={handleSwithTab}
      />
    </div>
  );
};

export default EarningsWrapper;
