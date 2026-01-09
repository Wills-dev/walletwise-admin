import { FormEvent, useState } from "react";

import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editDataPlan } from "../api";
import { ApiErrorResponse } from "@/lib/types";
import { promiseErrorFunction } from "@/lib/helpers/promiseError";

export const useEditDataPlan = (id: number) => {
  const [open, setOpen] = useState(false);
  const [openComm, setOpenComm] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [commission, setCommission] = useState("");

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: editDataPlan,
    onSuccess: () => {
      toast.success("Admin successfully created.");
      setCommission("");
      setOpen(false);
      setOpenModal(false);
      queryClient.invalidateQueries({
        queryKey: ["data plans"],
      });
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error creating admin", error);
      promiseErrorFunction(error);
    },
  });

  const handleEdit = (is_active?: boolean) => {
    mutate({ is_active, id });
  };

  const handleUpdateCommission = (e: FormEvent) => {
    e.preventDefault();
    mutate({ commission, id });
  };

  return {
    handleEdit,
    commission,
    setCommission,
    open,
    setOpen,
    openModal,
    setOpenModal,
    openComm,
    setOpenComm,
    isSubmitting: isPending,
    handleUpdateCommission,
  };
};
