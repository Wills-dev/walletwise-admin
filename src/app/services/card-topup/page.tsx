import { Suspense } from "react";

import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import ServiceWrapper from "@/features/services/components/ServiceWrapper/ServiceWrapper";

const CardTopupPage = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <ServiceWrapper service="card-topup" />
    </Suspense>
  );
};

export default CardTopupPage;
