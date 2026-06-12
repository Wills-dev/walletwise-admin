"use client";

import SummaryCardLoader from "@/components/atoms/skeleton/SummaryCardLoader";
import StatisticCard from "@/components/molecules/StatisticCard/StatisticCard";

import { Banknote, CheckCircle } from "lucide-react";

const VirtualCardInfoSummary = ({
  loading,
  totalRefund,
  totalTopup,
  totalTrans,
  totalWithdrawal,
}: {
  loading: boolean;
  totalTrans: number;
  totalTopup: number;
  totalRefund: number;
  totalWithdrawal: number;
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {loading ? (
        <SummaryCardLoader />
      ) : (
        <>
          <StatisticCard
            title="Total Transactions"
            color="orange"
            value={totalTrans}
            icon={<CheckCircle className="w-6 h-6" />}
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
          />{" "}
          <StatisticCard
            title="Total Withdrawals"
            color="green"
            value={totalWithdrawal}
            icon={<Banknote className="w-6 h-6" />}
          />
        </>
      )}
    </div>
  );
};

export default VirtualCardInfoSummary;
