import { axiosInstance } from "@/lib/axiosInstance";
import { fetchDataProps } from "@/lib/types";
import { CreateDataPlanType } from "../types";

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

export const getDataPlans = async ({
  currentPage,
  limit,
  search,
  filter,
  exclude,
}: fetchDataProps) => {
  try {
    const params = new URLSearchParams();

    params.set("page", currentPage.toString());
    params.set("limit", limit.toString());

    if (search) params.set("search", search);
    if (exclude !== undefined) {
      params.set("is_custom", exclude.toString());
    } else if (filter?.[0] !== undefined) params.set("is_custom", filter[0]);

    if (filter?.[1]) params.set("is_active", filter[1]);

    const url = `/data-providers/plans?${params.toString()}`;

    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const createCustomDataPlan = async ({
  base_plan_id,
  fulfillment_quantity,
  commission,
}: CreateDataPlanType) => {
  try {
    const url = `/data-providers/plans/custom`;

    const payload = {
      base_plan_id: Number(base_plan_id),
      fulfillment_quantity: Number(fulfillment_quantity),
      commission: Number(commission),
    };
    const { data } = await axiosInstance.post(url, payload);
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
