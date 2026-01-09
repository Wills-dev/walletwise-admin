import { Suspense } from "react";

import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import DataWrapper from "@/features/services/components/DataWrapper/DataWrapper";

const DataServicePage = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <DataWrapper />
    </Suspense>
  );
};

export default DataServicePage;
