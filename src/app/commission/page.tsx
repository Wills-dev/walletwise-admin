import { Suspense } from "react";

import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import CommissionWrapper from "@/components/organisms/CommissionWrapper/CommissionWrapper";

import { ProtectedPage } from "@/components/ProtectedPage";

const CommissionPage = () => {
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
        <DashboardLayout title="Commission">
          <CommissionWrapper />
        </DashboardLayout>
      </ProtectedPage>
    </Suspense>
  );
};

export default CommissionPage;
