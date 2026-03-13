import { FormEvent, useEffect, useState } from "react";

import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { EventFormValues } from "../types";
import { updateEvent } from "../api/events";
import { ApiErrorResponse } from "@/lib/types";
import { promiseErrorFunction } from "@/lib/helpers/promiseError";
import { INITIAL_EVENT_STATE } from "../constants/events";
import { useGetEventInfo } from "./useGetEventInfo";
import { formatDateForInput, formatTimeForInput } from "../helpers/events";

export const useEditEventInfo = (eventId: string) => {
  const queryClient = useQueryClient();

  const { data, isLoading } = useGetEventInfo(eventId);

  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [form, setForm] = useState<EventFormValues>(INITIAL_EVENT_STATE);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setForm((prev) => ({
      ...prev,
      image: file,
    }));
  };

  const handleTicketChange = (
    type: "Regular" | "VIP" | "Free",
    field: "price" | "quantity",
    value: number,
  ) => {
    setForm((prev) => ({
      ...prev,
      ticket_types: {
        ...prev.ticket_types,
        [type]: {
          ...prev.ticket_types[type],
          [field]: value,
        },
      },
    }));
  };

  useEffect(() => {
    setForm({
      title: data?.event?.title || "",
      image: null,
      date: formatDateForInput(data?.event?.date) || "",
      time: formatTimeForInput(data?.event?.time) || "",
      address: data?.event?.address || "",
      description: data?.event?.description || "",
      promo: data?.event?.promo || "",
      ticket_types: {
        Regular: {
          price: data?.event?.ticket_types.regular?.price || 0,
          quantity: data?.event?.ticket_types.regular?.quantity || 0,
        },
        VIP: {
          price: data?.event?.ticket_types.vip?.price || 0,
          quantity: data?.event?.ticket_types.vip?.price || 0,
        },
        Free: {
          price: data?.event?.ticket_types.free?.price || 0,
          quantity: data?.event?.ticket_types.free?.price || 0,
        },
      },
    });
    setImageUrl(data?.event?.image_url);
  }, [data]);

  const { mutate, isPending } = useMutation({
    mutationFn: updateEvent,
    onSuccess: () => {
      toast.success("Event successfully edited");
      queryClient.invalidateQueries({
        queryKey: ["events"],
      });
      queryClient.invalidateQueries({
        queryKey: ["event info", eventId],
      });
      setForm(INITIAL_EVENT_STATE);
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error editing event", error);
      promiseErrorFunction(error);
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (image) {
      form.image = image;
    }

    mutate({ payload: form, eventId });
  };

  return {
    form,
    isPending,
    handleChange,
    handleSubmit,
    handleTicketChange,
    handleImageChange,
    image,
    setImage,
    isLoading,
    imageUrl,
    setImageUrl,
  };
};
