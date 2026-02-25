import { Suspense } from "react";

import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import ServiceWrapper from "@/features/services/components/ServiceWrapper/ServiceWrapper";

const CardCreationPage = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <ServiceWrapper service="card-creation" />
    </Suspense>
  );
};

export default CardCreationPage;
