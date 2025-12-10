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
  success: number;
  pending: number;
  reversed: number;
  failed: number;
  loading: boolean;
  onClick: (status: string) => void;
}

const ServiceCardWrapper = ({
  totalRevenue,
  totalCommission,
  totalTransactions,
  totalUserCommission,
  pending,
  reversed,
  success,
  failed,
  onClick,
  loading,
}: ServiceCardWrapperProps) => {
  const { hasPermission } = useAdminPermission();

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
                value={totalRevenue}
                icon={<Banknote className="w-6 h-6" />}
                onClick={() => onClick("")}
              />
              <StatisticCard
                title="Total Commission"
                currency="₦"
                color="blue"
                value={totalCommission}
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
            value={totalTransactions}
            icon={<DollarSign className="w-6 h-6" />}
            onClick={() => onClick("")}
          />
          <StatisticCard
            title="Success"
            color="green"
            value={success}
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
