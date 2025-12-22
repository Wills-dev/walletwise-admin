import { Suspense } from "react";

import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import MainLoader from "@/components/atoms/MainLoader/MainLoader";

import { ProtectedPage } from "@/components/ProtectedPage";
import NotificationWrapper from "@/components/organisms/NotificationWrapper/NotificationWrapper";

const NotificationPage = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      {" "}
      <ProtectedPage
        requiredPermissions={[
          "admin_management.read",
          "admin_management.write",
          "admin_management.create",
          "notification_management.create",
          "notification_management.write",
          "notification_management.read",
        ]}
        requireAll={false}
      >
        <DashboardLayout title="Notification">
          <NotificationWrapper />
        </DashboardLayout>
      </ProtectedPage>
    </Suspense>
  );
};

export default NotificationPage;
