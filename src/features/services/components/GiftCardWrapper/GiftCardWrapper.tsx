"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { AnimatePresence } from "framer-motion";

import ServiceLayout from "@/components/templates/ServiceLayout/ServiceLayout";
import GiftcardRedemptionWrapper from "../GiftcardRedemptionWrapper/GiftcardRedemptionWrapper";
// import GiftcardRatingWrapper from "../GiftcardRatingWrapper/GiftcardRatingWrapper";
import GiftCardProductWrapper from "../GiftCardProductWrapper/GiftCardProductWrapper";
import GiftcardCategoryWrapper from "../GiftcardCategoryWrapper/GiftcardCategoryWrapper";

const GiftCardWrapper = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialTab = searchParams.get("redeem-tab") || "";

  const [tab, setTab] = useState(initialTab);

  const handleSwithTab = (tab: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (tab) params.set("redeem-tab", tab);
    else params.delete("redeem-tab");
    setTab(tab);
    router.replace(`?${params.toString()}`);
  };

  const tabs = [
    {
      value: "giftcard-redemption",
      label: "Giftcard redemption",
      content: (
        <AnimatePresence>
          <GiftcardRedemptionWrapper />
        </AnimatePresence>
      ),
    },
    // {
    //   value: "giftcard-rating",
    //   label: "Giftcard rating",
    //   content: (
    //     <AnimatePresence>
    //       <GiftcardRatingWrapper />
    //     </AnimatePresence>
    //   ),
    // },
    {
      value: "giftcard-products",
      label: "Giftcard products",
      content: (
        <AnimatePresence>
          <GiftCardProductWrapper />
        </AnimatePresence>
      ),
    },
    {
      value: "giftcard-category",
      label: "Giftcard category",
      content: (
        <AnimatePresence>
          <GiftcardCategoryWrapper />
        </AnimatePresence>
      ),
    },
  ];

  return (
    <ServiceLayout
      title="Redeem Giftcard "
      tabs={tabs}
      defaultTab={tab || "giftcard-redemption"}
      onClick={handleSwithTab}
    />
  );
};

export default GiftCardWrapper;
