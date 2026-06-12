import { ArrowUpDown } from "lucide-react";
import { CellContext, createColumnHelper, Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";
import TableDate from "@/components/atoms/TableDate/TableDate";
import NoWrapCell from "@/components/atoms/NoWrapCell/NoWrapCell";

import { VirtualCardTransaction } from "../../types/virtualCards";

const columnHelper = createColumnHelper<VirtualCardTransaction>();

interface ColumnProps<TData = unknown> {
  table: Table<TData>;
}

export const Column = (hasPermission: boolean) => [
  {
    id: "select",
    header: ({ table }: ColumnProps) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      />
    ),
    cell: ({ row }: CellContext<VirtualCardTransaction, unknown>) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
  },

  columnHelper.accessor("date", {
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Date
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <TableDate date={row.getValue("date")} showWithTime />,
  }),

  columnHelper.accessor("transaction_id", {
    header: "Transaction ID",
    cell: ({ row }) => <NoWrapCell value={row.getValue("transaction_id")} />,
  }),

  columnHelper.accessor("details.card_name", {
    id: "card_name",
    header: "Card Name",
    cell: ({ row }) => {
      const name = row.original as VirtualCardTransaction;

      return (
        <div className="whitespace-nowrap">{name?.details?.card_name}</div>
      );
    },
  }),

  columnHelper.accessor("details.brand", {
    id: "brand",
    header: "Brand",
  }),

  columnHelper.accessor("product_name", {
    header: "Product",
  }),

  columnHelper.accessor("type", {
    header: "Type",
    cell: ({ row }) => <StatusBubble status={row.getValue("type")} />,
  }),

  columnHelper.accessor("amount", {
    header: "Amount (₦)",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));

      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
      }).format(amount);
    },
  }),

  columnHelper.accessor("details.amount_usd", {
    id: "amount_usd",
    header: "Amount (USD)",
    cell: ({ row }) => {
      const amount = parseFloat(row.original.details.amount_usd ?? "0");

      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
    },
  }),

  columnHelper.accessor("fee", {
    header: "Fee",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("fee"));

      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
      }).format(amount);
    },
  }),

  ...(hasPermission
    ? [
        columnHelper.accessor("company_commission", {
          header: "Commission",
          cell: ({ row }) => {
            const amount = parseFloat(row.getValue("company_commission"));

            return new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "NGN",
            }).format(amount);
          },
        }),
      ]
    : []),

  columnHelper.accessor("status", {
    header: "Status",
    cell: ({ row }) => <StatusBubble status={row.getValue("status")} />,
  }),

  columnHelper.accessor("balance", {
    header: "Balance",
    cell: ({ row }) => {
      const balance = parseFloat(row.getValue("balance"));

      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
      }).format(balance);
    },
  }),

  // {
  //   id: "actions",
  //   cell: ({ row }: CellContext<VirtualCardTransaction, unknown>) => {
  //     const transaction = row.original;

  //     return (
  //       <ColumnActionDropdown>
  //         <DropdownMenuItem>
  //           <Link href={`/virtual-cards/info/${transaction.details.card_id}`}>
  //             View Card
  //           </Link>
  //         </DropdownMenuItem>

  //         <DropdownMenuItem>
  //           <Link href={`/transactions/${transaction.transaction_id}`}>
  //             View Transaction
  //           </Link>
  //         </DropdownMenuItem>
  //       </ColumnActionDropdown>
  //     );
  //   },
  // },
];
