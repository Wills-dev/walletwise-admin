"use client";

import Link from "next/link";

import ColumnActionDropdown from "@/components/molecules/ColumnActionDropdown/ColumnActionDropdown";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useDeleteEvent } from "../../hooks/useDeleteEvent";
import ConfirmAction from "@/components/molecules/ConfirmAction/ConfirmAction";

const EventActionCell = ({ eventId }: { eventId: string }) => {
  const { isOpen, onCancel, isPending, setIsOpen, deleteEvent } =
    useDeleteEvent();

  return (
    <>
      <ColumnActionDropdown>
        <DropdownMenuItem>
          <Link href={`/services/events/info/${eventId}`}>View info</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={`/services/events/info/${eventId}/edit`}>Edit Event</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button
            className="text-red-500 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(true);
            }}
          >
            Delete Event
          </button>
        </DropdownMenuItem>
      </ColumnActionDropdown>
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
  );
};

export default EventActionCell;
