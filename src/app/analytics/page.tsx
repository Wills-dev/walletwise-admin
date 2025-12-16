import AnalyticsWrapper from "@/components/organisms/AnalyticsWrapper/AnalyticsWrapper";
import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";

import { ProtectedPage } from "@/components/ProtectedPage";

const AnalyticsPage = () => {
  return (
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
  );
};

export default AnalyticsPage;
