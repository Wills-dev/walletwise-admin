import { FormEvent, useState } from "react";

import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { EventFormValues } from "../types";
import { createEvent } from "../api/events";
import { ApiErrorResponse } from "@/lib/types";
import { promiseErrorFunction } from "@/lib/helpers/promiseError";
import { validate } from "../helpers/validate";
import { INITIAL_EVENT_STATE } from "../constants/events";

export const useCreateEvent = () => {
  const queryClient = useQueryClient();

  const [image, setImage] = useState<File | null>(null);
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

  const { mutate, isPending } = useMutation({
    mutationFn: createEvent,
    onSuccess: () => {
      toast.success("Event successfully created");
      queryClient.invalidateQueries({
        queryKey: ["events"],
      });
      setForm(INITIAL_EVENT_STATE);
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error creating events", error);
      promiseErrorFunction(error);
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    form.image = image;
    const errors = validate(form);
    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach((message) => {
        toast.error(message);
      });

      return;
    }
    if (!form.image) {
      return;
    }

    mutate({ payload: form });
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
  };
};
