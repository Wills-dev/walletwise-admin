import { axiosInstance } from "@/lib/axiosInstance";
import { fetchDataProps } from "@/lib/types";

import { format } from "date-fns";

export const getEarnings = async ({
  currentPage,
  limit,
  selectedDateFilterValue,
  service,
}: fetchDataProps) => {
  try {
    const params = new URLSearchParams();

    params.set("page", currentPage.toString());
    params.set("limit", limit.toString());

    if (service) params.set("category", service);
    if (selectedDateFilterValue) {
      if (selectedDateFilterValue.label === "custom") {
        params.set(
          "start_date",
          format(selectedDateFilterValue.dateRange.start, "yyyy-MM-dd")
        );
        params.set(
          "end_date",
          format(selectedDateFilterValue.dateRange.end, "yyyy-MM-dd")
        );
      }
    }

    const url = `/transactions/all-detailed?${params.toString()}`;

    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};
