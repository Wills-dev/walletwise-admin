import { axiosInstance } from "@/lib/axiosInstance";
import { fetchDataProps } from "@/lib/types";
import { format } from "date-fns";

export const getAllTickets = async ({
  currentPage,
  limit,
  search,
}: fetchDataProps) => {
  try {
    const params = new URLSearchParams();

    params.set("page", currentPage.toString());
    params.set("limit", limit.toString());

    if (search) params.set("search", search);
    const url = `/dispute/all?${params.toString()}`;

    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const getSupportActivities = async ({
  currentPage,
  limit,
  search,
  selectedDateFilterValue,
}: fetchDataProps) => {
  try {
    const params = new URLSearchParams();

    params.set("page", currentPage.toString());
    params.set("limit", limit.toString());

    if (search) params.set("search", search);
    if (selectedDateFilterValue) {
      if (selectedDateFilterValue.label === "custom") {
        params.set(
          "startDate",
          format(selectedDateFilterValue.dateRange.start, "yyyy-MM-dd")
        );
        params.set(
          "endDate",
          format(selectedDateFilterValue.dateRange.end, "yyyy-MM-dd")
        );
      }
    }

    const url = `/dispute/logs/all?${params.toString()}`;

    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const getSupportSummary = async ({
  currentPage,
  limit,
  selectedDateFilterValue,
}: fetchDataProps) => {
  try {
    const params = new URLSearchParams();

    params.set("page", currentPage.toString());
    params.set("limit", limit.toString());

    if (selectedDateFilterValue) {
      if (selectedDateFilterValue.label === "custom") {
        params.set(
          "startDate",
          format(selectedDateFilterValue.dateRange.start, "yyyy-MM-dd")
        );
        params.set(
          "endDate",
          format(selectedDateFilterValue.dateRange.end, "yyyy-MM-dd")
        );
      }
    }

    const url = `/dispute/admin-statistics?${params.toString()}`;

    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const getTicketInfo = async ({ ticketId }: { ticketId: string }) => {
  try {
    const url = `/dispute/${ticketId}`;

    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};
