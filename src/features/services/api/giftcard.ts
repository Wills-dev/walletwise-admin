import { axiosInstance } from "@/lib/axiosInstance";
import { formatCreatedAt } from "@/lib/helpers/dateFormats";
import { fetchDataProps } from "@/lib/types";

export const getGiftcardRedemption = async ({
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
    if (filter?.[0]) query.currency = filter[0];
    if (filter?.[1]) query.sort_order = filter[1];
    if (filter?.[2]) query.status = filter[2];
    if (status) query.status = status;

    if (selectedDateFilterValue) {
      if (selectedDateFilterValue.label === "custom") {
        query.filterType = "customRange";
        query.filterValue = `${formatCreatedAt(
          selectedDateFilterValue.dateRange.start
        )},${formatCreatedAt(selectedDateFilterValue.dateRange.end)}`;
      } else {
        query.filterType = selectedDateFilterValue.label;
      }
    }

    const queryString = new URLSearchParams(query).toString();

    const url = `/gift-cards?${queryString}`;

    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const getRedeemGiftInfo = async ({ id }: { id: string }) => {
  try {
    const { data } = await axiosInstance.get(`/gift-cards/${id}`);
    return data?.data;
  } catch (error) {
    throw error;
  }
};
