import { axiosInstance } from "../axiosInstance";
import { formatCreatedAt } from "../helpers/dateFormats";
import { DateFilterValue } from "../types";

export const getTotalRevenueProfit = async ({
  includeTransfer,
  type,
  selectedDateFilterValue,
}: {
  includeTransfer: boolean;
  type?: "revenue" | "profit";
  selectedDateFilterValue: DateFilterValue | null;
}) => {
  try {
    const query: Record<string, string> = {};

    if (type) query.type = type;
    if (includeTransfer) query.includeTransfer = String(includeTransfer);

    if (selectedDateFilterValue) {
      if (selectedDateFilterValue.label === "custom") {
        query.customFilter = `${formatCreatedAt(
          selectedDateFilterValue.dateRange.start
        )},${formatCreatedAt(selectedDateFilterValue.dateRange.end)}`;
      } else {
        query.filterType = selectedDateFilterValue.label;
      }
    }

    const queryString = new URLSearchParams(query).toString();

    const url = queryString
      ? `/total-revenue-profit?${queryString}`
      : `/total-revenue-profit`;

    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const getRevenueProfit = async ({
  includeTransfer,
  type,
  selectedDateFilterValue,
}: {
  includeTransfer: boolean;
  type?: "revenue" | "profit";
  selectedDateFilterValue: DateFilterValue | null;
}) => {
  try {
    const query: Record<string, string> = {};

    if (type) query.type = type;
    if (includeTransfer) query.includeTransfer = String(includeTransfer);

    if (selectedDateFilterValue) {
      if (selectedDateFilterValue.label === "custom") {
        query.customFilter = `${formatCreatedAt(
          selectedDateFilterValue.dateRange.start
        )},${formatCreatedAt(selectedDateFilterValue.dateRange.end)}`;
      } else {
        query.filterType = selectedDateFilterValue.label;
      }
    }

    const queryString = new URLSearchParams(query).toString();

    const url = queryString
      ? `/revenue-profit?${queryString}`
      : `/evenue-profit`;

    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const getRevenueProfitByCategory = async ({
  service,
  type,
  selectedDateFilterValue,
}: {
  service: string;
  type?: "revenue" | "profit";
  selectedDateFilterValue: DateFilterValue | null;
}) => {
  try {
    const query: Record<string, string> = {};

    if (type) query.type = type;
    if (service) query.service = String(service);

    if (selectedDateFilterValue) {
      if (selectedDateFilterValue.label === "custom") {
        query.customFilter = `${formatCreatedAt(
          selectedDateFilterValue.dateRange.start
        )},${formatCreatedAt(selectedDateFilterValue.dateRange.end)}`;
      } else {
        query.filterType = selectedDateFilterValue.label;
      }
    }

    const queryString = new URLSearchParams(query).toString();

    const url = queryString
      ? `/revenue-profit-by-category?${queryString}`
      : `/revenue-profit-by-category`;

    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};
