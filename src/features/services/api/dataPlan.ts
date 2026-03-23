import { axiosInstance } from "@/lib/axiosInstance";

export const editBaseDataPlan = async ({
  id,
  is_active,
  commission,
  cost,
  final_price,
}: {
  id: number;
  is_active?: boolean;
  commission?: string;
  cost?: string;
  final_price?: string;
}) => {
  try {
    const url = `/data-providers/plans/base/${id}`;
    const payload: {
      is_active?: boolean;
      cost?: number;
      commission?: number;
      final_price?: number;
    } = {};
    if (commission) payload.commission = Number(commission);
    if (cost) payload.cost = Number(cost);
    if (final_price) payload.final_price = Number(final_price);
    if (is_active) payload.is_active = is_active;

    const { data } = await axiosInstance.patch(url, payload);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const editCustomDataPlan = async ({
  id,
  is_active,
  name,
  commission,
  cost,
  final_price,
}: {
  id: number;
  is_active?: boolean;
  name?: string;
  commission?: string;
  cost?: string;
  final_price?: string;
}) => {
  try {
    const url = `/data-providers/plans/custom/${id}`;
    const payload: {
      is_active?: boolean;
      name?: string;
      commission?: number;
      cost?: number;
      final_price?: number;
    } = {};
    if (name) payload.name = name;
    if (commission) payload.commission = Number(commission);
    if (cost) payload.cost = Number(cost);
    if (final_price) payload.final_price = Number(final_price);
    if (is_active) payload.is_active = is_active;

    const { data } = await axiosInstance.patch(url, payload);
    return data?.data;
  } catch (error) {
    throw error;
  }
};
