import { Suspense } from "react";

import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import VirtualCardWrapper from "@/features/services/components/VirtualCardWrapper/VirtualCardWrapper";

const VirtualCardPage = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <VirtualCardWrapper />
    </Suspense>
  );
};

export default VirtualCardPage;
