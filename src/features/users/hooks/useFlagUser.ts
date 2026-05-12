import { useState } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { flagUser } from "../api";
import { ApiErrorResponse } from "@/lib/types";
import { promiseErrorFunction } from "@/lib/helpers/promiseError";

export const useFlagUser = (userId: string) => {
  const [isOpen, setIsOpen] = useState(false);
  const [flagUserAcct, setFlagUser] = useState({
    is_suspicious: "",
    reason: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFlagUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const queryClient = useQueryClient();

  const onCancel = () => {
    setIsOpen(false);
  };

  const { mutate, isPending } = useMutation({
    mutationFn: flagUser,
    onSuccess: () => {
      toast.success("User account updated!");
      onCancel();
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
      queryClient.invalidateQueries({
        queryKey: ["user info", userId],
      });
    },
    onError: (error: ApiErrorResponse) => {
      promiseErrorFunction(error);
    },
  });

  const flagUserAccount = (email: string) => {
    const { is_suspicious, reason } = flagUserAcct;
    if (is_suspicious === "flag" && reason.trim() === "") {
      toast.error("Please provide reason for flagging user account");
    }
    mutate({
      is_suspicious: is_suspicious === "flag" ? true : false,
      reason,
      email,
    });
  };

  return {
    isOpen,
    onCancel,
    setIsOpen,
    flagUserAccount,
    flagUserAcct,
    handleChange,
    isUpdating: isPending,
  };
};
