"use client";

import { use } from "react";

import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import ServiceInfoWrapper from "@/features/services/components/ServiceInfoWrapper/ServiceInfoWrapper";

const GiftcardInfoPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);

  return (
    <DashboardLayout title="Admin Info">
      <ServiceInfoWrapper serviceId={id} />
    </DashboardLayout>
  );
};

export default GiftcardInfoPage;
