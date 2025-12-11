"use client";

import { use } from "react";

import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import AdminInfoWrapper from "@/features/users/components/AdminInfoWrapper/AdminInfoWrapper";

const AdminInfoPage = ({
  params,
}: {
  params: Promise<{ adminId: string }>;
}) => {
  const { adminId } = use(params);

  return (
    <DashboardLayout title="Admin Info">
      <AdminInfoWrapper adminId={adminId} />
    </DashboardLayout>
  );
};

export default AdminInfoPage;
