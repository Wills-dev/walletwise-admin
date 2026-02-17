import Link from "next/link";

import { ArrowUpDown } from "lucide-react";
import { CellContext, createColumnHelper, Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

import ColumnActionDropdown from "@/components/molecules/ColumnActionDropdown/ColumnActionDropdown";
import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";

import { formatDate } from "@/lib/helpers/dateFormats";
import { UserDisputeType } from "../../types";

const columnHelper = createColumnHelper<UserDisputeType>();

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
    cell: ({ row }: CellContext<UserDisputeType, unknown>) => (
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
          Dispute date
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
  columnHelper.accessor("transaction_date", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Transaction date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date: string = row.getValue("transaction_date");
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
  columnHelper.accessor("category", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Category
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  }),
  columnHelper.accessor("product_name", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Product name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  }),
  columnHelper.accessor("transaction_status", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Transaction Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status = row.getValue("transaction_status") as string;
      return <StatusBubble status={status} />;
    },
  }),
  columnHelper.accessor("dispute_status", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Dispute Status
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
    cell: ({ row }: CellContext<UserDisputeType, unknown>) => {
      const dispute = row.original;

      return (
        <>
          <ColumnActionDropdown>
            <DropdownMenuItem>
              <Link href={`/tickets/info/${dispute?.id}`}>
                View ticket info
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href={`/services/${dispute?.category}/info/${dispute?.transaction_id}`}
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
