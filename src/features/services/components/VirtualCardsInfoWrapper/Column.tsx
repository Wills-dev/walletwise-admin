import { ArrowUpDown } from "lucide-react";
import { CellContext, createColumnHelper, Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";
import TableDate from "@/components/atoms/TableDate/TableDate";
import NoWrapCell from "@/components/atoms/NoWrapCell/NoWrapCell";

import { Card } from "../../types/virtualCards";

const columnHelper = createColumnHelper<Card>();

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
      />
    ),
    cell: ({ row }: CellContext<Card, unknown>) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  columnHelper.accessor("card_name", {
    header: "Card Name",
    cell: ({ row }) => <NoWrapCell value={row.getValue("card_name")} />,
  }),

  columnHelper.accessor("card_number", {
    header: "Card Number",
    cell: ({ row }) => <NoWrapCell value={row.getValue("card_number")} />,
  }),

  columnHelper.accessor("brand", {
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Brand
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  }),

  columnHelper.accessor("currency", {
    header: "Currency",
  }),

  columnHelper.accessor("type", {
    header: "Type",
    cell: ({ row }) => <StatusBubble status={row.getValue("type")} />,
  }),

  columnHelper.accessor("expiry", {
    header: "Expiry",
  }),

  columnHelper.accessor("card_status", {
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Status
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <StatusBubble status={row.getValue("card_status")} />,
  }),

  columnHelper.accessor("created_at", {
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Created At
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <TableDate date={row.getValue("created_at")} showWithTime />
    ),
  }),
];
