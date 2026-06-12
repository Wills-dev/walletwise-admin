import { axiosInstance } from "@/lib/axiosInstance";
import { fetchDataProps } from "@/lib/types";

import { format } from "date-fns";

export const getVirtualCardRatings = async ({
  // currentPage,
  // limit,
  filter,
}: fetchDataProps) => {
  try {
    const query: Record<string, string> = {};

    // query.page = currentPage.toString();
    // query.limit = limit.toString();
    if (filter?.[0]) query.currency = filter[0];
    if (filter?.[1] === "active") {
      query.sort_order = true.toString();
    } else if (filter?.[1] === "inactive") {
      query.sort_order = false.toString();
    }

    const queryString = new URLSearchParams(query).toString();

    const { data } = await axiosInstance.get(
      `/rates${queryString ? `?${queryString}` : ""}`,
    );
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const getVirtualCardRatingInfo = async ({ id }: { id: number }) => {
  try {
    const { data } = await axiosInstance.get(`/rates/${id}`);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const editVirtualCardRatingInfo = async ({
  id,
  rate,
  provider_rate,
  sell_rate,
  fee,
  is_active,
}: {
  id: number;
  rate?: number;
  fee?: number;
  sell_rate?: number;
  provider_rate?: number;
  is_active?: boolean;
}) => {
  try {
    const payload: {
      rate?: number;
      fee?: number;
      is_active?: boolean;
      provider_rate?: number;
      sell_rate?: number;
    } = {};

    if (rate !== undefined) payload.rate = rate;
    if (provider_rate !== undefined) payload.provider_rate = provider_rate;
    if (sell_rate !== undefined) payload.sell_rate = sell_rate;
    if (fee !== undefined) payload.fee = fee;
    if (is_active !== undefined) payload.is_active = is_active;

    const { data } = await axiosInstance.patch(`/rates/${id}`, payload);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const getVirtualCards = async ({
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
    if (filter?.[0]) params.set("brand", filter[0]);
    if (filter?.[1]) params.set("status", filter[1]);
    if (status) params.set("status", status);
    if (selectedDateFilterValue) {
      if (selectedDateFilterValue.label === "custom") {
        params.set(
          "startDate",
          format(selectedDateFilterValue.dateRange.start, "yyyy-MM-dd"),
        );
        params.set(
          "endDate",
          format(selectedDateFilterValue.dateRange.end, "yyyy-MM-dd"),
        );
      } else {
        params.set("filterType", selectedDateFilterValue.label);
      }
    }
    const url = `/virtual-cards?${params.toString()}`;

    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const getVirtualCardsInfo = async ({
  currentPage,
  limit,
  search,
  status,
  filter,
  eventId: cardId,
  selectedDateFilterValue,
}: fetchDataProps) => {
  try {
    const params = new URLSearchParams();

    params.set("page", currentPage.toString());
    params.set("limit", limit.toString());

    if (search) params.set("search", search);
    if (filter?.[0]) params.set("category", filter[0]);
    if (filter?.[1]) params.set("status", filter[1]);
    if (status) params.set("status", status);
    if (selectedDateFilterValue) {
      if (selectedDateFilterValue.label === "custom") {
        params.set(
          "startDate",
          format(selectedDateFilterValue.dateRange.start, "yyyy-MM-dd"),
        );
        params.set(
          "endDate",
          format(selectedDateFilterValue.dateRange.end, "yyyy-MM-dd"),
        );
      } else {
        params.set("filterType", selectedDateFilterValue.label);
      }
    }
    const url = `/virtual-cards/${cardId}/transactions?${params.toString()}`;

    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};
