import Link from "next/link";

import { ArrowUpDown } from "lucide-react";
import { CellContext, createColumnHelper, Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";
import ColumnActionDropdown from "@/components/molecules/ColumnActionDropdown/ColumnActionDropdown";

import { SupportActivityLog } from "../../types";
import { formatDate } from "@/lib/helpers/dateFormats";
import { formatString } from "@/lib/helpers/formatString";

const columnHelper = createColumnHelper<SupportActivityLog>();

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
    cell: ({ row }: CellContext<SupportActivityLog, unknown>) => (
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
  columnHelper.accessor("admin_first_name", {
    header: () => <div className="whitespace-nowrap">Support Name</div>,
    cell: ({ row }) => {
      const agent = row.original;
      return (
        <p className="">
          {agent?.admin_first_name} {agent?.admin_last_name}
        </p>
      );
    },
  }),
  columnHelper.accessor("action_type", {
    header: () => <div className="whitespace-nowrap">Action type</div>,
    cell: ({ row }) => {
      const agent = row.original;
      return (
        <p className="capitalize">
          {agent?.action_type && formatString(agent?.action_type)}
        </p>
      );
    },
  }),
  columnHelper.accessor("old_status", {
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
      const status = row.getValue("old_status") as string;
      return <StatusBubble status={status} />;
    },
  }),
  columnHelper.accessor("new_status", {
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
      const status = row.getValue("new_status") as string;
      return <StatusBubble status={status} />;
    },
  }),
  columnHelper.accessor("subject", {
    header: () => <div className="whitespace-nowrap">Email Subject</div>,
  }),
  {
    id: "actions",
    cell: ({ row }: CellContext<SupportActivityLog, unknown>) => {
      const agent = row.original;

      return (
        <ColumnActionDropdown>
          <DropdownMenuItem>
            <Link href={`/tickets/info/${agent.dispute_id}`}>View ticket</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={`/manage-admin/info/${agent.admin_id}`}>
              View Support Agent
            </Link>
          </DropdownMenuItem>
        </ColumnActionDropdown>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
];
