import { Suspense } from "react";

import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import SavingsWrapper from "@/features/services/components/SavingsWrapper/SavingsWrapper";

const SavingsPage = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <SavingsWrapper />
    </Suspense>
  );
};

export default SavingsPage;
