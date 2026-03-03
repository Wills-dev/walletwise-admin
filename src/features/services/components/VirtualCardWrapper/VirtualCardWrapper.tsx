"use client";

import CardSubWrapper from "../CardSubWrapper/CardSubWrapper";
import ServiceLayout from "@/components/templates/ServiceLayout/ServiceLayout";
import VirtualCardRating from "../VirtualCardRating/VirtualCardRating";

import { useTableState } from "@/lib/hooks/useTableState";

const VirtualCardWrapper = () => {
  const { virtualTab, handleSwitchVirtualTab } = useTableState();

  const tabs = [
    {
      value: "card-creation",
      label: "Card Creation",
      content: <CardSubWrapper service="card-creation" />,
    },
    {
      value: "card-topup",
      label: "Card Top Up",
      content: <CardSubWrapper service="card-topup" />,
    },
    {
      value: "card-refund",
      label: "Card Refund",
      content: <CardSubWrapper service="card-refund" />,
    },
    {
      value: "card-withdrawal",
      label: "Card Withdrawal",
      content: <CardSubWrapper service="card-withdrawal" />,
    },
    {
      value: "Rating",
      label: "Virtual Card Rating",
      content: <VirtualCardRating />,
    },
  ];
  return (
    <ServiceLayout
      title={`Virtual Card Transactions`}
      tabs={tabs}
      defaultTab={virtualTab}
      onClick={handleSwitchVirtualTab}
    />
  );
};

export default VirtualCardWrapper;
