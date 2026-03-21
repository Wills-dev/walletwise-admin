"use client";

import { useDeleteDataPlan } from "../../hooks/useDeleteDataPlan";
import { useEditDataPlan } from "../../hooks/useEditDataPlan";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

import ColumnActionDropdown from "@/components/molecules/ColumnActionDropdown/ColumnActionDropdown";
import ConfirmAction from "@/components/molecules/ConfirmAction/ConfirmAction";
import UpdateDataPlanModal from "@/components/molecules/modals/UpdateDataPlanModal/UpdateDataPlanModal";

const DataPlanActionCell = ({
  is_active,
  id,
  name,
  plan_code,
  cost,
  final_price,
  isCustom,
}: {
  is_active: boolean;
  id: number;
  name: string;
  plan_code: string;
  cost: string;
  final_price: string;
  isCustom: boolean;
}) => {
  const { isOpen, onCancel, isPending, setIsOpen, deleteDataPlan } =
    useDeleteDataPlan();

  const {
    handleEdit,
    open,
    setOpen,
    isSubmitting,
    data,
    setData,
    handleChange,
  } = useEditDataPlan(id);

  return (
    <>
      {isCustom && (
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

          <DropdownMenuItem
            onClick={(e) => {
              e.preventDefault();
              setOpen(true);
            }}
          >
            Update plan
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
          <UpdateDataPlanModal
            openModal={open}
            setOpenModal={setOpen}
            isSubmitting={isSubmitting}
            name={name}
            plan_code={plan_code}
            cost={cost}
            final_price={final_price}
            handleEdit={handleEdit}
            is_active={is_active}
            data={data}
            setData={setData}
            handleChange={handleChange}
          />
        </ColumnActionDropdown>
      )}
    </>
  );
};

export default DataPlanActionCell;
