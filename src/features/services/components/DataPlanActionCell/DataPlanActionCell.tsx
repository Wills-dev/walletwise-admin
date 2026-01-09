"use client";

import { useDeleteDataPlan } from "../../hooks/useDeleteDataPlan";
import { useEditDataPlan } from "../../hooks/useEditDataPlan";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

import ColumnActionDropdown from "@/components/molecules/ColumnActionDropdown/ColumnActionDropdown";
import ConfirmAction from "@/components/molecules/ConfirmAction/ConfirmAction";
import UpdateDataPlanCommission from "@/components/molecules/modals/UpdateDataPlanCommission/UpdateDataPlanCommission";

const DataPlanActionCell = ({
  is_custom,
  is_active,
  id,
}: {
  is_custom: boolean;
  is_active: boolean;
  id: number;
}) => {
  const { isOpen, onCancel, isPending, setIsOpen, deleteDataPlan } =
    useDeleteDataPlan();
  const {
    handleEdit,
    commission,
    setCommission,
    open,
    setOpen,
    isSubmitting,
    openModal,
    setOpenModal,
    openComm,
    setOpenComm,
    handleUpdateCommission,
  } = useEditDataPlan(id);

  return (
    <>
      {is_custom && (
        <ColumnActionDropdown>
          <DropdownMenuItem
            className="text-red-500"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(true);
            }}
          >
            Delete plan
          </DropdownMenuItem>

          {!is_active ? (
            <DropdownMenuItem
              className="text-green-500"
              onClick={(e) => {
                e.preventDefault();
                setOpen(true);
              }}
            >
              Activate plan
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem
              className="text-red-500"
              onClick={(e) => {
                e.preventDefault();
                setOpenModal(true);
              }}
            >
              Deactivate plan
            </DropdownMenuItem>
          )}
          <DropdownMenuItem
            className="text-gray-700 dark:text-gray-300"
            onClick={(e) => {
              e.preventDefault();
              setOpenComm(true);
            }}
          >
            Update commission
          </DropdownMenuItem>
          <ConfirmAction
            isPending={isPending}
            open={isOpen}
            setOpen={setIsOpen}
            onCancel={onCancel}
            onConfirm={() => deleteDataPlan({ id })}
            title="Delete data plan"
            description="Are you sure you want to delete data plan?"
          />
          <ConfirmAction
            isPending={isSubmitting}
            open={open}
            setOpen={setOpen}
            onCancel={() => setOpen(false)}
            onConfirm={() => {
              handleEdit(true);
              setCommission("");
            }}
            title="Activate data plan"
            description="Are you sure you want to activate data plan?"
          />
          <ConfirmAction
            isPending={isSubmitting}
            open={openModal}
            setOpen={setOpenModal}
            onCancel={() => setOpenModal(false)}
            onConfirm={() => {
              handleEdit(false);
              setCommission("");
            }}
            title="Deactivate data plan"
            description="Are you sure you want to deactivate data plan?"
          />
          <UpdateDataPlanCommission
            handleSubmit={handleUpdateCommission}
            commission={commission}
            setCommission={setCommission}
            isPending={isSubmitting}
            openModal={openComm}
            setOpenModal={setOpenComm}
          />
        </ColumnActionDropdown>
      )}
    </>
  );
};

export default DataPlanActionCell;
