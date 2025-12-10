import { Suspense } from "react";

import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import ServiceWrapper from "@/features/services/components/ServiceWrapper/ServiceWrapper";

const DataServicePage = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <ServiceWrapper service="data" />
    </Suspense>
  );
};

export default DataServicePage;
