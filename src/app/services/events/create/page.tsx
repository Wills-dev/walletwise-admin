import AppBreadcrumb from "@/components/molecules/AppBreadcrumb/AppBreadcrumb";
import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import CreateEventForm from "@/features/services/components/CreateEventForm/CreateEventForm";

import { eventBreadcrumb } from "@/features/services/constants/events";

const page = () => {
  return (
    <DashboardLayout title="Create Event" className="pt-0 pb-20">
      <div className="h-24 w-full" />

      <div className="py-6">
        <h2 className="sm:text-3xl text-2xl font-semibold dark:text-gray-300 capitalize">
          Create Event
        </h2>
      </div>
      <AppBreadcrumb items={eventBreadcrumb} />
      <CreateEventForm />
    </DashboardLayout>
  );
};

export default page;
