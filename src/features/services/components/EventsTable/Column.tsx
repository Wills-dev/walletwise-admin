import { ArrowUpDown } from "lucide-react";
import { CellContext, createColumnHelper, Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import { convertDateFormat, formatTime } from "@/lib/helpers/dateFormats";
import { EventsType } from "../../types";
import { numberWithCommas } from "@/lib/helpers";

import EventActionCell from "../EventActionCell/EventActionCell";
import Link from "next/link";

const columnHelper = createColumnHelper<EventsType>();

interface ColumnProps<TData = unknown> {
  table: Table<TData>;
}

export const Column = [
  {
    id: "select",
    header: ({ table }: ColumnProps) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }: CellContext<EventsType, unknown>) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  columnHelper.accessor("date", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date: string = row.getValue("date");
      const formatted = date ? convertDateFormat(date) : "";
      return <div className="whitespace-nowrap">{formatted}</div>;
    },
  }),
  columnHelper.accessor("time", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Time
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date: string = row.getValue("time");
      const formatted = date ? formatTime(date) : "";
      return <div className="whitespace-nowrap">{formatted}</div>;
    },
  }),
  columnHelper.accessor("title", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const event = row.original;

      return (
        <Link
          href={`/services/events/info/${event?.event_id}`}
          className="hover:text-purple-600 hover:underline transition-all duration-300 text-center w-full capitalize"
        >
          {event?.title}
        </Link>
      );
    },
  }),

  columnHelper.accessor((row) => row.ticket_types["Table (10)"]?.price, {
    id: "Table (10)_price",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Table 10 Price
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ getValue }) => {
      const amount = getValue<number>();

      const formatted = amount
        ? new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "NGN",
          }).format(amount)
        : "N/A";

      return <div className="font-medium">{formatted}</div>;
    },
  }),
  columnHelper.accessor((row) => row.ticket_types["Table (10)"]?.quantity, {
    id: "Table (10)_quantity",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Table (10) Quantity
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ getValue }) => {
      const quantity = getValue<number>();

      const formatted = quantity ? numberWithCommas(quantity) : "N/A";

      return <div className="font-medium">{formatted}</div>;
    },
  }),
  columnHelper.accessor((row) => row.ticket_types["Table (8)"]?.price, {
    id: "Table (8)_price",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Table (8) Price
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ getValue }) => {
      const amount = getValue<number>();

      const formatted = amount
        ? new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "NGN",
          }).format(amount)
        : "N/A";

      return <div className="font-medium">{formatted}</div>;
    },
  }),
  columnHelper.accessor((row) => row.ticket_types["Table (8)"]?.quantity, {
    id: "Table (8)_quantity",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Table (8) Quantity
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ getValue }) => {
      const quantity = getValue<number>();

      const formatted = quantity ? numberWithCommas(quantity) : "N/A";

      return <div className="font-medium">{formatted}</div>;
    },
  }),
  columnHelper.accessor((row) => row.ticket_types["Table (6)"]?.price, {
    id: "Table (6)_price",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Table (6) Price
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ getValue }) => {
      const amount = getValue<number>();

      const formatted = amount
        ? new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "NGN",
          }).format(amount)
        : "N/A";

      return <div className="font-medium">{formatted}</div>;
    },
  }),
  columnHelper.accessor((row) => row.ticket_types["Table (6)"]?.quantity, {
    id: "Table (6)_quantity",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Table (6) Quantity
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ getValue }) => {
      const quantity = getValue<number>();

      const formatted = quantity ? numberWithCommas(quantity) : "N/A";

      return <div className="font-medium">{formatted}</div>;
    },
  }),
  columnHelper.accessor((row) => row.ticket_types?.Table?.price, {
    id: "table_price",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Table Price
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ getValue }) => {
      const amount = getValue<number>();

      const formatted = amount
        ? new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "NGN",
          }).format(amount)
        : "N/A";

      return <div className="font-medium">{formatted}</div>;
    },
  }),
  columnHelper.accessor((row) => row.ticket_types?.Table?.quantity, {
    id: "Table_quantity",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Table Quantity
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ getValue }) => {
      const quantity = getValue<number>();

      const formatted = quantity ? numberWithCommas(quantity) : "N/A";

      return <div className="font-medium">{formatted}</div>;
    },
  }),

  columnHelper.accessor((row) => row.ticket_types?.vip?.price, {
    id: "vip_price",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        VIP Price
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ getValue }) => {
      const amount = getValue<number>();

      const formatted = amount
        ? new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "NGN",
          }).format(amount)
        : "N/A";

      return <div className="font-medium">{formatted}</div>;
    },
  }),
  columnHelper.accessor((row) => row.ticket_types?.vip?.quantity, {
    id: "vip_quantity",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        VIP Quantity
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ getValue }) => {
      const quantity = getValue<number>();

      const formatted = quantity ? numberWithCommas(quantity) : "N/A";

      return <div className="font-medium">{formatted}</div>;
    },
  }),

  columnHelper.accessor((row) => row.ticket_types?.regular?.price, {
    id: "regular_price",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Regular Price
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ getValue }) => {
      const amount = getValue<number>();

      const formatted = amount
        ? new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "NGN",
          }).format(amount)
        : "N/A";

      return <div className="font-medium">{formatted}</div>;
    },
  }),
  columnHelper.accessor((row) => row.ticket_types?.regular?.quantity, {
    id: "regular_quantity",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Regular Quantity
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ getValue }) => {
      const quantity = getValue<number>();

      const formatted = quantity ? numberWithCommas(quantity) : "N/A";

      return <div className="font-medium">{formatted}</div>;
    },
  }),
  columnHelper.accessor((row) => row.ticket_types?.free?.quantity, {
    id: "free_quantity",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Free Quantity
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ getValue }) => {
      const quantity = getValue<number>();

      const formatted = quantity ? numberWithCommas(quantity) : "N/A";

      return <div className="font-medium">{formatted}</div>;
    },
  }),
  columnHelper.accessor("total_attendees", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Total Attendees
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const totalAttendees = parseFloat(row.getValue("total_attendees"));
      const formatted = totalAttendees
        ? numberWithCommas(Number(totalAttendees))
        : 0;
      return <div className=" font-medium">{formatted}</div>;
    },
  }),
  columnHelper.accessor("total_tickets_sold", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Total Tickets Sold
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const ticketsSold = parseFloat(row.getValue("total_tickets_sold"));
      const formatted = numberWithCommas(ticketsSold);
      return <div className=" font-medium">{formatted}</div>;
    },
  }),

  {
    id: "actions",
    cell: ({ row }: CellContext<EventsType, unknown>) => {
      const event = row.original;

      return <EventActionCell eventId={event?.event_id} />;
    },
    enableSorting: false,
    enableHiding: false,
  },
];
