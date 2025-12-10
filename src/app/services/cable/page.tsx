import { Suspense } from "react";

import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import ServiceWrapper from "@/features/services/components/ServiceWrapper/ServiceWrapper";

const CableServicePage = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <ServiceWrapper service="cable" />
    </Suspense>
  );
};

export default CableServicePage;
