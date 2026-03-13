"use client";

import { use } from "react";

import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import EventInfoWrapper from "@/features/services/components/EventInfoWrapper/EventInfoWrapper";

const EventInfoPage = ({
  params,
}: {
  params: Promise<{ eventId: string }>;
}) => {
  const { eventId } = use(params);

  return (
    <DashboardLayout title="Event Info">
      <EventInfoWrapper eventId={eventId} />
    </DashboardLayout>
  );
};

export default EventInfoPage;
