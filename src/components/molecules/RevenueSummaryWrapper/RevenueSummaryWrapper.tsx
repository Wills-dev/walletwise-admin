"use client";

import { Banknote, DollarSign } from "lucide-react";

import StatisticCard from "../StatisticCard/StatisticCard";
import SummaryCardLoader from "@/components/atoms/skeleton/SummaryCardLoader";

interface RevenueSummaryWrapperProps {
  totalRevenue: number;
  percentage: number;
  percentageType: "positive" | "negative";
  period: string;
  isFetching: boolean;
  totatlRevenueWithTransfers?: number;
  percentageWithTransfers?: number;
  percentageTypeWithTransfers?: "positive" | "negative";
  type?: "revenue" | "profit";
}

const RevenueSummaryWrapper = ({
  totalRevenue,
  percentage,
  percentageType,
  period,
  isFetching,
  totatlRevenueWithTransfers,
  percentageWithTransfers,
  percentageTypeWithTransfers,
  type = "revenue",
}: RevenueSummaryWrapperProps) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6`}>
      {isFetching ? (
        <SummaryCardLoader />
      ) : (
        <>
          {type === "revenue" && (
            <StatisticCard
              title={`Total Revenue with Transfer`}
              currency="₦"
              color="blue"
              value={totatlRevenueWithTransfers || 0}
              icon={<DollarSign className="w-6 h-6" />}
              percentage={percentageWithTransfers}
              percentageType={percentageTypeWithTransfers}
              period={period}
            />
          )}
          <StatisticCard
            title={`Total ${type === "revenue" ? " Revenue" : " Profit"}`}
            currency="₦"
            color="orange"
            value={totalRevenue}
            icon={<Banknote className="w-6 h-6" />}
            percentage={percentage}
            percentageType={percentageType}
            period={period}
          />
        </>
      )}
    </div>
  );
};

export default RevenueSummaryWrapper;
