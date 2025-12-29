import { axiosInstance } from "@/lib/axiosInstance";
import { fetchDataProps } from "@/lib/types";

export const getServiceTransaction = async ({
  currentPage,
  limit,
  search,
  status,
  service,
  filter,
  transferType,
  selectedDateFilterValue,
}: fetchDataProps) => {
  try {
    const params = new URLSearchParams();

    params.set("page", currentPage.toString());
    params.set("limit", limit.toString());

    if (search) params.set("search", search);
    if (transferType) params.set("transferType", transferType);
    if (filter?.[0]) params.set("dateOrder", filter[0]);
    if (filter?.[1]) params.set("amountOrder", filter[1]);
    if (status) params.set("status", status);

    const url = `/transactions/category/${service}?${params.toString()}`;

    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const getServiceInfo = async ({ id }: { id: string }) => {
  try {
    const url = `/transactions/${id}`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};
