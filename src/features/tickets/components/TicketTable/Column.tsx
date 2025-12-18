import Link from "next/link";

import { ArrowUpDown } from "lucide-react";
import { CellContext, createColumnHelper, Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

import ColumnActionDropdown from "@/components/molecules/ColumnActionDropdown/ColumnActionDropdown";
import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";

import { formatDate } from "@/lib/helpers/dateFormats";
import { TicketType } from "../../types";

const columnHelper = createColumnHelper<TicketType>();

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
    cell: ({ row }: CellContext<TicketType, unknown>) => (
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
      const date: string = row.getValue("created_at");
      const formatted = date ? formatDate(date) : "";
      return <div className="">{formatted}</div>;
    },
  }),
  columnHelper.accessor("dispute_id", {
    header: "Ticket ID",
  }),
  columnHelper.accessor("dispute_type", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Ticket Type
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  }),
  columnHelper.accessor("user.user_tag", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          User tag
          <ArrowUpDown className="ml-2 h-4 w-4 text-center" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const user = row.original?.user;

      return (
        <Link
          href={`/manage-user/info/${user?.id}`}
          className="hover:text-purple-600 hover:underline transition-all duration-300 text-center w-full"
        >
          {user?.user_tag}
        </Link>
      );
    },
  }),
  columnHelper.accessor("user.first_name", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Full Name
          <ArrowUpDown className="ml-2 h-4 w-4 text-center" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const user = row.original?.user;

      return (
        <Link
          href={`/manage-user/user-info/${user?.id}`}
          className="hover:text-purple-600 hover:underline transition-all duration-300 text-center w-full capitalize"
        >
          {user?.first_name} {user?.last_name}
        </Link>
      );
    },
  }),
  columnHelper.accessor("dispute_status", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status = row.getValue("dispute_status") as string;
      return <StatusBubble status={status} />;
    },
  }),

  {
    id: "actions",
    cell: ({ row }: CellContext<TicketType, unknown>) => {
      const dispute = row.original;

      return (
        <>
          <ColumnActionDropdown>
            <DropdownMenuItem>
              <Link href={`/tickets/info/${dispute?.id}`}>
                View ticket info
              </Link>
            </DropdownMenuItem>
            {/* <DropdownMenuItem>
              <Link href={`/manage-user/info/${dispute.user?.id}`}>
                View user info
              </Link>
            </DropdownMenuItem> */}
            <DropdownMenuItem>
              <Link
                href={`/services/${dispute?.transaction?.category}/info/${dispute?.transaction?.id}`}
              >
                View transaction info
              </Link>
            </DropdownMenuItem>
          </ColumnActionDropdown>
        </>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
];
