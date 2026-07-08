import { axiosInstance } from "@/lib/axiosInstance";
import { formatCreatedAt } from "@/lib/helpers/dateFormats";
import { fetchDataProps } from "@/lib/types";

export const getSavings = async ({
  currentPage,
  limit,
  search,
  status,
  filter,
  selectedDateFilterValue,
}: fetchDataProps) => {
  try {
    const query: Record<string, string> = {};

    query.page = currentPage.toString();
    query.limit = limit.toString();

    if (search) query.search = search;
    if (filter?.[0]) query.savingsType = filter[0];
    if (filter?.[1]) query.status = filter[1];
    if (status) query.savingsType = status;

    if (selectedDateFilterValue) {
      if (selectedDateFilterValue.label === "custom") {
        query.filterType = "custom";
        query.filterValue = `${formatCreatedAt(
          selectedDateFilterValue.dateRange.start,
        )},${formatCreatedAt(selectedDateFilterValue.dateRange.end)}`;
      } else {
        query.filterType = selectedDateFilterValue.label;
      }
    }

    const queryString = new URLSearchParams(query).toString();

    const url = `/savings/transactions?${queryString}`;

    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const getSavingsInfo = async ({ id }: { id: string }) => {
  try {
    const url = `/savings/transactions/${id}`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};
