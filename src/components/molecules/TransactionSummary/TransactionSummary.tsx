import { Repeat } from "lucide-react";

import StatisticCard from "../StatisticCard/StatisticCard";
import CardWrapper from "@/components/atoms/CardWrapper/CardWrapper";

interface TransactionSummaryProps {
  isLoading: boolean;
  totalTransactions: number;
}

const TransactionSummary = ({
  isLoading,
  totalTransactions,
}: TransactionSummaryProps) => {
  return (
    <CardWrapper loading={isLoading}>
      <StatisticCard
        title="Total transactions"
        value={totalTransactions}
        icon={<Repeat />}
        color="blue"
      />
    </CardWrapper>
  );
};

export default TransactionSummary;
