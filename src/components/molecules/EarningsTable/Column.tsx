import { ArrowUpDown } from "lucide-react";
import { CellContext, createColumnHelper, Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import { formatDate } from "@/lib/helpers/dateFormats";
import { EarningTableData, TransactionType } from "@/lib/types";

const columnHelper = createColumnHelper<EarningTableData>();

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
      const formatted = date ? formatDate(date) : "";
      return <div className="">{formatted}</div>;
    },
  }),
  columnHelper.accessor("category", {
    header: "Category",
  }),
  columnHelper.accessor("total_revenue", {
    header: () => <div className="">Revenue</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("total_revenue"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
      }).format(amount);

      return <div className=" font-medium">{formatted}</div>;
    },
  }),
  columnHelper.accessor("total_profit", {
    header: () => <div className="">Profit</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("total_profit"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
      }).format(amount);

      return <div className=" font-medium">{formatted}</div>;
    },
  }),
];
