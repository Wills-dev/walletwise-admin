import { Suspense } from "react";

import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import ServiceWrapper from "@/features/services/components/ServiceWrapper/ServiceWrapper";

const CardRefundPage = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <ServiceWrapper service="card-refund" />
    </Suspense>
  );
};

export default CardRefundPage;
