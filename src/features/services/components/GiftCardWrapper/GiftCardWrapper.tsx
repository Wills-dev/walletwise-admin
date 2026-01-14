"use client";

import { AnimatePresence } from "framer-motion";

// import { useAdminPermission } from "@/lib/hooks/useAdminPermission";

import ServiceLayout from "@/components/templates/ServiceLayout/ServiceLayout";
import GiftcardRedemptionWrapper from "../GiftcardRedemptionWrapper/GiftcardRedemptionWrapper";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const GiftCardWrapper = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialTab = searchParams.get("redeem-tab") || "";

  const [tab, setTab] = useState(initialTab);
  //   const { hasPermission } = useAdminPermission();

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
    {
      value: "giftcard-rating",
      label: "Giftcard rating",
      content: <AnimatePresence></AnimatePresence>,
    },
  ];

  return (
    <ServiceLayout
      title={"Redeem Giftcard "}
      tabs={tabs}
      defaultTab={tab || "giftcard-redemption"}
      onClick={handleSwithTab}
    />
  );
};

export default GiftCardWrapper;
