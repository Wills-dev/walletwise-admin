import { Suspense } from "react";

import AnalyticsWrapper from "@/components/organisms/AnalyticsWrapper/AnalyticsWrapper";
import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";

import { ProtectedPage } from "@/components/ProtectedPage";
import MainLoader from "@/components/atoms/MainLoader/MainLoader";

const AnalyticsPage = () => {
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
        <DashboardLayout title="Analytics">
          <AnalyticsWrapper />
        </DashboardLayout>
      </ProtectedPage>
    </Suspense>
  );
};

export default AnalyticsPage;
