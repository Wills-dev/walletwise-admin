import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import ProfileWrapper from "@/features/users/components/ProfileWrapper/ProfileWrapper";

const ProfilePage = () => {
  return (
    <DashboardLayout title="Profile">
      <ProfileWrapper />
    </DashboardLayout>
  );
};

export default ProfilePage;
