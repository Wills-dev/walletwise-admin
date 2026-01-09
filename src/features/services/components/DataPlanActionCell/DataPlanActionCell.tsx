"use client";

import { useDeleteDataPlan } from "../../hooks/useDeleteDataPlan";
import { useEditDataPlan } from "../../hooks/useEditDataPlan";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

import ColumnActionDropdown from "@/components/molecules/ColumnActionDropdown/ColumnActionDropdown";
import ConfirmAction from "@/components/molecules/ConfirmAction/ConfirmAction";

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
  const { handleEdit, open, setOpen, isSubmitting, openModal, setOpenModal } =
    useEditDataPlan(id);

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
            onConfirm={() => handleEdit(true)}
            title="Activate data plan"
            description="Are you sure you want to activate data plan?"
          />
          <ConfirmAction
            isPending={isSubmitting}
            open={openModal}
            setOpen={setOpenModal}
            onCancel={() => setOpenModal(false)}
            onConfirm={() => handleEdit(false)}
            title="Deactivate data plan"
            description="Are you sure you want to deactivate data plan?"
          />
        </ColumnActionDropdown>
      )}
    </>
  );
};

export default DataPlanActionCell;
