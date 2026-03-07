import Link from "next/link";

import { ArrowUpDown } from "lucide-react";
import { CellContext, createColumnHelper, Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

import ColumnActionDropdown from "@/components/molecules/ColumnActionDropdown/ColumnActionDropdown";

import { StreakAnalytics } from "@/lib/types";
import { numberWithCommas } from "@/lib/helpers";
import { formatDate } from "@/lib/helpers/dateFormats";
import UserTableLink from "@/components/atoms/UserTableLink/UserTableLink";

const columnHelper = createColumnHelper<StreakAnalytics>();

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
    cell: ({ row }: CellContext<StreakAnalytics, unknown>) => (
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
    cell: ({ row }: CellContext<StreakAnalytics, string>) => {
      return <div className="text-center font-medium">{row.index + 1}</div>;
    },
    enableSorting: false,
    enableHiding: false,
  },
  columnHelper.accessor("fullName", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Full name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }: CellContext<StreakAnalytics, unknown>) => {
      const user = row.original;

      return <UserTableLink name={user?.fullName} id={user?.id} />;
    },
  }),
  columnHelper.accessor("userTag", {
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
    cell: ({ row }: CellContext<StreakAnalytics, unknown>) => {
      const user = row.original;

      return <UserTableLink name={user?.userTag} id={user?.id} />;
    },
  }),
  columnHelper.accessor("currentStreak", {
    header: "Current Streak ",
    cell: ({ getValue }) => {
      const currentStreak = getValue();
      const formattedCurrentStreak = numberWithCommas(currentStreak);
      return (
        <div>
          <span className="font-medium">{formattedCurrentStreak}</span>
        </div>
      );
    },
  }),
  columnHelper.accessor("totalCompletedStreaks", {
    header: "Total Completed Streaks ",
    cell: ({ getValue }) => {
      const totalCompletedStreaks = getValue();
      const formattedCurrentStreak = numberWithCommas(totalCompletedStreaks);
      return (
        <div>
          <span className="font-medium">{formattedCurrentStreak}</span>
        </div>
      );
    },
  }),
  columnHelper.accessor("totalCheckins", {
    header: "Total Check In ",
    cell: ({ getValue }) => {
      const totalCheckins = getValue();
      const formattedCurrentStreak = numberWithCommas(totalCheckins);
      return (
        <div>
          <span className="font-medium">{formattedCurrentStreak}</span>
        </div>
      );
    },
  }),
  columnHelper.accessor("individualEarnings", {
    header: "Earnings ",
    cell: ({ getValue }) => {
      const individualEarnings = getValue();
      const formattedEarniing = numberWithCommas(individualEarnings);
      return (
        <div>
          <span className="font-medium">₦{formattedEarniing}</span>
        </div>
      );
    },
  }),

  columnHelper.accessor("lastCheckinDate", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Last Check In Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const lastCheckinDate: string = row.getValue("lastCheckinDate");
      const formatted = lastCheckinDate ? formatDate(lastCheckinDate) : "";
      return <div className="">{formatted}</div>;
    },
  }),

  {
    id: "actions",
    cell: ({ row }: CellContext<StreakAnalytics, unknown>) => {
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
