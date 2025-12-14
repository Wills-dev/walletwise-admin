"use client";

import { useGetRevenueProfit } from "@/lib/hooks/useGetRevenueProfit";
import { useGetRevenueProfitByCategory } from "@/lib/hooks/useGetRevenueProfitByCategory";

const ProfitDistribution = () => {
  //   const {
  //     includeTransfer,
  //     setIncludeTransfer,
  //     setSelectedDateFilterValue,
  //     data,
  //     isLoading,
  //   } = useGetRevenueProfit("profit");
  const { service, setService, setSelectedDateFilterValue, data, isLoading } =
    useGetRevenueProfitByCategory();

  return <div>ProfitDistribution</div>;
};

export default ProfitDistribution;
