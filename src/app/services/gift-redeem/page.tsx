import { Suspense } from "react";

import MainLoader from "@/components/atoms/MainLoader/MainLoader";

import GiftCardWrapper from "@/features/services/components/GiftCardWrapper/GiftCardWrapper";
const page = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <GiftCardWrapper />
    </Suspense>
  );
};

export default page;
