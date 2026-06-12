import Link from "next/link";

import { ArrowUpDown } from "lucide-react";
import { CellContext, createColumnHelper, Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

import ColumnActionDropdown from "@/components/molecules/ColumnActionDropdown/ColumnActionDropdown";
import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";
import TableDate from "@/components/atoms/TableDate/TableDate";
import NoWrapCell from "@/components/atoms/NoWrapCell/NoWrapCell";

import { VirtualCard } from "../../types/virtualCards";

const columnHelper = createColumnHelper<VirtualCard>();

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
    cell: ({ row }: CellContext<VirtualCard, unknown>) => (
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
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Date Created
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const date = row.getValue("created_at") as string;

      return <TableDate date={date} showWithTime />;
    },
  }),

  columnHelper.accessor("card_name", {
    header: "Card Name",
    cell: ({ row }) => {
      const cardName = row.getValue("card_name") as string;

      return <NoWrapCell value={cardName} />;
    },
  }),

  columnHelper.accessor("card_number", {
    header: "Card Number",
    cell: ({ row }) => {
      const cardNumber = row.getValue("card_number") as string;

      return <NoWrapCell value={cardNumber} />;
    },
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

  columnHelper.accessor("expiry", {
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Expiry
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  }),

  columnHelper.accessor("topup_count", {
    header: "Topups",
  }),

  columnHelper.accessor("refund_count", {
    header: "Refunds",
  }),

  columnHelper.accessor("card_status", {
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Card Status
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const status = row.getValue("card_status") as string;

      return <StatusBubble status={status} />;
    },
  }),

  columnHelper.accessor("creation_status", {
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Creation Status
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const status = row.getValue("creation_status") as string;

      return <StatusBubble status={status} />;
    },
  }),

  columnHelper.accessor("owner.user_tag", {
    id: "user_tag",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        User Tag
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const card = row.original;

      return (
        <Link
          href={`/manage-user/info/${card.owner.user_id}`}
          className="hover:text-purple-600 hover:underline transition-all duration-300"
        >
          {card.owner.user_tag}
        </Link>
      );
    },
  }),

  columnHelper.accessor("owner.full_name", {
    id: "full_name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Full Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const card = row.original;

      return (
        <Link
          href={`/manage-user/info/${card.owner.user_id}`}
          className="hover:text-purple-600 hover:underline transition-all duration-300"
        >
          {card.owner.full_name}
        </Link>
      );
    },
  }),

  {
    id: "actions",
    cell: ({ row }: CellContext<VirtualCard, unknown>) => {
      const card = row.original;

      return (
        <ColumnActionDropdown>
          <DropdownMenuItem>
            <Link href={`/services/virtual-cards/info/${card.card_id}`}>
              View Card
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Link href={`/manage-user/info/${card.owner.user_id}`}>
              View User
            </Link>
          </DropdownMenuItem>
        </ColumnActionDropdown>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
];
