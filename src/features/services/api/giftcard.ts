import { axiosInstance } from "@/lib/axiosInstance";
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
    const params = new URLSearchParams();

    params.set("page", currentPage.toString());
    params.set("limit", limit.toString());

    if (search) params.set("search", search);
    if (filter?.[0]) params.set("currency", filter[0]);
    if (filter?.[1]) params.set("sort_order", filter[1]);
    if (filter?.[2]) params.set("status", filter[2]);
    if (status) params.set("status", status);

    const url = `/gift-cards?${params.toString()}`;

    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};
