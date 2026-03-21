"use client";

import { FormEvent, useEffect } from "react";

import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import Label from "@/components/atoms/Label/Label";
import Select from "@/components/atoms/Select/Select";
import ModalWrapper from "@/components/atoms/ModalWrapper/ModalWrapper";

import { DataType } from "@/features/services/types/data";

const UpdateDataPlanModal = ({
  openModal,
  setOpenModal,
  isSubmitting,
  handleEdit,
  name,
  plan_code,
  cost,
  final_price,
  is_active,
  data,
  setData,
  handleChange,
}: {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  isSubmitting: boolean;
  name: string;
  plan_code: string;
  cost: string;
  is_active: boolean | undefined;
  final_price: string;
  handleEdit: (e: FormEvent) => void;
  data: DataType;
  setData: (data: DataType) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
}) => {
  useEffect(() => {
    setData({
      name,
      plan_code,
      cost,
      final_price,
      is_active,
    });
  }, [name, plan_code, cost, final_price, setData, is_active]);

  const isAnyFilled =
    data?.name &&
    data?.plan_code &&
    data?.cost &&
    data?.final_price &&
    data?.is_active !== undefined;

  return (
    <ModalWrapper
      open={openModal}
      onClose={setOpenModal}
      title="Update data plan"
    >
      <form onSubmit={handleEdit} className="space-y-4">
        <div className="space-y-2">
          <Label title="Name" />
          <Input
            value={data?.name || ""}
            type="text"
            name="name"
            onChange={handleChange}
            placeholder=""
          />
        </div>
        <div className="space-y-2">
          <Label title="Plan Code" />
          <Input
            value={data?.plan_code || ""}
            type="text"
            name="plan_code"
            onChange={handleChange}
            placeholder=""
          />
        </div>
        <div className="space-y-2">
          <Label title="Cost" />
          <Input
            value={data?.cost || ""}
            type="text"
            name="cost"
            onChange={handleChange}
            placeholder=""
          />
        </div>
        <div className="space-y-2">
          <Label title="Final Price" />
          <Input
            value={data?.final_price || ""}
            type="text"
            name="final_price"
            onChange={handleChange}
            placeholder=""
          />
        </div>
        <div className="space-y-2">
          <Label title="Status" />
          <Select
            value={
              data?.is_active === undefined
                ? ""
                : data.is_active
                  ? "active"
                  : "inactive"
            }
            name="is_active"
            onChange={handleChange}
            options={[
              { value: "", label: "Select Status" },
              { value: "active", label: "Active" },
              { value: "inactive", label: "Inactive" },
            ]}
          />
        </div>
        <div className="">
          <Button type="submit" loading={isSubmitting} disabled={!isAnyFilled}>
            Update
          </Button>
        </div>
      </form>
    </ModalWrapper>
  );
};

export default UpdateDataPlanModal;
