"use client";

import { use } from "react";

import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import UserInfoWrapper from "@/features/users/components/UserInfoWrapper/UserInfoWrapper";

const UserInfoPage = ({ params }: { params: Promise<{ userId: string }> }) => {
  const { userId } = use(params);
  return (
    <DashboardLayout title="Admin Info">
      <UserInfoWrapper userId={userId} />
    </DashboardLayout>
  );
};

export default UserInfoPage;
