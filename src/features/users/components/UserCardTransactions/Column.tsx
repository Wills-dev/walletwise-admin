import Link from "next/link";

import { CellContext, createColumnHelper, Table } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

import ColumnActionDropdown from "@/components/molecules/ColumnActionDropdown/ColumnActionDropdown";

import { formatDate } from "@/lib/helpers/dateFormats";
import { CardTransaction } from "@/features/services/types/card";
import { numberWithCommas } from "@/lib/helpers";
import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";

interface ColumnProps<TData = unknown> {
  table: Table<TData>;
}

const columnHelper = createColumnHelper<CardTransaction>();

export const Column = [
  // SELECT
  {
    id: "select",
    header: ({ table }: ColumnProps<CardTransaction>) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      />
    ),
    cell: ({ row }: CellContext<CardTransaction, unknown>) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
    enableSorting: false,
  },

  columnHelper.accessor("date", {
    header: "Date",
    cell: ({ row }) => formatDate(row.getValue("date")),
  }),

  columnHelper.accessor("product_name", {
    header: "Product",
  }),

  columnHelper.accessor("type", {
    header: "Type",
    cell: ({ row }) => {
      const type = row.getValue("type") as string;

      return <StatusBubble status={type} />;
    },
  }),

  columnHelper.accessor("amount", {
    header: "Amount",
    cell: ({ row }) => {
      const amount: number = row.getValue("amount");

      return <div>₦{amount && numberWithCommas(amount)}</div>;
    },
  }),
  columnHelper.accessor("fee", {
    header: "Fee",
    cell: ({ row }) => {
      const fee: number = row.getValue("fee");

      return <div>₦{fee && numberWithCommas(fee)}</div>;
    },
  }),

  columnHelper.accessor("commission", {
    header: "Commission",
    cell: ({ row }) => {
      const commission: number = row.getValue("commission");

      return <div>₦{commission && numberWithCommas(commission)}</div>;
    },
  }),

  columnHelper.accessor("balance", {
    header: "Balance",
    cell: ({ row }) => {
      const balance: number = row.getValue("balance");

      return <div>₦{balance && numberWithCommas(balance)}</div>;
    },
  }),

  columnHelper.accessor("status", {
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;

      return <StatusBubble status={status} />;
    },
  }),

  {
    id: "actions",
    cell: ({ row }: CellContext<CardTransaction, unknown>) => {
      const transaction = row.original;

      return (
        <ColumnActionDropdown>
          <DropdownMenuItem>
            <Link
              href={`/services/${transaction?.category}/info/${transaction.id}`}
            >
              View details
            </Link>
          </DropdownMenuItem>
        </ColumnActionDropdown>
      );
    },
  },
];
