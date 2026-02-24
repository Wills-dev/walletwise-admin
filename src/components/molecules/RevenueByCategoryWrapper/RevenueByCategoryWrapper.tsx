"use client";

import { useGetRevenueByCategory } from "@/features/services/hooks/useGetRevenueByCategory";

const RevenueByCategoryWrapper = () => {
  const {
    data,
    isLoading,
    selectedMonth,
    setSelectedMonth,
    selectedYear,
    setSelectedYear,
    selectedService,
    setSelectedService,
  } = useGetRevenueByCategory();

  return <div>RevenueByCategoryWrapper</div>;
};

export default RevenueByCategoryWrapper;
