import { TabType } from "@/lib/types";

import DashboardLayout from "../DashboardLayout/DashboardLayout";
import DynamicTabs from "@/components/molecules/DynamicTabs/DynamicTabs";

const CommissionLayout = ({
  tabs,

  defaultTab,
  onClick,
}: {
  tabs: TabType[];

  defaultTab: string;
  onClick: (value: string) => void;
}) => {
  return (
    <DashboardLayout title="User Commissions" className="pt-24 pb-20">
      <DynamicTabs tabs={tabs} defaultTab={defaultTab} onClick={onClick} />
    </DashboardLayout>
  );
};

export default CommissionLayout;
