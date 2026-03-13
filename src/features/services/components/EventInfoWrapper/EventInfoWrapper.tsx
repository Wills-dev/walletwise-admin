"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useDeleteEvent } from "../../hooks/useDeleteEvent";
import { useGetEventInfo } from "../../hooks/useGetEventInfo";

import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import AppBreadcrumb from "@/components/molecules/AppBreadcrumb/AppBreadcrumb";
import AdminInfoLoader from "@/components/atoms/skeleton/AdminInfoLoader";
import EventSummaryCard from "../EventSummaryCard/EventSummaryCard";
import EventAdminCard from "../EventAdminCard/EventAdminCard";
import EventAttendeesTable from "../EventAttendeesTable/EventAttendeesTable";
import ConfirmAction from "@/components/molecules/ConfirmAction/ConfirmAction";

const EventInfoWrapper = ({ eventId }: { eventId: string }) => {
  const router = useRouter();

  const [showStats, setShowStats] = useState(false);
  const [showAttendees, setShowAttendees] = useState(false);

  const { data, isLoading } = useGetEventInfo(eventId);
  const { isOpen, onCancel, isPending, setIsOpen, deleteEvent } =
    useDeleteEvent();

  const toggleStats = () => {
    setShowStats((prev) => !prev);
    setShowAttendees(false);
  };

  const toggleAttendees = () => {
    setShowAttendees((prev) => !prev);
    setShowStats(false);
  };

  const onEditEvent = () =>
    router.push(`/services/events/info/${eventId}/edit`);

  const eventBreadcrumb = [
    { label: `Event Management`, href: `/services/events` },
    { label: "Event Info" },
  ];

  return (
    <div className="space-y-4 max-w-6xl mx-auto">
      {isLoading ? (
        <AdminInfoLoader />
      ) : (
        <>
          <div className="flex justify-between flex-wrap gap-4">
            <PageTitle title="Event Details" description="" />
          </div>
          <AppBreadcrumb items={eventBreadcrumb} />
          <EventAdminCard
            data={data?.event}
            onViewStats={toggleStats}
            onEdit={onEditEvent}
            total_attendees={data?.stats?.total_attendees}
            onViewAttendees={toggleAttendees}
            onDelete={() => setIsOpen(true)}
          />
          {showStats && (
            <EventSummaryCard
              isLoading={isLoading}
              total_attendees={data?.stats?.total_attendees}
              total_revenue={data?.stats?.total_revenue}
              regular_total_quantity={
                data?.stats?.ticket_sales?.regular?.total_quantity
              }
              regular_sold={data?.stats?.ticket_sales?.regular?.sold}
              regular_available={data?.stats?.ticket_sales?.regular?.available}
              regular_price={data?.stats?.ticket_sales?.regular?.price}
              vip_total_quantity={
                data?.stats?.ticket_sales?.vip?.total_quantity
              }
              vip_sold={data?.stats?.ticket_sales?.vip?.sold}
              vip_available={data?.stats?.ticket_sales?.vip?.available}
              vip_price={data?.stats?.ticket_sales?.vip?.price}
              free_total_quantity={
                data?.stats?.ticket_sales?.free?.total_quantity
              }
              free_sold={data?.stats?.ticket_sales?.free?.sold}
              free_available={data?.stats?.ticket_sales?.free?.available}
            />
          )}
          {showAttendees && <EventAttendeesTable eventId={eventId} />}
          <ConfirmAction
            isPending={isPending}
            open={isOpen}
            setOpen={setIsOpen}
            onCancel={onCancel}
            onConfirm={() => deleteEvent({ eventId })}
            title="Delete event"
            description="Are you sure you want to delete this event?"
          />
        </>
      )}
    </div>
  );
};

export default EventInfoWrapper;
