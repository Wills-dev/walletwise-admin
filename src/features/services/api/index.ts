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
      params.set("is_custom", String(exclude));
    } else {
      const selected = filter?.[0];

      if (selected === "custom plans") {
        params.set("is_custom", "true");
      } else if (selected === "original plans") {
        params.set("is_custom", "false");
      } else if (selected === "all plans") {
        params.delete("is_custom");
      }
    }

    if (filter?.[1] === "active plans") {
      params.set("is_active", "true");
    } else if (filter?.[1] === "inactive plans") {
      params.set("is_active", "false");
    } else if (filter?.[1] === "all plans") {
      params.delete("is_active");
    }

    if (filter?.[1]) params.set("is_active", filter[1]);

    const url = `/data-providers/plans?${params.toString()}`;

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

export const createCustomDataPlan = async ({
  base_plan_id,
  fulfillment_quantity,
  plan_code,
}: CreateDataPlanType) => {
  try {
    const url = `/data-providers/plans/custom`;

    const payload: Record<string, unknown> = {
      base_plan_id: Number(base_plan_id),
      fulfillment_quantity: Number(fulfillment_quantity),
    };
    if (plan_code) {
      payload.plan_code = plan_code;
    }
    const { data } = await axiosInstance.post(url, payload);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const editDataPlan = async ({
  id,
  is_active,
}: {
  id: number;
  is_active: boolean;
}) => {
  try {
    const url = `/data-providers/plans/custom/${id}`;
    const { data } = await axiosInstance.patch(url, { is_active });
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const deleteDataPlan = async ({ id }: { id: number }) => {
  try {
    const url = `/data-providers/plans/custom/${id}`;
    const { data } = await axiosInstance.delete(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};
