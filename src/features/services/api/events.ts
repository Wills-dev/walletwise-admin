import { axiosInstance } from "@/lib/axiosInstance";
import { formatCreatedAt } from "@/lib/helpers/dateFormats";
import { fetchDataProps } from "@/lib/types";
import { CreateEventPayload } from "../types";

export const getEvents = async ({
  currentPage,
  limit,
  search,
  selectedDateFilterValue,
}: fetchDataProps) => {
  try {
    const query: Record<string, string> = {};

    query.page = currentPage.toString();
    query.limit = limit.toString();

    if (search) query.search = search;

    if (selectedDateFilterValue) {
      if (selectedDateFilterValue.label === "custom") {
        query.filterType = "customRange";
        query.filterValue = `${formatCreatedAt(
          selectedDateFilterValue.dateRange.start,
        )},${formatCreatedAt(selectedDateFilterValue.dateRange.end)}`;
      } else {
        query.filterType = selectedDateFilterValue.label;
      }
    }

    const queryString = new URLSearchParams(query).toString();

    const url = `/events?${queryString}`;

    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const deleteEvent = async ({ eventId }: { eventId: string }) => {
  try {
    const url = `/events/${eventId}`;
    const { data } = await axiosInstance.delete(url);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getEventInfo = async ({ eventId }: { eventId: string }) => {
  try {
    const url = `/events/${eventId}`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export function buildEventFormData(payload: CreateEventPayload): FormData {
  const form = new FormData();

  form.append("title", payload.title);
  form.append("date", payload.date);
  form.append("time", payload.time);
  form.append("address", payload.address);
  form.append("description", payload.description);

  if (payload.promo) form.append("promo", payload.promo);

  if (payload.image) form.append("image", payload.image);

  form.append("ticket_types", JSON.stringify(payload.ticket_types));

  return form;
}

export const createEvent = async ({
  payload,
}: {
  payload: CreateEventPayload;
}) => {
  try {
    const formData = buildEventFormData(payload);

    const url = `/events`;

    const { data } = await axiosInstance.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export async function updateEvent({
  eventId,
  payload,
}: {
  eventId: string;
  payload: Partial<CreateEventPayload>;
}) {
  const form = new FormData();

  if (payload.title) form.append("title", payload.title);
  if (payload.date) form.append("date", payload.date);
  if (payload.time) form.append("time", payload.time);
  if (payload.address) form.append("address", payload.address);
  if (payload.description) form.append("description", payload.description);
  if (payload.promo) form.append("promo", payload.promo);
  if (payload.image) form.append("image", payload.image, payload.image.name);
  if (payload.ticket_types)
    form.append("ticket_types", JSON.stringify(payload.ticket_types));

  const url = `/events/${eventId}`;
  const { data } = await axiosInstance.patch(url, form, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return data;
}

export const getEventAttendees = async ({
  currentPage,
  limit,
  search,
  eventId,
}: fetchDataProps) => {
  try {
    const query: Record<string, string> = {};

    query.page = currentPage.toString();
    query.limit = limit.toString();

    if (search) query.search = search;

    const queryString = new URLSearchParams(query).toString();

    const url = `/events/${eventId}/attendees?${queryString}`;

    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};
