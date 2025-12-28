import { axiosInstance } from "../axiosInstance";

export const getRecentTransactions = async () => {
  try {
    const { data } = await axiosInstance.get(`/statistics/recent-transactions`);
    return data?.data;
  } catch (error) {
    throw error;
  }
};
