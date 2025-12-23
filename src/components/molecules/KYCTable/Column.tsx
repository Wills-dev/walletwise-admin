import Link from "next/link";

import { ArrowUpDown } from "lucide-react";
import { CellContext, createColumnHelper, Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import { KYCTableData } from "@/lib/types";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";
import ColumnActionDropdown from "../ColumnActionDropdown/ColumnActionDropdown";
import { formatDate } from "@/lib/helpers/dateFormats";

const columnHelper = createColumnHelper<KYCTableData>();

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
    cell: ({ row }: CellContext<KYCTableData, unknown>) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  columnHelper.accessor("id", {
    header: "ID",
  }),
  columnHelper.accessor("userID", {
    header: "Email",
  }),
  columnHelper.accessor("tier", {
    header: "Tier",
  }),
  columnHelper.accessor("bvn_status", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          BVN Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status = row.getValue("bvn_status") as string;
      return <StatusBubble status={status} />;
    },
  }),
  columnHelper.accessor("identity_status", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ID Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status = row.getValue("identity_status") as string;
      return <StatusBubble status={status} />;
    },
  }),
  columnHelper.accessor("nin_status", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          NIN Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status = row.getValue("nin_status") as string;
      return <StatusBubble status={status} />;
    },
  }),
  columnHelper.accessor("submission_date", {
    header: "Submission date",
    cell: ({ row }) => {
      const date: string = row.getValue("submission_date");
      const formatted = date ? formatDate(date) : "N/A";

      return <div className="font-medium whitespace-nowrap">{formatted}</div>;
    },
  }),

  {
    id: "actions",
    cell: ({ row }: CellContext<KYCTableData, unknown>) => {
      const kyc = row.original;

      return (
        <ColumnActionDropdown>
          <DropdownMenuItem>
            <Link href={`/manage-kyc/info/${kyc?.id}`}>View kyc info</Link>
          </DropdownMenuItem>
        </ColumnActionDropdown>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
];
