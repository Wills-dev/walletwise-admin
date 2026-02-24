import { useState } from "react";

import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { formatInputTextNumberWithCommas } from "@/lib/helpers/formatInputTextNumberWithCommas";
import { promiseErrorFunction } from "@/lib/helpers/promiseError";
import { removeCommas } from "@/lib/helpers/removeCommas";
import { ApiErrorResponse } from "@/lib/types";
import { createGiftcardCategory } from "../api/giftcard";

export const useCreateGiftcardCategory = () => {
  const [openModal, setOpenModal] = useState(false);
  const [category, setCategory] = useState({
    product_id: "",
    name: "",
    rate: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setCategory((prev) => ({
      ...prev,
      [name]: name === "rate" ? formatInputTextNumberWithCommas(value) : value,
    }));
  };

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createGiftcardCategory,
    onSuccess: () => {
      toast.success("Category successfully created");
      setOpenModal(false);
      queryClient.invalidateQueries({
        queryKey: ["giftcard categories"],
      });
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error creating giftcard category", error);
      promiseErrorFunction(error);
    },
  });

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, product_id, rate } = category;
    const payload: {
      name: string;
      rate: string;
      product_id: string;
    } = {
      name,
      rate: removeCommas(rate),
      product_id,
    };

    if (!name || !rate || !product_id) {
      toast.error("Please fill all fields");
      return;
    }

    mutate(payload);
  };

  return {
    openModal,
    setOpenModal,
    category,
    handleChange,
    handleCreate,
    isPending,
  };
};
