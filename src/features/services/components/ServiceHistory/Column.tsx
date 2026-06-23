import Link from "next/link";

import { ArrowUpDown } from "lucide-react";
import { CellContext, createColumnHelper, Table } from "@tanstack/react-table";
import { TransactionType } from "@/lib/types";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

import ColumnActionDropdown from "@/components/molecules/ColumnActionDropdown/ColumnActionDropdown";
import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";
import TableDate from "@/components/atoms/TableDate/TableDate";
import NoWrapCell from "@/components/atoms/NoWrapCell/NoWrapCell";
import StatusPulse from "@/components/atoms/StatusPulse/StatusPulse";

const columnHelper = createColumnHelper<TransactionType>();

interface ColumnProps<TData = unknown> {
  table: Table<TData>;
}

export const Column = (hasPermission: boolean, service: string) => [
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
    cell: ({ row }: CellContext<TransactionType, unknown>) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  columnHelper.accessor("date", {
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
      const date: string = row.getValue("date");
      return <TableDate date={date} showWithTime />;
    },
  }),
  columnHelper.accessor("transaction_id", {
    header: "Transaction ID",
    cell: ({ row }) => {
      const id: string = row.getValue("transaction_id");
      const userFlagged = row.original?.user_flagged;

      return (
        <div className="flex items-center gap-2">
          <NoWrapCell value={id} />
          {userFlagged && <StatusPulse size="sm" variant="red" />}
        </div>
      );
    },
  }),
  columnHelper.accessor("asset_id", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Network
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
          Service
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  }),
  columnHelper.accessor("type", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Type
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const type = row.getValue("type") as string;
      return <StatusBubble status={type} />;
    },
  }),
  columnHelper.accessor("amount", {
    header: () => <div className="">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
      }).format(amount);

      return <div className=" font-medium">{formatted}</div>;
    },
  }),
  ...(hasPermission
    ? [
        columnHelper.accessor("details.amount_usd", {
          header: () => <div className="">USD Transaction</div>,
          cell: ({ row }) => {
            const transaction = row.original as TransactionType;

            if (transaction.asset_id !== "virtual-card") return "-";

            const amount = parseFloat(transaction.details?.amount_usd ?? "0");

            return (
              <div className="font-medium">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(amount)}
              </div>
            );
          },
        }),
      ]
    : []),

  ...(hasPermission
    ? [
        columnHelper.accessor("company_commission", {
          header: () => <div className="">Company Commission</div>,
          cell: ({ row }) => {
            const amount = parseFloat(row.getValue("company_commission"));
            const formatted = new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "NGN",
            }).format(amount);

            return <div className=" font-medium">{formatted}</div>;
          },
        }),
      ]
    : []),
  ...(hasPermission
    ? [
        columnHelper.accessor("user_commission", {
          header: () => <div className="">User Commission</div>,
          cell: ({ row }) => {
            const amount = parseFloat(row.getValue("user_commission"));
            const formatted = new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "NGN",
            }).format(amount);

            return <div className=" font-medium">{formatted}</div>;
          },
        }),
      ]
    : []),
  columnHelper.accessor("status", {
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
      const status = row.getValue("status") as string;
      return <StatusBubble status={status} />;
    },
  }),

  columnHelper.accessor("user_tag", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          User Tag
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const transaction = row.original as TransactionType;

      return (
        <Link
          href={`/manage-user/info/${transaction?.user_id}`}
          className="hover:text-purple-600 hover:underline transition-all duration-300 text-center w-full"
        >
          {transaction?.user_tag}
        </Link>
      );
    },
  }),
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
    cell: ({ row }) => {
      const transaction = row.original as TransactionType;

      return (
        <Link
          href={`/manage-user/info/${transaction?.user_id}`}
          className="hover:text-purple-600 hover:underline transition-all duration-300 text-center w-full"
        >
          {transaction?.full_name}
        </Link>
      );
    },
  }),

  {
    id: "actions",
    cell: ({ row }: CellContext<TransactionType, unknown>) => {
      const transaction = row.original;

      return (
        <>
          <ColumnActionDropdown>
            <DropdownMenuItem>
              <Link href={`/services/${service}/info/${transaction?.id}`}>
                View info
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={`/manage-user/info/${transaction.user_id}`}>
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
