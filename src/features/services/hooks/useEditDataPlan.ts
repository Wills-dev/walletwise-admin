import { FormEvent, useState } from "react";

import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editDataPlan } from "../api";
import { ApiErrorResponse } from "@/lib/types";
import { promiseErrorFunction } from "@/lib/helpers/promiseError";
import { DataType } from "../types/data";

export const useEditDataPlan = (id: number) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<DataType>({
    name: "",
    plan_code: "",
    cost: "",
    final_price: "",
    is_active: undefined,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]:
        name === "is_active" && value === "active"
          ? true
          : name === "is_active" && value === "inactive"
            ? false
            : value,
    }));
  };

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: editDataPlan,
    onSuccess: () => {
      toast.success("Data plan successfully updated.");
      setOpen(false);
      queryClient.invalidateQueries({
        queryKey: ["data plans"],
      });
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error editing data plan", error);
      promiseErrorFunction(error);
    },
  });

  const handleEdit = (e: FormEvent) => {
    e.preventDefault();
    const { is_active, name, plan_code, final_price, cost } = data;
    if (
      is_active === undefined &&
      !name &&
      !plan_code &&
      !cost &&
      !final_price
    ) {
      toast.error("Please edit at least one field before submitting");
      return;
    }
    mutate({ is_active, id, name, plan_code, final_price, cost });
  };

  return {
    handleEdit,
    open,
    setOpen,
    data,
    setData,
    handleChange,
    isSubmitting: isPending,
  };
};
