import { Crown, Repeat } from "lucide-react";

import StatisticCard from "../StatisticCard/StatisticCard";
import CardWrapper from "@/components/atoms/CardWrapper/CardWrapper";

interface TransactionSummaryProps {
  isLoading: boolean;
  totalTransactions: number;
  totalTransactionsExcludeTransfer: number;
  setExcludeTransfer: (exclude: boolean) => void;
}

const TransactionSummary = ({
  isLoading,
  totalTransactions,
  totalTransactionsExcludeTransfer,
  setExcludeTransfer,
}: TransactionSummaryProps) => {
  return (
    <CardWrapper loading={isLoading}>
      <StatisticCard
        title="Total transactions"
        value={totalTransactions}
        icon={<Repeat />}
        color="blue"
        onClick={() => setExcludeTransfer(false)}
      />
      <StatisticCard
        title="In app transactions"
        value={totalTransactionsExcludeTransfer}
        icon={<Crown />}
        color="green"
        onClick={() => setExcludeTransfer(true)}
      />
    </CardWrapper>
  );
};

export default TransactionSummary;
