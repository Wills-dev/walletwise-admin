import { Suspense } from "react";

import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import UserCommissionWrapper from "@/components/organisms/UserCommissionWrapper/UserCommissionWrapper";

const CommissionPage = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <UserCommissionWrapper />
    </Suspense>
  );
};

export default CommissionPage;
