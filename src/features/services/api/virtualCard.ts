import { axiosInstance } from "@/lib/axiosInstance";
import { fetchDataProps } from "@/lib/types";

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
