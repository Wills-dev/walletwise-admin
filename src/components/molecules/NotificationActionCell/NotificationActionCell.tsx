"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useDeleteNotification } from "@/lib/hooks/useDeleteNotification";

import ColumnActionDropdown from "../ColumnActionDropdown/ColumnActionDropdown";
import ConfirmAction from "../ConfirmAction/ConfirmAction";

const NotificationActionCell = ({
  notificationId,
}: {
  notificationId: string;
}) => {
  const { isOpen, onCancel, isPending, setIsOpen, deleteNotification } =
    useDeleteNotification();
  return (
    <ColumnActionDropdown>
      <DropdownMenuItem
        className="text-red-500"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(true);
        }}
      >
        Delete
      </DropdownMenuItem>
      <ConfirmAction
        isPending={isPending}
        open={isOpen}
        setOpen={setIsOpen}
        onCancel={onCancel}
        onConfirm={() => deleteNotification({ notificationId })}
        title="Delete notification?"
        description="Are you sure you want to delete this notification? It will be deleted everywhere and can't be retrived."
      />
    </ColumnActionDropdown>
  );
};

export default NotificationActionCell;
