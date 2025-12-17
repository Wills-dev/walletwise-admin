"use client";

import { use } from "react";

import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import AdminInfoWrapper from "@/features/users/components/AdminInfoWrapper/AdminInfoWrapper";

import { ProtectedPage } from "@/components/ProtectedPage";

const AdminInfoPage = ({
  params,
}: {
  params: Promise<{ adminId: string }>;
}) => {
  const { adminId } = use(params);

  return (
    <ProtectedPage
      requiredPermissions={[
        "admin_management.read",
        "admin_management.write",
        "admin_management.create",
      ]}
      requireAll={false}
    >
      <DashboardLayout title="Admin Info">
        <AdminInfoWrapper adminId={adminId} />
      </DashboardLayout>
    </ProtectedPage>
  );
};

export default AdminInfoPage;
