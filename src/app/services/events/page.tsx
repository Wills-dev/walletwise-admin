import { Suspense } from "react";

import MainLoader from "@/components/atoms/MainLoader/MainLoader";
import EventsWrapper from "@/features/services/components/EventsWrapper/EventsWrapper";
import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";

const EventsPage = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <DashboardLayout title="Events" className="pt-0 pb-20">
        <EventsWrapper />
      </DashboardLayout>
    </Suspense>
  );
};

export default EventsPage;
