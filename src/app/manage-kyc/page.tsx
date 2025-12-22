import { Suspense } from "react";

import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import ManageKycWrapper from "@/components/organisms/ManageKycWrapper/ManageKycWrapper";

const ManageKyc = () => {
  return (
    <DashboardLayout title="Manage KYC">
      <Suspense fallback={<MainLoader />}>
        <ManageKycWrapper />
      </Suspense>
    </DashboardLayout>
  );
};

export default ManageKyc;
