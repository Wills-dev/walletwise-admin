import { axiosInstance } from "@/lib/axiosInstance";
import { fetchDataProps } from "@/lib/types";

import { format } from "date-fns";

export const getReferrals = async ({
  currentPage,
  limit,
  selectedDateFilterValue,
  search,
}: fetchDataProps) => {
  try {
    const params = new URLSearchParams();

    params.set("page", currentPage.toString());
    params.set("limit", limit.toString());

    if (search) params.set("search", search);
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

    const url = `/users/referrals?${params.toString()}`;

    const { data } = await axiosInstance.get(url);
    return data?.success?.data;
  } catch (error) {
    throw error;
  }
};
