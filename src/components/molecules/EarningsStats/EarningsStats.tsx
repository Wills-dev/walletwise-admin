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
        value={totalRevenue * 4}
        icon={<Coins />}
        color="blue"
        currency="₦"
      />
      <StatisticCard
        title="Total profit"
        value={totalProfit * 4}
        icon={<TrendingUp />}
        color="green"
        currency="₦"
      />
    </CardWrapper>
  );
};

export default EarningsStats;
