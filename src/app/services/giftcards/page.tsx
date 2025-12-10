import { Suspense } from "react";

import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import ServiceWrapper from "@/features/services/components/ServiceWrapper/ServiceWrapper";

const page = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <ServiceWrapper service="giftcard" />
    </Suspense>
  );
};

export default page;
