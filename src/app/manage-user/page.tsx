import { Suspense } from "react";

import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import ManageUserWrapper from "@/features/users/components/ManageUserWrapper/ManageUserWrapper";

const page = () => {
  return (
    <DashboardLayout title="Manage Users">
      <Suspense fallback={<MainLoader />}>
        <ManageUserWrapper />
      </Suspense>
    </DashboardLayout>
  );
};

export default page;
