import Link from "next/link";

import { ArrowUpDown } from "lucide-react";
import { CellContext, createColumnHelper, Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

import ColumnActionDropdown from "@/components/molecules/ColumnActionDropdown/ColumnActionDropdown";

import { ReferralUser } from "@/lib/types";

const columnHelper = createColumnHelper<ReferralUser>();

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
    cell: ({ row }: CellContext<ReferralUser, unknown>) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "serialNumber",
    header: "S/N",
    cell: ({ row }: CellContext<ReferralUser, unknown>) => {
      return <div className="text-center font-medium">{row.index + 1}</div>;
    },
    enableSorting: false,
    enableHiding: false,
  },
  columnHelper.accessor("first_name", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          First Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  }),

  columnHelper.accessor("last_name", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Last Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  }),

  columnHelper.accessor("user_tag", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          User tag
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  }),

  columnHelper.accessor("referred_by", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Referred By
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  }),

  columnHelper.accessor("referral_count", {
    header: "Referral count ",
  }),

  {
    id: "actions",
    cell: ({ row }: CellContext<ReferralUser, unknown>) => {
      const user = row.original;

      return (
        <ColumnActionDropdown>
          <DropdownMenuItem>
            <Link href={`/manage-user/info/${user.id}`}>View user info</Link>
          </DropdownMenuItem>
        </ColumnActionDropdown>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
];
