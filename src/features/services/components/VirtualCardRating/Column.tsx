import { ArrowUpDown } from "lucide-react";
import { CellContext, createColumnHelper, Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";
import RatingActionButtons from "../RatingActionButtons/RatingActionButtons";

import { formatDate } from "@/lib/helpers/dateFormats";
import { VirtualCardRating } from "../../types";
import { numberWithCommas } from "@/lib/helpers";

const columnHelper = createColumnHelper<VirtualCardRating>();

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
    cell: ({ row }: CellContext<VirtualCardRating, unknown>) => (
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
  columnHelper.accessor("provider_rate", {
    header: () => <div className="">Provider Rates</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("provider_rate"));
      const formatted = numberWithCommas(Number(amount));

      return <div className=" font-medium">{formatted}</div>;
    },
  }),
  columnHelper.accessor("rate", {
    header: () => <div className="">Rates</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("rate"));
      const formatted = numberWithCommas(Number(amount));

      return <div className=" font-medium">{formatted}</div>;
    },
  }),
  columnHelper.accessor("sell_rate", {
    header: () => <div className="">Sell Rates</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("sell_rate"));
      const formatted = numberWithCommas(Number(amount));

      return <div className=" font-medium">{formatted}</div>;
    },
  }),
  columnHelper.accessor("fee", {
    header: () => <div className="">Fee</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("fee"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
      }).format(amount);

      return <div className=" font-medium">{formatted}</div>;
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
    cell: ({ row }: CellContext<VirtualCardRating, unknown>) => {
      const rating = row.original;

      return <RatingActionButtons id={rating.id} />;
    },
    enableSorting: false,
    enableHiding: false,
  },
];
