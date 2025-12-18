"use client";

import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import TicketTable from "../TicketTable/TicketTable";

const AllTickets = () => {
  return (
    <div className="space-y-6">
      <PageTitle
        title="All tickets"
        description="Track and manage all tickets"
      />
      <TicketTable />
    </div>
  );
};

export default AllTickets;
