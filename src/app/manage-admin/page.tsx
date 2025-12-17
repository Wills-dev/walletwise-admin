import { Suspense } from "react";

import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import ManageAdminWrapper from "@/features/users/components/ManageAdminWrapper/ManageAdminWrapper";
import { ProtectedPage } from "@/components/ProtectedPage";

const ManageAdminPage = () => {
  return (
    <ProtectedPage
      requiredPermissions={[
        "admin_management.read",
        "admin_management.write",
        "admin_management.create",
      ]}
      requireAll={false}
    >
      <DashboardLayout title="Manage Admin">
        <Suspense fallback={<MainLoader />}>
          <ManageAdminWrapper />
        </Suspense>
      </DashboardLayout>
    </ProtectedPage>
  );
};

export default ManageAdminPage;
