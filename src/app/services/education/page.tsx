import { Suspense } from "react";

import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import ServiceWrapper from "@/features/services/components/ServiceWrapper/ServiceWrapper";

const AirtimeServicePage = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <ServiceWrapper service="education" />
    </Suspense>
  );
};

export default AirtimeServicePage;
