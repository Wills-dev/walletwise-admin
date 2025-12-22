import { ArrowUpDown } from "lucide-react";
import { CellContext, createColumnHelper, Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import { CreatedBy, Notification } from "@/lib/types";
import { formatDate } from "@/lib/helpers/dateFormats";

import NotificationActionCell from "@/components/molecules/NotificationActionCell/NotificationActionCell";

const columnHelper = createColumnHelper<Notification>();

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
    cell: ({ row }: CellContext<Notification, unknown>) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  columnHelper.accessor("created_at", {
    header: () => <div className="">Date</div>,
    cell: ({ row }) => {
      const date: string = row.getValue("created_at");
      const formatted = formatDate(date);

      return <div className="font-medium whitespace-nowrap">{formatted}</div>;
    },
  }),
  columnHelper.accessor("subject", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Subject
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  }),
  columnHelper.accessor("message", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Message
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const message: string = row.getValue("message");
      return <div className="max-w-lg w-full break-words">{message}</div>;
    },
  }),

  columnHelper.accessor("created_by", {
    header: () => {
      return <p>Posted by</p>;
    },
    cell: ({ row }) => {
      const userId: CreatedBy = row.getValue("created_by");
      const displayName = `${userId?.first_name}  ${userId?.last_name}`;
      return <p className="capitalize">{displayName || "N/A"}</p>;
    },
  }),

  {
    id: "actions",
    cell: ({ row }: CellContext<Notification, unknown>) => {
      const notification = row.original;

      return <NotificationActionCell notificationId={notification?.id} />;
    },
    enableSorting: false,
    enableHiding: false,
  },
];
