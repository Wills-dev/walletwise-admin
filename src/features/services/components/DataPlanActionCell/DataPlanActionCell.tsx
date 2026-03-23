"use client";

import { useDeleteDataPlan } from "../../hooks/useDeleteDataPlan";
import { useEditDataPlan } from "../../hooks/useEditDataPlan";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

import ColumnActionDropdown from "@/components/molecules/ColumnActionDropdown/ColumnActionDropdown";
import ConfirmAction from "@/components/molecules/ConfirmAction/ConfirmAction";
import UpdateDataPlanModal from "@/components/molecules/modals/UpdateDataPlanModal/UpdateDataPlanModal";
import { useEditBaseDataPlan } from "../../hooks/useEditBaseDataPlan";

const DataPlanActionCell = ({
  is_active,
  id,
  name,
  commission,
  cost,
  final_price,
  isCustom,
}: {
  is_active: boolean;
  id: number;
  name: string;
  commission: string;
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

  const {
    handleBaseEdit,
    openModal,
    setOpenModal,
    baseData,
    setBaseData,
    handleBaseChange,
    isUpdating,
  } = useEditBaseDataPlan(id);

  return (
    <>
      <ColumnActionDropdown>
        {isCustom ? (
          <>
            {" "}
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
          </>
        ) : (
          <DropdownMenuItem
            onClick={(e) => {
              e.preventDefault();
              setOpenModal(true);
            }}
          >
            Update plan
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
        <UpdateDataPlanModal
          openModal={open}
          setOpenModal={setOpen}
          isSubmitting={isSubmitting}
          name={name}
          commission={commission}
          cost={cost}
          final_price={final_price}
          handleEdit={handleEdit}
          is_active={is_active}
          data={data}
          setData={setData}
          handleChange={handleChange}
          isCustom={isCustom}
        />
        <UpdateDataPlanModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          isSubmitting={isUpdating}
          name={name}
          commission={commission}
          cost={cost}
          final_price={final_price}
          handleEdit={handleBaseEdit}
          is_active={is_active}
          data={baseData}
          setData={setBaseData}
          handleChange={handleBaseChange}
          isCustom={isCustom}
        />
      </ColumnActionDropdown>
    </>
  );
};

export default DataPlanActionCell;
