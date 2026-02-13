import { Suspense } from "react";

import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import ServiceWrapper from "@/features/services/components/ServiceWrapper/ServiceWrapper";

const EsimPage = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <ServiceWrapper service="esim" />
    </Suspense>
  );
};

export default EsimPage;
