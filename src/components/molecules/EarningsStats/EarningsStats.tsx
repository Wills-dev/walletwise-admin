import { Coins, TrendingUp } from "lucide-react";

import CardWrapper from "@/components/atoms/CardWrapper/CardWrapper";
import StatisticCard from "../StatisticCard/StatisticCard";

interface EarningsStatsProps {
  isLoading: boolean;
  totalRevenue: number;
  totalProfit: number;
}

const EarningsStats = ({
  isLoading,
  totalRevenue,
  totalProfit,
}: EarningsStatsProps) => {
  return (
    <CardWrapper loading={isLoading}>
      <StatisticCard
        title="Total revenue"
        value={totalRevenue}
        icon={<Coins />}
        color="blue"
        currency="₦"
      />
      <StatisticCard
        title="Total profit"
        value={totalProfit}
        icon={<TrendingUp />}
        color="green"
        currency="₦"
      />
    </CardWrapper>
  );
};

export default EarningsStats;
