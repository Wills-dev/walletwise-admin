import CommissionSummary from "@/components/molecules/CommissionSummary/CommissionSummary";
import CommissionTable from "@/components/molecules/CommissionTable/CommissionTable";

const CommissionWrapper = () => {
  return (
    <div className="space-y-6">
      <CommissionSummary />
      <CommissionTable />
    </div>
  );
};

export default CommissionWrapper;
