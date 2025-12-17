import EarningsStats from "../EarningsStats/EarningsStats";

interface EarningsSummaryProps {
  isLoading: boolean;
  totalRevenue: number;
  totalProfit: number;
}

const EarningsSummary = ({
  isLoading,
  totalRevenue,
  totalProfit,
}: EarningsSummaryProps) => {
  return (
    <div>
      <EarningsStats
        isLoading={isLoading}
        totalRevenue={totalRevenue}
        totalProfit={totalProfit}
      />
    </div>
  );
};

export default EarningsSummary;
