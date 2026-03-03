import CardWrapper from "@/components/atoms/CardWrapper/CardWrapper";
import StatisticCard from "../StatisticCard/StatisticCard";

import { Repeat } from "lucide-react";

interface StreakSummaryProps {
  isLoading: boolean;
  totalTransactions: number;
}

const StreakSummary = ({
  isLoading,
  totalTransactions,
}: StreakSummaryProps) => {
  return (
    <CardWrapper loading={isLoading}>
      <StatisticCard
        title="Total Earnings"
        value={totalTransactions}
        icon={<Repeat />}
        color="blue"
        currency="₦"
      />
    </CardWrapper>
  );
};

export default StreakSummary;
