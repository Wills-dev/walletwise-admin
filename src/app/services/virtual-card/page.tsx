import { Suspense } from "react";

import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import ServiceWrapper from "@/features/services/components/ServiceWrapper/ServiceWrapper";

const VirtualCardPage = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <ServiceWrapper service="virtual-card" />
    </Suspense>
  );
};

export default VirtualCardPage;
