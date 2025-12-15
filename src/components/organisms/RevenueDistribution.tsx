"use client";

import { useEffect } from "react";

import { DateFilterValue } from "@/lib/types";
import { useGetTotalRevenueProfit } from "@/lib/hooks/useGetTotalRevenueProfit";

import ChartLoader from "../atoms/skeleton/ChartLoader";
import DateFilterComponent from "./DateFilterComponent/DateFilterComponent";
import ReusableBarChart from "../molecules/charts/ReusableBarChart/ReusableBarChart";
import RevenueSummaryWrapper from "../molecules/RevenueSummaryWrapper/RevenueSummaryWrapper";
import RevenueServiceSummary from "../molecules/RevenueServiceSummary/RevenueServiceSummary";

const RevenueDistribution = () => {
  const {
    setSelectedDateFilterValue,
    selectedDateFilterValue,
    data,
    isLoading,
  } = useGetTotalRevenueProfit("revenue");

  const {
    setIncludeTransfer,
    setSelectedDateFilterValue: setSelectedValue,
    selectedDateFilterValue: selectedValue,
    data: transferData,
    isLoading: isTransferLoading,
  } = useGetTotalRevenueProfit("revenue");

  const loading = isTransferLoading || isLoading;

  const showDateFilter =
    setSelectedDateFilterValue !== undefined || setSelectedValue !== undefined;

  const onDateChange = (value: DateFilterValue) => {
    setSelectedValue(value);
    setSelectedDateFilterValue(value);
  };

  useEffect(() => {
    setIncludeTransfer(true);
  }, [setIncludeTransfer]);

  return (
    <div className="space-y-6">
      <h1 className="sm:text-3xl text-2xl font-bold text-gray-800 dark:text-white">
        Revenue Distribution
      </h1>

      <div className="space-y-2">
        {showDateFilter && (
          <DateFilterComponent
            onDateChange={(value) => {
              onDateChange(value);
            }}
          />
        )}
        <div className="space-y-6">
          {" "}
          <RevenueSummaryWrapper
            totalRevenue={data?.revenue?.total}
            percentage={data?.revenue?.comparison?.percentage}
            percentageType={data?.revenue?.comparison?.type}
            period={
              selectedDateFilterValue?.label || selectedValue?.label || "Daily"
            }
            isFetching={loading}
            totatlRevenueWithTransfers={transferData?.revenue?.total}
            percentageWithTransfers={
              transferData?.revenue?.comparison?.percentage
            }
            percentageTypeWithTransfers={
              transferData?.revenue?.comparison?.type
            }
          />
          <div className="flex gap-6 max-lg:flex-col">
            <div className="lg:max-w-2/4 w-full">
              {isTransferLoading ? (
                <ChartLoader />
              ) : (
                <ReusableBarChart
                  data={transferData?.revenue?.breakdown}
                  dataKey="value"
                  xAxisKey="period"
                  currency="₦"
                  showCurrency
                  color="#87ceeb80"
                  description="Revenue breakdown with transfer"
                />
              )}
            </div>
            <div className="lg:max-w-2/4 w-full">
              {isLoading ? (
                <ChartLoader />
              ) : (
                <ReusableBarChart
                  data={data?.revenue?.breakdown}
                  dataKey="value"
                  xAxisKey="period"
                  currency="₦"
                  showCurrency
                  color="#ffa50080"
                  description="Revenue breakdown without transfer"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <RevenueServiceSummary />
    </div>
  );
};

export default RevenueDistribution;
