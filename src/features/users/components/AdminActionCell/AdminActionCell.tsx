import Link from "next/link";

import { useDeleteAdmin } from "../../hooks/useDeleteAdmin";
import { useSuspendAdmin } from "../../hooks/useSuspendAdmin";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useReactivateAdmin } from "../../hooks/useReactivateAdmin";

import ColumnActionDropdown from "@/components/molecules/ColumnActionDropdown/ColumnActionDropdown";
import ConfirmAction from "@/components/molecules/ConfirmAction/ConfirmAction";

const AdminActionCell = ({
  adminId,
  status,
}: {
  adminId: string;
  status: unknown;
}) => {
  const { isPending, isOpen, onCancel, setIsOpen, handleSuspendAdmin } =
    useSuspendAdmin();
  const {
    isOpen: open,
    onCancel: onClose,
    isPending: isActivating,
    setIsOpen: setOpen,
    reactivateAdmin,
  } = useReactivateAdmin();
  const {
    isOpen: isOpenModal,
    onCancel: handleCancel,
    isPending: isDeleting,
    setIsOpen: setIsOpenModal,
    deleteAdmin,
  } = useDeleteAdmin();

  return (
    <ColumnActionDropdown>
      <DropdownMenuItem>
        <Link href={`/manage-admin/info/${adminId}`}>View info</Link>
      </DropdownMenuItem>
      {status === "suspended" ? (
        <DropdownMenuItem
          className="text-green-500"
          onClick={(e) => {
            e.preventDefault();
            setOpen(true);
          }}
        >
          Activate
        </DropdownMenuItem>
      ) : (
        <DropdownMenuItem
          className="text-red-500"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(true);
          }}
        >
          Suspend
        </DropdownMenuItem>
      )}
      <DropdownMenuItem
        className="text-red-500"
        onClick={(e) => {
          e.preventDefault();
          setIsOpenModal(true);
        }}
      >
        Delete
      </DropdownMenuItem>
      <ConfirmAction
        isPending={isPending}
        open={isOpen}
        setOpen={setIsOpen}
        onCancel={onCancel}
        onConfirm={() => handleSuspendAdmin({ adminId })}
        title="Are You Sure You Want to Suspend This Admin?"
        description="Are you sure you want to suspend this admin? They will lose access to the dashboard until they are reactivated"
      />
      <ConfirmAction
        isPending={isActivating}
        open={open}
        setOpen={setOpen}
        onCancel={onClose}
        onConfirm={() => reactivateAdmin({ adminId })}
        title="Are You Sure You Want to Reactivate This Admin?"
        description="This action will enable the admin’s account and grant them full privileges again. Do you want to continue?"
      />
      <ConfirmAction
        isPending={isDeleting}
        open={isOpenModal}
        setOpen={setIsOpenModal}
        onCancel={handleCancel}
        onConfirm={() => deleteAdmin({ adminId })}
        title="Are You Sure You Want to Delete This Admin?"
        description="Deleting this admin will permanently remove their account from the system. This action is irreversible. Please confirm to continue."
      />
    </ColumnActionDropdown>
  );
};

export default AdminActionCell;
