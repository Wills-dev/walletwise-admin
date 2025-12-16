"use client";

import { Banknote, Euro, LucideIcon } from "lucide-react";

import { DateFilterValue } from "@/lib/types";
import { servicesData } from "@/lib/constants";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetTotalRevenueProfit } from "@/lib/hooks/useGetTotalRevenueProfit";
import { useGetRevenueProfitByCategory } from "@/lib/hooks/useGetRevenueProfitByCategory";

import StatisticCard from "../StatisticCard/StatisticCard";
import DateFilterComponent from "@/components/organisms/DateFilterComponent/DateFilterComponent";
import ReusableDropdown from "../ReusableDropdown/ReusableDropdown";

const ProfitSummary = () => {
  const {
    setSelectedDateFilterValue,
    selectedDateFilterValue,
    data,
    isLoading,
  } = useGetTotalRevenueProfit("profit");

  const {
    service,
    setService,
    setSelectedDateFilterValue: setSelectedValue,
    data: categoryData,
    isLoading: isCategoryLoading,
    selectedDateFilterValue: selectedValue,
  } = useGetRevenueProfitByCategory("profit");

  const Icon: LucideIcon | undefined = servicesData.find(
    (item) => item.value === service
  )?.icon;

  const showDateFilter =
    setSelectedDateFilterValue !== undefined || setSelectedValue !== undefined;

  const onDateChange = (value: DateFilterValue) => {
    setSelectedValue(value);
    setSelectedDateFilterValue(value);
  };
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

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
        {isLoading ? (
          <Skeleton className="h-40 min-w-[200px] rounded-xl flex-1 bg-gray-200 dark:bg-gray-800" />
        ) : (
          <StatisticCard
            title={`Total profit`}
            currency="₦"
            color="purple"
            value={data?.profit?.total || 0}
            icon={<Euro className="w-6 h-6" />}
            percentage={data?.profit?.comparison?.percentage}
            percentageType={data?.profit?.comparison?.type}
            period={selectedDateFilterValue?.label || "Daily"}
          />
        )}
        {isCategoryLoading ? (
          <Skeleton className="h-40 min-w-[200px] rounded-xl flex-1 bg-gray-200 dark:bg-gray-800" />
        ) : (
          <StatisticCard
            title={`Total ${service} Profit`}
            currency="₦"
            color="green"
            value={categoryData?.profit?.categoryBreakdown?.[0]?.value || 0}
            icon={
              Icon ? (
                <Icon className="w-6 h-6" />
              ) : (
                <Banknote className="w-6 h-6" />
              )
            }
            percentage={
              categoryData?.profit?.categoryBreakdown?.[0]?.comparison
                ?.percentage || 0
            }
            percentageType={
              categoryData?.profit?.categoryBreakdown?.[0]?.comparison?.type ||
              "positive"
            }
            period={selectedValue?.label || "Daily"}
          />
        )}
      </div>
    </div>
  );
};

export default ProfitSummary;
