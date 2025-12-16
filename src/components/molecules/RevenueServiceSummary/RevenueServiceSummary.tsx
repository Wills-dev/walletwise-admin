"use client";

import { useEffect } from "react";

import { DateFilterValue } from "@/lib/types";
import { servicesData } from "@/lib/constants";
import { useGetRevenueProfitByCategory } from "@/lib/hooks/useGetRevenueProfitByCategory";

import DateFilterComponent from "@/components/organisms/DateFilterComponent/DateFilterComponent";
import ReusableDropdown from "../ReusableDropdown/ReusableDropdown";
import ChartLoader from "@/components/atoms/skeleton/ChartLoader";
import ReusableRadialChart from "../charts/ReusableRadialChart/ReusableRadialChart";
import CategoryRevenueChart from "../CategoryRevenueChart/CategoryRevenueChart";

const RevenueServiceSummary = () => {
  const {
    service,
    setService,
    setSelectedDateFilterValue,
    data,
    isLoading,
    selectedDateFilterValue,
  } = useGetRevenueProfitByCategory("revenue");

  const {
    setService: setCategory,
    setSelectedDateFilterValue: setSelectedValue,
    data: categoryData,
    isLoading: isCategoryLoading,
  } = useGetRevenueProfitByCategory("revenue");

  const serviceColor = servicesData.find(
    (item) => item.value === service
  )?.color;

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
      <div className="flex items-center gap-2">
        {showDateFilter && (
          <DateFilterComponent
            onDateChange={(value) => {
              onDateChange(value);
            }}
          />
        )}
        <ReusableDropdown
          onChange={setService}
          value={service}
          buttonLabel="Select service"
          filterLabel="Services"
          filterOptions={servicesData}
        />
      </div>
      <div className="w-full flex max-md:flex-col gap-6 h-fit">
        <div className="md:max-w-2/5 w-full">
          {isLoading ? (
            <ChartLoader />
          ) : (
            <>
              {data?.revenue?.categoryBreakdown?.[0] && (
                <ReusableRadialChart
                  value={data?.revenue?.categoryBreakdown?.[0]?.value || 0}
                  maxValue={100000}
                  label={service}
                  color={serviceColor || "blue"}
                  title={`${service} Revenue`}
                  description="Sales Performance"
                  showCurrency={true}
                  currency="₦"
                  showTrending={true}
                  trendingPercentage={
                    data?.revenue?.categoryBreakdown?.[0]?.comparison
                      ?.percentage || 0
                  }
                  percentageType={
                    data?.revenue?.categoryBreakdown?.[0]?.comparison?.type ||
                    "positive"
                  }
                  period={selectedDateFilterValue?.label || "this period"}
                />
              )}
            </>
          )}
        </div>
        <CategoryRevenueChart
          serviceRevenueData={categoryData?.revenue?.categoryBreakdown || []}
          isLoading={isCategoryLoading}
          color={serviceColor}
          period={selectedDateFilterValue?.label || "today"}
        />
      </div>
    </div>
  );
};

export default RevenueServiceSummary;
