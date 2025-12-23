import { axiosInstance } from "../axiosInstance";
import { fetchDataProps } from "../types";

export const getAllKYC = async ({
  currentPage,
  limit,
  search,
  tier,
  status,
}: fetchDataProps) => {
  try {
    const params = new URLSearchParams();
    params.set("page", currentPage.toString());
    params.set("limit", limit.toString());

    if (search) params.set("search", search);
    if (tier) params.set("tier", tier.toString());
    if (status) params.set("status", status);
    const url = `/kyc?${params.toString()}`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const getKycInfo = async ({ kycId }: { kycId: string }) => {
  try {
    const url = `/kyc/${kycId}`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const updateKycStatus = async ({
  kycId,
  action,
  message,
}: {
  kycId: string;
  action: "decline" | "approve";
  message: string;
}) => {
  try {
    const url = `/kyc/${kycId}/status`;
    const { data } = await axiosInstance.patch(url, {
      action,
      message,
    });
    return data;
  } catch (error) {
    throw error;
  }
};
