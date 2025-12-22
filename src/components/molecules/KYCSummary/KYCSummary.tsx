import CardWrapper from "@/components/atoms/CardWrapper/CardWrapper";
import { TiersType } from "@/lib/types";
import StatisticCard from "../StatisticCard/StatisticCard";
import { BadgeCheck, Ban, Crown, FileCheck, ShieldCheck } from "lucide-react";

interface KYCSummaryProps {
  tierCounts: TiersType;
  isLoading: boolean;
  handleTierChange: (tier?: number) => void;
  handleStatusChange: (status: string) => void;
  declinedCount: number;
  processingCount: number;
  totalCount: number;
}

const KYCSummary = ({
  tierCounts,
  isLoading,
  handleStatusChange,
  handleTierChange,
  declinedCount,
  totalCount,
  processingCount,
}: KYCSummaryProps) => {
  return (
    <CardWrapper loading={isLoading}>
      <StatisticCard
        title="Total KYC"
        color="orange"
        value={totalCount}
        icon={<FileCheck className="w-6 h-6" />}
        onClick={() => {
          handleTierChange(undefined);
          handleStatusChange("");
        }}
      />
      <StatisticCard
        title="Tier 1"
        color="yellow"
        value={tierCounts?.tier1}
        icon={<BadgeCheck className="w-6 h-6" />}
        onClick={() => handleTierChange(1)}
      />
      <StatisticCard
        title="Tier 2"
        color="blue"
        value={tierCounts?.tier2}
        icon={<ShieldCheck className="w-6 h-6" />}
        onClick={() => handleTierChange(2)}
      />
      <StatisticCard
        title="Tier 3"
        color="green"
        value={tierCounts?.tier3}
        icon={<Crown className="w-6 h-6" />}
        onClick={() => handleTierChange(3)}
      />
      <StatisticCard
        title="Process KYC"
        color="yellow"
        value={processingCount || 0}
        icon={<FileCheck className="w-6 h-6" />}
        onClick={() => handleStatusChange("processing")}
      />
      <StatisticCard
        title="Declined KYC"
        color="red"
        value={declinedCount || 0}
        icon={<Ban className="w-6 h-6" />}
        onClick={() => handleStatusChange("declined")}
      />
    </CardWrapper>
  );
};

export default KYCSummary;
