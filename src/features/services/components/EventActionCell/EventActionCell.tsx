"use client";

import Link from "next/link";

import ColumnActionDropdown from "@/components/molecules/ColumnActionDropdown/ColumnActionDropdown";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

const EventActionCell = ({ eventId }: { eventId: string }) => {
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
          <button className="text-red-500 cursor-pointer">Delete Event</button>
        </DropdownMenuItem>
      </ColumnActionDropdown>
    </>
  );
};

export default EventActionCell;
