import CardWrapper from "@/components/atoms/CardWrapper/CardWrapper";
import StatisticCard from "@/components/molecules/StatisticCard/StatisticCard";

import { Ticket } from "lucide-react";

interface SupportActivitySummaryProps {
  isLoading: boolean;
  totalLogs: number;
}

const SupportActivitiesSummary = ({
  isLoading,
  totalLogs,
}: SupportActivitySummaryProps) => {
  return (
    <CardWrapper loading={isLoading}>
      <StatisticCard
        title="Total logs"
        value={totalLogs}
        icon={<Ticket />}
        color="blue"
      />
    </CardWrapper>
  );
};

export default SupportActivitiesSummary;
