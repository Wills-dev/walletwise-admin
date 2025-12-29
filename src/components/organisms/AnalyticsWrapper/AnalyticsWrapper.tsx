"use client";

import ProfitDistribution from "../ProfitDistribution/ProfitDistribution";
import RevenueDistribution from "../RevenueDistribution/RevenueDistribution";
import UserDistribution from "../UserDistribution/UserDistribution";

const AnalyticsWrapper = () => {
  return (
    <div className="h-full sm:space-y-10 space-y-6">
      <RevenueDistribution />
      <ProfitDistribution />
      <UserDistribution />
    </div>
  );
};

export default AnalyticsWrapper;
