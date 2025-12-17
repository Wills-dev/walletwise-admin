import { Suspense } from "react";

import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import ReferralWrapper from "@/components/organisms/ReferralWrapper/ReferralWrapper";

import { ProtectedPage } from "@/components/ProtectedPage";

const ReferralPage = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <ProtectedPage
        requiredPermissions={[
          "admin_management.read",
          "admin_management.write",
          "admin_management.create",
        ]}
        requireAll={false}
      >
        <DashboardLayout title="Referrals">
          <ReferralWrapper />
        </DashboardLayout>
      </ProtectedPage>
    </Suspense>
  );
};

export default ReferralPage;
