import { Suspense } from "react";

import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import TransactionsWrapper from "@/components/organisms/TransactionsWrapper/TransactionsWrapper";

import { ProtectedPage } from "@/components/ProtectedPage";

const AllTransactionsPage = () => {
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
        <DashboardLayout title="Transactions">
          <TransactionsWrapper />
        </DashboardLayout>
      </ProtectedPage>
    </Suspense>
  );
};

export default AllTransactionsPage;
