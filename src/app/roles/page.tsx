import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";

import { ProtectedPage } from "@/components/ProtectedPage";
import RolesWrapper from "@/components/organisms/RolesWrapper/RolesWrapper";

const RolesPermissionPage = () => {
  return (
    <ProtectedPage
      requiredPermissions={[
        "admin_management.read",
        "admin_management.write",
        "admin_management.create",
      ]}
      requireAll={false}
    >
      <DashboardLayout title="Roles/permissions">
        <RolesWrapper />
      </DashboardLayout>
    </ProtectedPage>
  );
};

export default RolesPermissionPage;
