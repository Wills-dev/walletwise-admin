import { Suspense } from "react";

import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import EarningsWrapper from "@/components/organisms/EarningsWrapper/EarningsWrapper";
import MainLoader from "@/components/atoms/MainLoader/MainLoader";

import { ProtectedPage } from "@/components/ProtectedPage";

const page = () => {
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
          <EarningsWrapper />
        </DashboardLayout>
      </ProtectedPage>
    </Suspense>
  );
};

export default page;
