import { Suspense } from "react";

import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import TicketWrapper from "@/features/tickets/components/TicketWrapper/TicketWrapper";

const TicketsPage = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <DashboardLayout title="Tickets">
        <TicketWrapper />
      </DashboardLayout>
    </Suspense>
  );
};

export default TicketsPage;
