import { useEffect, useState } from "react";

import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { ApiErrorResponse } from "@/lib/types";
import { editGifcardRatingInfo } from "../api/giftcard";
import { promiseErrorFunction } from "@/lib/helpers/promiseError";
import { formatInputTextNumberWithCommas } from "@/lib/helpers/formatInputTextNumberWithCommas";
import { removeCommas } from "@/lib/helpers/removeCommas";
import { useGetRatingInfo } from "./useGetRatingInfo";

export const useEditRating = (id: number) => {
  const { ratingInfo, isLoading } = useGetRatingInfo(id);

  const [openModal, setOpenModal] = useState(false);
  const [rating, setRating] = useState({
    rate: null,
    fee: null,
    is_active: undefined,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setRating((prev) => ({
      ...prev,
      [name]: ["rate", "fee"].includes(name)
        ? formatInputTextNumberWithCommas(value)
        : name === "is_active" && value === "active"
        ? true
        : name === "is_active" && value === "inactive"
        ? false
        : value,
    }));
  };

  useEffect(() => {
    if (ratingInfo && !isLoading) {
      const { rate, fee, is_active } = ratingInfo;
      setRating({ rate, fee, is_active });
    }
  }, [ratingInfo, isLoading]);

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: editGifcardRatingInfo,
    onSuccess: () => {
      toast.success("Rating successfully updated.");
      setOpenModal(false);
      queryClient.invalidateQueries({
        queryKey: ["giftcard rating"],
      });
      queryClient.invalidateQueries({
        queryKey: ["giftcard rating info", id],
      });
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error editing data plan", error);
      promiseErrorFunction(error);
    },
  });

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();

    const { rate, fee, is_active } = rating;
    const payload: {
      id: number;
      rate?: number;
      fee?: number;
      is_active?: boolean;
    } = { id };

    if (!rate && !fee && is_active === undefined) {
      toast.error("Please provide at least one value to update.");
      return;
    }

    if (rate !== null) payload.rate = Number(removeCommas(rate));
    if (fee !== null) payload.fee = Number(removeCommas(fee));
    if (is_active !== undefined) payload.is_active = is_active;

    mutate(payload);
  };

  return {
    handleEdit,
    openModal,
    setOpenModal,
    handleChange,
    rating,
    isLoading,
    isSubmitting: isPending,
    ratingInfo,
  };
};
