import { Suspense } from "react";

import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import AirtimeWrapper from "@/features/services/components/AirtimeWrapper/AirtimeWrapper";

const AirtimeServicePage = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <AirtimeWrapper />
    </Suspense>
  );
};

export default AirtimeServicePage;
