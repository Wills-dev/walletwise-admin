"use client";

import { useTableState } from "@/lib/hooks/useTableState";

import CommissionWrapper from "../CommissionWrapper/CommissionWrapper";
import StreaksWrapper from "../StreaksWrapper/StreaksWrapper";
import CommissionLayout from "@/components/templates/CommissionLayout/CommissionLayout";

const UserCommissionWrapper = () => {
  const { handleSwithTab, tab } = useTableState();

  const tabs = [
    {
      value: "commission",
      label: "Commission",
      content: <CommissionWrapper />,
    },
    {
      value: "streaks",
      label: "Streaks",
      content: <StreaksWrapper />,
    },
  ];

  return (
    <CommissionLayout tabs={tabs} defaultTab={tab} onClick={handleSwithTab} />
  );
};

export default UserCommissionWrapper;
