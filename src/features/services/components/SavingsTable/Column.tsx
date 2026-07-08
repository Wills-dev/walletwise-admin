import Link from "next/link";

import { ArrowUpDown } from "lucide-react";
import { CellContext, createColumnHelper } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { SavingsTransactionType } from "../../types/savings";

import TableDate from "@/components/atoms/TableDate/TableDate";
import NoWrapCell from "@/components/atoms/NoWrapCell/NoWrapCell";
import StatusPulse from "@/components/atoms/StatusPulse/StatusPulse";
import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";
import ColumnActionDropdown from "@/components/molecules/ColumnActionDropdown/ColumnActionDropdown";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

const columnHelper = createColumnHelper<SavingsTransactionType>();

export const Columns = [
  columnHelper.accessor("created_at", {
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Date
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <TableDate date={row.getValue("created_at")} showWithTime />
    ),
  }),

  columnHelper.accessor("reference", {
    header: "Reference",
    cell: ({ row }) => <NoWrapCell value={row.getValue("reference")} />,
  }),

  columnHelper.display({
    id: "user",
    header: "User",
    cell: ({ row }) => {
      const { first_name, last_name, user_flagged, userID } = row.original;

      return (
        <div className="flex items-center gap-2">
          <Link
            href={`/manage-user/info/${userID}`}
            className="hover:text-purple-600 hover:underline transition-all duration-300 text-center w-full"
          >{`${first_name} ${last_name}`}</Link>
          {user_flagged && <StatusPulse size="sm" variant="red" />}
        </div>
      );
    },
  }),

  columnHelper.accessor("user_tag", {
    header: "User Tag",
  }),

  columnHelper.accessor("plan_type", {
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Plan
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  }),

  columnHelper.accessor("category", {
    header: "Category",
  }),

  columnHelper.accessor("type", {
    header: "Type",
    cell: ({ row }) => <StatusBubble status={row.getValue("type")} />,
  }),

  columnHelper.accessor("amount", {
    header: "Amount",
    cell: ({ row }) => {
      const amount = Number(row.getValue("amount"));

      return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(amount);
    },
  }),

  columnHelper.accessor("balance_before", {
    header: "Balance Before",
    cell: ({ row }) => {
      const amount = Number(row.getValue("balance_before"));

      return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(amount);
    },
  }),

  columnHelper.accessor("balance_after", {
    header: "Balance After",
    cell: ({ row }) => {
      const amount = Number(row.getValue("balance_after"));

      return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(amount);
    },
  }),

  columnHelper.accessor("interest_rate", {
    header: "Interest",
    cell: ({ row }) =>
      row.original.category === "interest"
        ? `${row.original.interest_rate}%`
        : "-",
  }),

  columnHelper.accessor("account_status", {
    header: "Status",
    cell: ({ row }) => <StatusBubble status={row.getValue("account_status")} />,
  }),
  {
    id: "actions",
    cell: ({ row }: CellContext<SavingsTransactionType, unknown>) => {
      const transaction = row.original;

      return (
        <>
          <ColumnActionDropdown>
            <DropdownMenuItem>
              <Link href={`/services/savings/info/${transaction?.id}`}>
                View info
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={`/manage-user/info/${transaction.userID}`}>
                View user
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
