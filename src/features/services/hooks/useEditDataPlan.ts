import { useState } from "react";

import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editDataPlan } from "../api";
import { ApiErrorResponse } from "@/lib/types";
import { promiseErrorFunction } from "@/lib/helpers/promiseError";

export const useEditDataPlan = (id: number) => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: editDataPlan,
    onSuccess: () => {
      toast.success("Data plan successfully updated.");
      setOpen(false);
      setOpenModal(false);
      queryClient.invalidateQueries({
        queryKey: ["data plans"],
      });
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error editing data plan", error);
      promiseErrorFunction(error);
    },
  });

  const handleEdit = (is_active: boolean) => {
    mutate({ is_active, id });
  };

  return {
    handleEdit,
    open,
    setOpen,
    openModal,
    setOpenModal,
    isSubmitting: isPending,
  };
};
