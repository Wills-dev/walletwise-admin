import { format } from "date-fns";
import { fetchDataProps } from "../types";
import { axiosInstance } from "../axiosInstance";

export const getStreaks = async ({
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

    if (search) params.set("userTag", search);
    if (filter?.[0]) params.set("sort_by", filter[0]);
    // if (filter?.[1]) params.set("period", filter[1]);
    // if (filter?.[2]) params.set("sort_order", filter[2]);
    if (selectedDateFilterValue) {
      if (selectedDateFilterValue.label === "custom") {
        params.set(
          "start_date",
          format(selectedDateFilterValue.dateRange.start, "yyyy-MM-dd"),
        );
        params.set(
          "end_date",
          format(selectedDateFilterValue.dateRange.end, "yyyy-MM-dd"),
        );
      }
    }

    const url = `/streak?${params.toString()}`;

    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};
