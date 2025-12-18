import { Suspense } from "react";

import AllTransactions from "@/components/organisms/AllTransactions/AllTransactions";
import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import MainLoader from "@/components/atoms/MainLoader/MainLoader";

import { ProtectedPage } from "@/components/ProtectedPage";

const AllTransactionsPage = () => {
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
        <DashboardLayout title="Transactions">
          <AllTransactions />{" "}
        </DashboardLayout>
      </ProtectedPage>
    </Suspense>
  );
};

export default AllTransactionsPage;
