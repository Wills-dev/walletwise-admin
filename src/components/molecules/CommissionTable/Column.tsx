import Link from "next/link";

import { ArrowUpDown } from "lucide-react";
import { CellContext, createColumnHelper, Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

import ColumnActionDropdown from "@/components/molecules/ColumnActionDropdown/ColumnActionDropdown";

import { UserCommissionAnalytics } from "@/lib/types";

const columnHelper = createColumnHelper<UserCommissionAnalytics>();

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
    cell: ({ row }: CellContext<UserCommissionAnalytics, unknown>) => (
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
    cell: ({ row }: CellContext<UserCommissionAnalytics, string>) => {
      return <div className="text-center font-medium">{row.index + 1}</div>;
    },
    enableSorting: false,
    enableHiding: false,
  },
  columnHelper.accessor("full_name", {
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
  columnHelper.accessor("services.airtime", {
    header: "Airtime ",
    cell: ({ getValue }) => {
      const airtime = getValue();
      return (
        <div>
          <span className="font-medium">{airtime.count}</span>
          <span className="text-gray-500 ml-1">
            (₦{airtime.volume.toLocaleString()})
          </span>
        </div>
      );
    },
  }),
  columnHelper.accessor("services.betting", {
    header: "Betting ",
    cell: ({ getValue }) => {
      const betting = getValue();
      return (
        <div>
          <span className="font-medium">{betting.count}</span>
          <span className="text-gray-500 ml-1">
            (₦{betting.volume.toLocaleString()})
          </span>
        </div>
      );
    },
  }),
  columnHelper.accessor("services.cable", {
    header: "Cable ",
    cell: ({ getValue }) => {
      const cable = getValue();
      return (
        <div>
          <span className="font-medium">{cable.count}</span>
          <span className="text-gray-500 ml-1">
            (₦{cable.volume.toLocaleString()})
          </span>
        </div>
      );
    },
  }),
  columnHelper.accessor("services.data", {
    header: "Data ",
    cell: ({ getValue }) => {
      const data = getValue();
      return (
        <div>
          <span className="font-medium">{data.count}</span>
          <span className="text-gray-500 ml-1">
            (₦{data.volume.toLocaleString()})
          </span>
        </div>
      );
    },
  }),
  columnHelper.accessor("services.education", {
    header: "Education",
    cell: ({ getValue }) => {
      const education = getValue();
      return (
        <div>
          <span className="font-medium">{education?.count || 0}</span>
          <span className="text-gray-500 ml-1">
            (₦{education?.volume?.toLocaleString() || 0})
          </span>
        </div>
      );
    },
  }),
  columnHelper.accessor("services.electricity", {
    header: "Electricity",
    cell: ({ getValue }) => {
      const electricity = getValue();
      return (
        <div>
          <span className="font-medium">{electricity.count}</span>
          <span className="text-gray-500 ml-1">
            (₦{electricity.volume.toLocaleString()})
          </span>
        </div>
      );
    },
  }),

  columnHelper.accessor("services.giftcard", {
    header: "Giftcard ",
    cell: ({ getValue }) => {
      const giftcard = getValue();
      return (
        <div>
          <span className="font-medium">{giftcard.count}</span>
          <span className="text-gray-500 ml-1">
            (₦{giftcard.volume.toLocaleString()})
          </span>
        </div>
      );
    },
  }),
  columnHelper.accessor("services.transfer", {
    header: "Transfer ",
    cell: ({ getValue }) => {
      const transfer = getValue();
      return (
        <div>
          <span className="font-medium">{transfer.count}</span>
          <span className="text-gray-500 ml-1">
            (₦{transfer.volume.toLocaleString()})
          </span>
        </div>
      );
    },
  }),
  columnHelper.accessor("referral_count", {
    header: "Referal",
    cell: ({ getValue }) => {
      const referral = getValue();
      return (
        <div>
          <span className="font-medium">{referral}</span>
        </div>
      );
    },
  }),
  columnHelper.accessor("totals.user_commission", {
    header: "User commission",
    cell: ({ getValue }) => {
      const userCommission = getValue();
      return (
        <div>
          <span className="font-medium">
            ₦{userCommission.toLocaleString()}
          </span>
        </div>
      );
    },
  }),

  {
    id: "actions",
    cell: ({ row }: CellContext<UserCommissionAnalytics, unknown>) => {
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
