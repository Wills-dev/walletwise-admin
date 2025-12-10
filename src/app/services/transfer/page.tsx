import { Suspense } from "react";

import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import TransferWapper from "@/features/services/components/TransferWapper/TransferWapper";

const TransferServicePage = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <TransferWapper />
    </Suspense>
  );
};

export default TransferServicePage;
