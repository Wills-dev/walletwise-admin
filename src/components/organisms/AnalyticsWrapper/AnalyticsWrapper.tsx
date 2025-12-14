"use client";

import { useGetTotalRevenueProfit } from "@/lib/hooks/useGetTotalRevenueProfit";

import DateFilterComponent from "../DateFilterComponent/DateFilterComponent";
import ProfitDistribution from "../ProfitDistribution/ProfitDistribution";

const AnalyticsWrapper = () => {
  const {
    includeTransfer,
    setIncludeTransfer,
    setSelectedDateFilterValue,
    data,
    isLoading,
  } = useGetTotalRevenueProfit();

  return (
    <div className="h-full">
      {setSelectedDateFilterValue !== undefined && (
        <DateFilterComponent
          onDateChange={(value) => {
            setSelectedDateFilterValue(value);
          }}
        />
      )}
      <ProfitDistribution />
    </div>
  );
};

export default AnalyticsWrapper;
