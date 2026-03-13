import { axiosInstance } from "@/lib/axiosInstance";
import { formatCreatedAt } from "@/lib/helpers/dateFormats";
import { fetchDataProps } from "@/lib/types";
import { TicketType } from "../types";

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

export const createEvent = async ({
  title,
  date,
  time,
}: {
  title: string;
  date: string;
  time: string;
  address: string;
  description: string;
  promo: string;
  image_url?: File;
  ticket_types: {
    Regular: TicketType;
    VIP: TicketType;
    Free: TicketType;
  };
}) => {
  try {
    const url = `/events`;

    const { data } = await axiosInstance.post(url);
    return data;
  } catch (error) {
    throw error;
  }
};

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
