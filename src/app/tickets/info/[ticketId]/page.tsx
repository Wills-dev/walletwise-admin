"use client";

import { use } from "react";

import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import TicketInfoWrapper from "@/features/tickets/components/TicketInfoWrapper/TicketInfoWrapper";

const TicketInfoPage = ({
  params,
}: {
  params: Promise<{ ticketId: string }>;
}) => {
  const { ticketId } = use(params);

  return (
    <DashboardLayout title="Ticket Info">
      <TicketInfoWrapper ticketId={ticketId} />
    </DashboardLayout>
  );
};

export default TicketInfoPage;
