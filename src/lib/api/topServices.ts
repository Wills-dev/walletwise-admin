import { axiosInstance } from "../axiosInstance";

export const getTopServices = async () => {
  try {
    const { data } = await axiosInstance.get(`/statistics/top-services`);
    return data?.data;
  } catch (error) {
    throw error;
  }
};
