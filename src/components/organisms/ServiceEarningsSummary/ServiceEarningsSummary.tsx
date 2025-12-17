"use client";

import EarningsSummary from "@/components/molecules/EarningsSummary/EarningsSummary";
import EarningsTable from "@/components/molecules/EarningsTable/EarningsTable";
import { DateFilterValue } from "@/lib/types";

interface ServiceEarningsSummaryProps<TData = unknown> {
  isLoading: boolean;
  totalRevenue: number;
  totalProfit: number;
  data: TData[];
  totalPages: number;
  currentPage: number;
  prevPage: () => void;
  nextPage: (totalPages: number) => void;
  goToLastPage: (totalPages: number) => void;
  goToFirstPage: () => void;
  isFirstPage: () => boolean;
  isLastPage: (totalPages: number) => boolean;
  limit: number;
  setLimit: (limit: number) => void;
  setSelectedDateFilterValue: (value: DateFilterValue) => void;
}

const ServiceEarningsSummary = ({
  data,
  isLoading,
  totalRevenue,
  totalProfit,
  currentPage,
  prevPage,
  nextPage,
  goToFirstPage,
  goToLastPage,
  isFirstPage,
  isLastPage,
  limit,
  setLimit,
  totalPages,
  setSelectedDateFilterValue,
}: ServiceEarningsSummaryProps) => {
  return (
    <div className="space-y-6 pt-6">
      <EarningsSummary
        isLoading={isLoading}
        totalRevenue={totalRevenue}
        totalProfit={totalProfit}
      />
      <EarningsTable
        data={data}
        totalPages={totalPages}
        currentPage={currentPage}
        prevPage={prevPage}
        nextPage={nextPage}
        goToFirstPage={goToFirstPage}
        goToLastPage={goToLastPage}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        limit={limit}
        setLimit={setLimit}
        isLoading={isLoading}
        setSelectedDateFilterValue={setSelectedDateFilterValue}
      />
    </div>
  );
};

export default ServiceEarningsSummary;
