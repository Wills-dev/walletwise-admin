import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import SavingsInfoWrapper from "@/features/services/components/SavingsInfoWrapper/SavingsInfoWrapper";

import { use } from "react";

const SavingsInfoPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  return (
    <DashboardLayout title="Service Info">
      <SavingsInfoWrapper savingsId={id} />
    </DashboardLayout>
  );
};

export default SavingsInfoPage;
