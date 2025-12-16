"use client";

import ProfitChart from "@/components/molecules/ProfitChart/ProfitChart";
import ProfitSummary from "@/components/molecules/ProfitSummary/ProfitSummary";

const ProfitDistribution = () => {
  return (
    <div className="space-y-6">
      <h1 className="sm:text-3xl text-2xl font-bold text-gray-800 dark:text-white">
        Profit Distribution
      </h1>

      <div className="space-y-6">
        <ProfitSummary />
        <ProfitChart />
      </div>
    </div>
  );
};

export default ProfitDistribution;
