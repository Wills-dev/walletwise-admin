import { Suspense } from "react";

import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import ServiceWrapper from "@/features/services/components/ServiceWrapper/ServiceWrapper";

const BettingServicePage = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <ServiceWrapper service="betting" />
    </Suspense>
  );
};

export default BettingServicePage;
