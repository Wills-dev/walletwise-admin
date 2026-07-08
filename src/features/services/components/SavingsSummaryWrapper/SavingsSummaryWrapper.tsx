import SummaryCardLoader from "@/components/atoms/skeleton/SummaryCardLoader";
import StatisticCard from "@/components/molecules/StatisticCard/StatisticCard";

import { Banknote, Clock, Lock, PoundSterling, Save } from "lucide-react";

const SavingsSummaryWrapper = ({
  loading,
  totalRevenue,
  flexCount,
  flexRevenue,
  goalCount,
  goalRevenue,
  lockCount,
  lockRevenue,
  onClick,
}: {
  loading: boolean;
  totalRevenue: number;
  flexCount: number;
  flexRevenue: number;
  goalCount: number;
  goalRevenue: number;
  lockCount: number;
  lockRevenue: number;
  ajoCount: number;
  ajoRevenue: number;
  onClick: (value: string) => void;
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {loading ? (
        <SummaryCardLoader />
      ) : (
        <>
          <StatisticCard
            title="Total Revenue"
            currency="₦"
            color="orange"
            value={totalRevenue}
            secondCurrency=""
            icon={<Banknote className="w-6 h-6" />}
            onClick={() => onClick("")}
          />
          <StatisticCard
            title="Flex Savings"
            currency="₦"
            color="blue"
            value={flexRevenue}
            secondValue={flexCount}
            icon={<PoundSterling className="w-6 h-6" />}
            onClick={() => onClick("flex")}
          />
          <StatisticCard
            title="Goal Savings"
            currency="₦"
            color="green"
            value={goalRevenue}
            secondValue={goalCount}
            icon={<Save className="w-6 h-6" />}
            onClick={() => onClick("goal")}
          />
          <StatisticCard
            title="Lock Savings"
            currency="₦"
            color="purple"
            value={lockRevenue}
            secondValue={lockCount}
            icon={<Lock className="w-6 h-6" />}
            onClick={() => onClick("lock")}
          />
          <StatisticCard
            title="Ajo Savings"
            currency="₦"
            color="red"
            value={lockRevenue}
            secondValue={lockCount}
            icon={<Clock className="w-6 h-6" />}
            onClick={() => onClick("ajo")}
          />
        </>
      )}
    </div>
  );
};

export default SavingsSummaryWrapper;
