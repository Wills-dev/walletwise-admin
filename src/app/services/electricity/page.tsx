import { Suspense } from "react";

import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import ServiceWrapper from "@/features/services/components/ServiceWrapper/ServiceWrapper";

const ElectricityServicePage = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <ServiceWrapper service="electricity" />
    </Suspense>
  );
};

export default ElectricityServicePage;
