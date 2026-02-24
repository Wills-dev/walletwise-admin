import { ArrowUpDown } from "lucide-react";
import { CellContext, createColumnHelper, Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";
import ProductActionRating from "../ProductActionRating/ProductActionRating";

import { formatDate } from "@/lib/helpers/dateFormats";
import { GiftCardProduct } from "../../types";

const columnHelper = createColumnHelper<GiftCardProduct>();

interface ColumnProps<TData = unknown> {
  table: Table<TData>;
}

export const GiftcardProductColumn = [
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
    cell: ({ row }: CellContext<GiftCardProduct, unknown>) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  columnHelper.accessor("created_at", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const created_at: string = row.getValue("created_at");
      const formatted = created_at ? formatDate(created_at) : "";
      return <div className="whitespace-nowrap">{formatted}</div>;
    },
  }),
  columnHelper.accessor("currency", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Currency
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  }),
  columnHelper.accessor("id", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Product ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
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
          Product Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  }),
  columnHelper.accessor("country", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Country
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  }),
  columnHelper.accessor("is_active", {
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
      const status = row.getValue("is_active") as boolean;
      return <StatusBubble status={status === true ? "active" : "inactive"} />;
    },
  }),

  {
    id: "actions",
    cell: ({ row }: CellContext<GiftCardProduct, unknown>) => {
      const product = row.original;

      return <ProductActionRating id={product.id} />;
    },
    enableSorting: false,
    enableHiding: false,
  },
];
