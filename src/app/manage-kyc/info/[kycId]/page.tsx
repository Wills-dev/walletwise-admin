"use client";

import { use } from "react";

import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import KYCInfoWrapper from "@/components/organisms/KYCInfoWrapper/KYCInfoWrapper";

const KYCPage = ({ params }: { params: Promise<{ kycId: string }> }) => {
  const { kycId } = use(params);
  return (
    <DashboardLayout title="KYC info">
      <KYCInfoWrapper kycId={kycId} />
    </DashboardLayout>
  );
};

export default KYCPage;
