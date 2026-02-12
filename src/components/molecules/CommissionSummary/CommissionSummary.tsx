import { Repeat, Share2, Users } from "lucide-react";

import CardWrapper from "@/components/atoms/CardWrapper/CardWrapper";
import StatisticCard from "../StatisticCard/StatisticCard";

interface CommissionSummaryProps {
  isLoading: boolean;
  totalTransactions: number;
  activeUsers?: number;
  referrals?: number;
}

const CommissionSummary = ({
  isLoading,
  totalTransactions,
  activeUsers,
  referrals,
}: CommissionSummaryProps) => {
  return (
    <CardWrapper loading={isLoading}>
      <StatisticCard
        title="Total transactions"
        value={totalTransactions}
        icon={<Repeat />}
        color="blue"
      />
      <StatisticCard
        title="Active Users"
        value={activeUsers || 0}
        icon={<Users />}
        color="green"
      />
      <StatisticCard
        title="Referrals"
        value={referrals || 0}
        icon={<Share2 />}
        color="purple"
      />
    </CardWrapper>
  );
};

export default CommissionSummary;
