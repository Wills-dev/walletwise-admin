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
          selectedDateFilterValue.dateRange.start,
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

export const getGifcardRatings = async ({
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

export const getGifcardRatingInfo = async ({ id }: { id: number }) => {
  try {
    const { data } = await axiosInstance.get(`/rates/${id}`);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const editGifcardRatingInfo = async ({
  id,
  rate,
  fee,
  is_active,
}: {
  id: number;
  rate?: number;
  fee?: number;
  is_active?: boolean;
}) => {
  try {
    const payload: { rate?: number; fee?: number; is_active?: boolean } = {};
    if (rate !== undefined) payload.rate = rate;
    if (fee !== undefined) payload.fee = fee;
    if (is_active !== undefined) payload.is_active = is_active;

    const { data } = await axiosInstance.patch(`/rates/${id}`, payload);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const updateRedeemGiftcardStatus = async ({
  id,
  status,
  admin_notes,
}: {
  id: string;
  status: "success" | "failed";
  admin_notes: string;
}) => {
  try {
    const payload: { status: "success" | "failed"; admin_notes?: string } = {
      status,
    };
    if (typeof admin_notes === "string" && admin_notes.trim() !== "") {
      payload.admin_notes = admin_notes;
    }

    const { data } = await axiosInstance.patch(
      `/gift-cards/${id}/status`,
      payload,
    );
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const getGifcardProducts = async ({
  currentPage,
  limit,
  filter,
}: fetchDataProps) => {
  try {
    const query: Record<string, string> = {};

    query.page = currentPage.toString();
    query.limit = limit.toString();
    if (filter?.[0]) query.sort_order = filter[0];
    if (filter?.[1] === "active") {
      query.is_active = true.toString();
    } else if (filter?.[1] === "inactive") {
      query.is_active = false.toString();
    }
    if (filter?.[2]) query.sort_by = filter[0];

    const queryString = new URLSearchParams(query).toString();

    const { data } = await axiosInstance.get(
      `/gift-cards/product/products${queryString ? `?${queryString}` : ""}`,
    );
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const getGifcardProductInfo = async ({ id }: { id: number }) => {
  try {
    const { data } = await axiosInstance.get(
      `/gift-cards/product/products/${id}`,
    );
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const createGiftcardProduct = async ({
  country,
  currency,
  asset_id,
}: {
  country: string;
  currency: string;
  asset_id: string;
}) => {
  try {
    const payload = { asset_id, country, currency };
    const { data } = await axiosInstance.post(
      `/gift-cards/product/products`,
      payload,
    );
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const editGifcardProductInfo = async ({
  id,
  country,
  currency,
  asset_id,
  is_active,
}: {
  id: number;
  country?: string;
  currency?: string;
  asset_id?: string;
  is_active?: boolean;
}) => {
  try {
    const payload: {
      country?: string;
      currency?: string;
      asset_id?: string;
      is_active?: boolean;
    } = {};
    if (country && country.trim() !== "") payload.country = country;
    if (currency && currency.trim() !== "") payload.currency = currency;
    if (asset_id && asset_id.trim() !== "") payload.asset_id = asset_id;
    if (is_active !== undefined) payload.is_active = is_active;

    const { data } = await axiosInstance.patch(
      `/gift-cards/product/products/${id}`,
      payload,
    );
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const getGifcardCategories = async ({
  currentPage,
  limit,
  filter,
}: fetchDataProps) => {
  try {
    const query: Record<string, string> = {};

    query.page = currentPage.toString();
    query.limit = limit.toString();
    if (filter?.[0]) query.sort_order = filter[0];
    if (filter?.[1] === "active") {
      query.is_active = true.toString();
    } else if (filter?.[1] === "inactive") {
      query.is_active = false.toString();
    }
    if (filter?.[2]) query.sort_by = filter[0];

    const queryString = new URLSearchParams(query).toString();

    const { data } = await axiosInstance.get(
      `/gift-cards/category/categories${queryString ? `?${queryString}` : ""}`,
    );
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const getGifcardCatgoryInfo = async ({ id }: { id: number }) => {
  try {
    const { data } = await axiosInstance.get(
      `/gift-cards/category/categories/${id}`,
    );
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const editGifcardCategoryInfo = async ({
  id,
  name,
  rate,
  product_id,
  is_active,
}: {
  id: number;
  name?: string;
  rate?: string;
  product_id?: string;
  is_active?: boolean;
}) => {
  try {
    const payload: {
      name?: string;
      rate?: number;
      product_id?: number;
      is_active?: boolean;
    } = {};
    if (name && name.trim() !== "") payload.name = name;
    if (rate && rate.trim() !== "") payload.rate = Number(rate);
    if (product_id && Number(product_id) !== 0)
      payload.product_id = Number(product_id);
    if (is_active !== undefined) payload.is_active = is_active;

    const { data } = await axiosInstance.patch(
      `/gift-cards/category/categories/${id}`,
      payload,
    );
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const createGiftcardCategory = async ({
  name,
  rate,
  product_id,
}: {
  name: string;
  rate: string;
  product_id: string;
}) => {
  try {
    const payload = { product_id, name, rate: Number(rate) };
    const { data } = await axiosInstance.post(
      `/gift-cards/category/categories`,
      payload,
    );
    return data?.data;
  } catch (error) {
    throw error;
  }
};
