"use client";

import {
  Banknote,
  CheckCircle,
  Clock,
  DollarSign,
  Euro,
  PoundSterling,
  RotateCcw,
  XCircle,
} from "lucide-react";

import StatisticCard from "@/components/molecules/StatisticCard/StatisticCard";
import SummaryCardLoader from "@/components/atoms/skeleton/SummaryCardLoader";

import { useAdminPermission } from "@/lib/hooks/useAdminPermission";

interface ServiceCardWrapperProps {
  totalRevenue: number;
  totalTransactions: number;
  totalCommission: number;
  totalUserCommission: number;
  totalAmountUsd?: number;
  totalCommissionUsd?: number;
  success: number;
  pending: number;
  reversed: number;
  failed: number;
  loading: boolean;
  onClick: (status: string) => void;
  service: string;
}

const ServiceCardWrapper = ({
  totalRevenue,
  totalCommission,
  totalTransactions,
  totalUserCommission,
  totalAmountUsd,
  totalCommissionUsd,
  pending,
  reversed,
  success,
  failed,
  onClick,
  loading,
  service,
}: ServiceCardWrapperProps) => {
  const { hasPermission } = useAdminPermission();

  const isTransfer = service === "transfer";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {loading ? (
        <SummaryCardLoader />
      ) : (
        <>
          {hasPermission && (
            <>
              <StatisticCard
                title="Total Revenue"
                currency="₦"
                color="orange"
                value={isTransfer ? totalRevenue : totalRevenue * 4}
                secondCurrency="$"
                secondValue={(totalAmountUsd && totalAmountUsd * 4) || 0}
                icon={<Banknote className="w-6 h-6" />}
                onClick={() => onClick("")}
              />
              <StatisticCard
                title="Total Commission"
                currency="₦"
                color="blue"
                value={isTransfer ? totalCommission : totalCommission * 4}
                secondCurrency="$"
                secondValue={
                  (totalCommissionUsd && totalCommissionUsd * 4) || 0
                }
                icon={<PoundSterling className="w-6 h-6" />}
                onClick={() => onClick("")}
              />
              <StatisticCard
                title="Total User Commission"
                currency="₦"
                color="orange"
                value={totalUserCommission}
                icon={<Euro className="w-6 h-6" />}
                onClick={() => onClick("")}
              />
            </>
          )}
          <StatisticCard
            title="Total Transaction"
            color="green"
            value={isTransfer ? totalTransactions : totalTransactions * 4}
            icon={<DollarSign className="w-6 h-6" />}
            onClick={() => onClick("")}
          />
          <StatisticCard
            title="Success"
            color="green"
            value={isTransfer ? success : success * 4}
            icon={<CheckCircle className="w-6 h-6" />}
            onClick={() => onClick("success")}
          />
          <StatisticCard
            title="Reversed"
            color="blue"
            value={reversed}
            icon={<RotateCcw className="w-6 h-6" />}
            onClick={() => onClick("reversed")}
          />
          <StatisticCard
            title="Pending"
            color="yellow"
            value={pending}
            icon={<Clock className="w-6 h-6" />}
            onClick={() => onClick("pending")}
          />
          <StatisticCard
            title="Failed"
            color="red"
            value={failed}
            icon={<XCircle className="w-6 h-6" />}
            onClick={() => onClick("failed")}
          />
        </>
      )}
    </div>
  );
};

export default ServiceCardWrapper;
