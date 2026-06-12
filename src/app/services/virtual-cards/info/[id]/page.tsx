import { Suspense, use } from "react";

import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import VirtualCardsInfoWrapper from "@/features/services/components/VirtualCardsInfoWrapper/VirtualCardsInfoWrapper";
import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";

const VirtualCardInfo = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  return (
    <DashboardLayout title="Virtual card info">
      <Suspense fallback={<MainLoader />}>
        <VirtualCardsInfoWrapper id={id} />
      </Suspense>
    </DashboardLayout>
  );
};

export default VirtualCardInfo;
