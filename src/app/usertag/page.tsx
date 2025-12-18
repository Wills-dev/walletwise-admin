import { Suspense } from "react";

import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import UsertagTransactions from "@/components/organisms/UsertagTransactions/UsertagTransactions";

import { ProtectedPage } from "@/components/ProtectedPage";

const UsertagTransactionPage = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <ProtectedPage
        requiredPermissions={[
          "admin_management.read",
          "admin_management.write",
          "admin_management.create",
          "user_management.read",
          "user_management.write",
          "user_management.create",
        ]}
        requireAll={false}
      >
        <DashboardLayout title="Usertag">
          <UsertagTransactions />
        </DashboardLayout>
      </ProtectedPage>
    </Suspense>
  );
};

export default UsertagTransactionPage;
