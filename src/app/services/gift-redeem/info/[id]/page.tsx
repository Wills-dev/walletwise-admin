"use client";

import { use } from "react";

import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import RedeemGiftInfoWrapper from "@/features/services/components/RedeemGiftInfoWrapper/RedeemGiftInfoWrapper";

const RedeemGiftInfoPage = ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = use(params);

  return (
    <DashboardLayout title="Redeem Gift Info">
      <RedeemGiftInfoWrapper serviceId={id} />
    </DashboardLayout>
  );
};

export default RedeemGiftInfoPage;
