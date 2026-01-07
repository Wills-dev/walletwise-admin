import { axiosInstance } from "@/lib/axiosInstance";
import { fetchDataProps } from "@/lib/types";

import { format } from "date-fns";

export const getAllTransactions = async ({
  currentPage,
  limit,
  search,
  filter,
  selectedDateFilterValue,
  excludeTransfer,
}: fetchDataProps) => {
  try {
    const params = new URLSearchParams();

    params.set("page", currentPage.toString());
    params.set("limit", limit.toString());

    if (search) params.set("search", search);
    if (filter?.[0]) params.set("sortOrder", filter[0]);
    if (filter?.[1]) params.set("status", filter[1]);
    if (excludeTransfer)
      params.set("excludeTransfers", excludeTransfer.toString());
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

    const url = `/transactions/search?${params.toString()}`;

    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const getUsertagTransactions = async ({
  currentPage,
  limit,
  search,
  filter,
  selectedDateFilterValue,
}: fetchDataProps) => {
  try {
    const params = new URLSearchParams();

    params.set("page", currentPage.toString());
    params.set("limit", limit.toString());

    if (search) params.set("search", search);
    if (filter?.[0]) params.set("sortOrder", filter[0]);
    if (filter?.[1]) params.set("status", filter[1]);
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

    const url = `/transactions/user-tag?${params.toString()}`;

    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};
