import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import ReferralsTable from "@/components/molecules/ReferralsTable/ReferralsTable";

const ReferralWrapper = () => {
  return (
    <div className="space-y-6">
      <PageTitle
        title="Users Referrals"
        description="Manage and track user referrals"
      />
      <ReferralsTable />
    </div>
  );
};

export default ReferralWrapper;
