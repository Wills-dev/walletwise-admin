"use client";

import ProfitDistribution from "../ProfitDistribution/ProfitDistribution";
import RevenueDistribution from "../RevenueDistribution/RevenueDistribution";

const AnalyticsWrapper = () => {
  return (
    <div className="h-full sm:space-y-10 space-y-6">
      <RevenueDistribution />
      <ProfitDistribution />
    </div>
  );
};

export default AnalyticsWrapper;
