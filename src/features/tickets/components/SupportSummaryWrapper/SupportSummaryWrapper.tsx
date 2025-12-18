import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import SupportSummaryTable from "../SupportSummaryTable/SupportSummaryTable";

const SupportSummaryWrapper = () => {
  return (
    <div className="space-y-6">
      <PageTitle
        title="Support summary"
        description="Manage and track all customer support"
      />
      <SupportSummaryTable />
    </div>
  );
};

export default SupportSummaryWrapper;
