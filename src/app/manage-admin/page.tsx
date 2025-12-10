import { Suspense } from "react";

import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import ManageAdminWrapper from "@/features/users/components/ManageAdminWrapper/ManageAdminWrapper";

const ManageAdminPage = () => {
  return (
    <DashboardLayout title="Manage Admin">
      <Suspense fallback={<MainLoader />}>
        <ManageAdminWrapper />
      </Suspense>
    </DashboardLayout>
  );
};

export default ManageAdminPage;
