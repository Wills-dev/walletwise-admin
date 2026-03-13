import { EventFormValues } from "../types";

type FormErrors = Partial<
  Record<keyof EventFormValues | "ticket_types_empty", string>
>;

export function validate(values: EventFormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.title.trim()) errors.title = "Title is required.";
  if (!values.date) errors.date = "Date is required.";
  if (!values.time) errors.time = "Time is required.";
  if (!values.address.trim()) errors.address = "Address is required.";
  if (!values.description.trim())
    errors.description = "Description is required.";
  if (!values.image || values?.image === null)
    errors.image = "Event image is required.";
  if (Object.keys(values.ticket_types).length === 0)
    errors.ticket_types_empty = "Add at least one ticket type.";
  return errors;
}
