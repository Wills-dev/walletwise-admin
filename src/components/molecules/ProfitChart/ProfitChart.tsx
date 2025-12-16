"use client";

import { useEffect } from "react";

import ChartLoader from "@/components/atoms/skeleton/ChartLoader";
import ReusableBarChart from "../charts/ReusableBarChart/ReusableBarChart";
import DateFilterComponent from "@/components/organisms/DateFilterComponent/DateFilterComponent";

import { DateFilterValue } from "@/lib/types";
import { useGetTotalRevenueProfit } from "@/lib/hooks/useGetTotalRevenueProfit";
import { useGetRevenueProfitByCategory } from "@/lib/hooks/useGetRevenueProfitByCategory";

const ProfitChart = () => {
  const {
    setSelectedDateFilterValue,
    selectedDateFilterValue,
    data,
    isLoading,
  } = useGetTotalRevenueProfit("profit");
  const {
    setService: setCategory,
    setSelectedDateFilterValue: setSelectedValue,
    data: categoryData,
    isLoading: isCategoryLoading,
  } = useGetRevenueProfitByCategory("profit");

  const onDateChange = (value: DateFilterValue) => {
    setSelectedValue(value);
    setSelectedDateFilterValue(value);
  };

  const showDateFilter =
    setSelectedDateFilterValue !== undefined || setSelectedValue !== undefined;

  useEffect(() => {
    setCategory("");
  }, [setCategory]);

  return (
    <div className="space-y-2">
      {showDateFilter && (
        <DateFilterComponent
          onDateChange={(value) => {
            onDateChange(value);
          }}
        />
      )}
      <div className="flex gap-6 max-lg:flex-col">
        <div className="lg:max-w-2/4 w-full">
          {isLoading ? (
            <ChartLoader />
          ) : (
            <ReusableBarChart
              data={data?.profit?.breakdown}
              dataKey="value"
              xAxisKey="period"
              currency="₦"
              showCurrency
              color="#ffa50080"
              description="Profit breakdown"
            />
          )}
        </div>
        <div className="lg:max-w-2/4 w-full">
          {isCategoryLoading ? (
            <ChartLoader />
          ) : (
            <ReusableBarChart
              data={categoryData?.profit?.categoryBreakdown || []}
              dataKey="value"
              xAxisKey="category"
              currency="₦"
              showCurrency
              color="#87ceeb80"
              description={`Profit distribution by category ${
                selectedDateFilterValue?.label || "today"
              }`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfitChart;
