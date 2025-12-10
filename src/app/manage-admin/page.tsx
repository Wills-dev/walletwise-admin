import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import ManageAdminWrapper from "@/features/users/components/ManageAdminWrapper/ManageAdminWrapper";

const ManageAdminPage = () => {
  return (
    <DashboardLayout title="Manage Admin">
      <ManageAdminWrapper />
    </DashboardLayout>
  );
};

export default ManageAdminPage;
