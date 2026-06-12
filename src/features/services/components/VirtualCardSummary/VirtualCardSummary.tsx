"use client";

import SummaryCardLoader from "@/components/atoms/skeleton/SummaryCardLoader";
import StatisticCard from "@/components/molecules/StatisticCard/StatisticCard";

import { Banknote, CheckCircle } from "lucide-react";

const VirtualCardSummary = ({
  loading,
  totalCards,
  totalVisa,
  totalMasterCards,
  totalTopup,
  totalRefund,
}: {
  totalCards: number;
  totalVisa: number;
  totalMasterCards: number;
  totalTopup: number;
  totalRefund: number;
  loading: boolean;
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {loading ? (
        <SummaryCardLoader />
      ) : (
        <>
          <StatisticCard
            title="Total Cards"
            color="orange"
            value={totalCards}
            icon={<CheckCircle className="w-6 h-6" />}
          />
          <StatisticCard
            title="Total VISA Cards"
            color="blue"
            value={totalVisa}
            icon={<Banknote className="w-6 h-6" />}
          />
          <StatisticCard
            title="Total Mastercards"
            color="green"
            value={totalMasterCards}
            icon={<Banknote className="w-6 h-6" />}
          />
          <StatisticCard
            title="Total Top ups"
            color="orange"
            value={totalTopup}
            icon={<Banknote className="w-6 h-6" />}
          />
          <StatisticCard
            title="Total Refunds"
            color="red"
            value={totalRefund}
            icon={<Banknote className="w-6 h-6" />}
          />
        </>
      )}
    </div>
  );
};

export default VirtualCardSummary;
