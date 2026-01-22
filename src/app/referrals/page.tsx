import { Suspense } from "react";

import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import ReferralWrapper from "@/components/organisms/ReferralWrapper/ReferralWrapper";

const ReferralPage = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <DashboardLayout title="Referrals">
        <ReferralWrapper />
      </DashboardLayout>
    </Suspense>
  );
};

export default ReferralPage;
