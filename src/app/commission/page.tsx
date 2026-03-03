import { Suspense } from "react";

import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import UserCommissionWrapper from "@/components/organisms/UserCommissionWrapper/UserCommissionWrapper";

import { ProtectedPage } from "@/components/ProtectedPage";

const CommissionPage = () => {
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
        <UserCommissionWrapper />
      </ProtectedPage>
    </Suspense>
  );
};

export default CommissionPage;
