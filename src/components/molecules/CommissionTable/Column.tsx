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
    cell: ({ row }: CellContext<UserCommissionAnalytics, unknown>) => {
      const user = row.original;

      return (
        <div>
          <Link
            href={`/manage-user/info/${user.id}`}
            className="hover:underline transition-all duration-300"
          >
            {user.full_name}
          </Link>
        </div>
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
    cell: ({ row }: CellContext<UserCommissionAnalytics, unknown>) => {
      const user = row.original;

      return (
        <div>
          <Link
            href={`/manage-user/info/${user.id}`}
            className="hover:underline transition-all duration-300"
          >
            {user.user_tag}
          </Link>
        </div>
      );
    },
  }),
  columnHelper.accessor("services.airtime", {
    header: () => (
      <>
        <span className="hidden lg:inline">Airtime</span>
        <span className="inline lg:hidden">AT</span>
      </>
    ),
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
    header: () => (
      <>
        <span className="hidden lg:inline">Betting</span>
        <span className="inline lg:hidden">BET</span>
      </>
    ),
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
    header: () => (
      <>
        <span className="hidden lg:inline">Cable</span>
        <span className="inline lg:hidden">CAB</span>
      </>
    ),
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
  columnHelper.accessor("services.card_creation", {
    header: () => (
      <>
        <span className="hidden lg:inline">Card Creation</span>
        <span className="inline lg:hidden">CC</span>
      </>
    ),
    cell: ({ getValue }) => {
      const card_creation = getValue();
      return (
        <div>
          <span className="font-medium">{card_creation.count}</span>
          <span className="text-gray-500 ml-1">
            (₦{card_creation.volume.toLocaleString()})
          </span>
        </div>
      );
    },
  }),
  columnHelper.accessor("services.card_topup", {
    header: () => (
      <>
        <span className="hidden lg:inline">Card Top Up</span>
        <span className="inline lg:hidden">CTU</span>
      </>
    ),
    cell: ({ getValue }) => {
      const card_topup = getValue();
      return (
        <div>
          <span className="font-medium">{card_topup.count}</span>
          <span className="text-gray-500 ml-1">
            (₦{card_topup.volume.toLocaleString()})
          </span>
        </div>
      );
    },
  }),
  columnHelper.accessor("services.card_withdrawal", {
    header: () => (
      <>
        <span className="hidden lg:inline">Card Withdrawal</span>
        <span className="inline lg:hidden">CW</span>
      </>
    ),
    cell: ({ getValue }) => {
      const card_withdrawal = getValue();
      return (
        <div>
          <span className="font-medium">{card_withdrawal.count}</span>
          <span className="text-gray-500 ml-1">
            (₦{card_withdrawal.volume.toLocaleString()})
          </span>
        </div>
      );
    },
  }),
  columnHelper.accessor("services.card_refund", {
    header: () => (
      <>
        <span className="hidden lg:inline">Card Refund</span>
        <span className="inline lg:hidden">CR</span>
      </>
    ),
    cell: ({ getValue }) => {
      const card_refund = getValue();
      return (
        <div>
          <span className="font-medium">{card_refund.count}</span>
          <span className="text-gray-500 ml-1">
            (₦{card_refund.volume.toLocaleString()})
          </span>
        </div>
      );
    },
  }),
  columnHelper.accessor("services.data", {
    header: () => (
      <>
        <span className="">Data</span>
      </>
    ),
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
    header: () => (
      <>
        <span className="hidden lg:inline">Education</span>
        <span className="inline lg:hidden">EDU</span>
      </>
    ),
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
    header: () => (
      <>
        <span className="hidden lg:inline">Electricity</span>
        <span className="inline lg:hidden">ELEC</span>
      </>
    ),
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
  columnHelper.accessor("services.esim", {
    header: "E-sim",
    cell: ({ getValue }) => {
      const esim = getValue();
      return (
        <div>
          <span className="font-medium">{esim.count}</span>
          <span className="text-gray-500 ml-1">
            (₦{esim.volume.toLocaleString()})
          </span>
        </div>
      );
    },
  }),
  columnHelper.accessor("services.giftcard", {
    header: () => (
      <>
        <span className="hidden lg:inline">Giftcard</span>
        <span className="inline lg:hidden">GC</span>
      </>
    ),
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
  columnHelper.accessor("services.giftcard_redeem", {
    header: () => (
      <>
        <span className="hidden lg:inline">Redeem Giftcard</span>
        <span className="inline lg:hidden">RGC</span>
      </>
    ),
    cell: ({ getValue }) => {
      const giftcard_redeem = getValue();
      return (
        <div>
          <span className="font-medium">{giftcard_redeem.count}</span>
          <span className="text-gray-500 ml-1">
            (₦{giftcard_redeem.volume.toLocaleString()})
          </span>
        </div>
      );
    },
  }),

  columnHelper.accessor("services.transfer", {
    header: () => (
      <>
        <span className="hidden lg:inline">Transfer</span>
        <span className="inline lg:hidden">TRF</span>
      </>
    ),
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
    header: () => (
      <>
        <span className="hidden lg:inline">User commission</span>
        <span className="inline lg:hidden">Comm</span>
      </>
    ),
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
