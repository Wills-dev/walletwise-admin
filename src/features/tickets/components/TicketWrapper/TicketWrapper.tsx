"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { useAdminPermission } from "@/lib/hooks/useAdminPermission";

import AllTickets from "../AllTickets/AllTickets";
import DynamicTabs from "@/components/molecules/DynamicTabs/DynamicTabs";
import SupportActivities from "../SupportActivities/SupportActivities";
import SupportSummaryWrapper from "../SupportSummaryWrapper/SupportSummaryWrapper";

const TicketWrapper = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { hasPermission } = useAdminPermission();

  const initialTab = searchParams.get("tab") || "";

  const [tab, setTab] = useState(initialTab);

  const handleSwithTab = (tab: string) => {
    const params = new URLSearchParams(searchParams.toString());
    setTab(tab);
    if (tab) params.set("tab", tab);
    else params.delete("tab");
    router.replace(`?${params.toString()}`);
  };

  const tabs = [
    {
      label: "All tickets",
      value: "",
      content: <AllTickets />,
    },
    {
      label: "Support activity logs",
      value: "support-activities",
      content: <SupportActivities />,
    },
    {
      label: "Support summary",
      value: "support-summary",
      content: <SupportSummaryWrapper />,
    },
  ];

  return (
    <div>
      {!hasPermission ? (
        <AllTickets />
      ) : (
        <DynamicTabs tabs={tabs} defaultTab={tab} onClick={handleSwithTab} />
      )}
    </div>
  );
};

export default TicketWrapper;
