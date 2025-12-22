import { axiosInstance } from "../axiosInstance";
import { fetchDataProps } from "../types";

export const getAllNotifications = async ({
  currentPage,
  limit,
}: fetchDataProps) => {
  try {
    const url = `/notifications?page=${currentPage}&limit=${limit}`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const deleteNotification = async ({
  notificationId,
}: {
  notificationId: string;
}) => {
  try {
    const url = `/notifications/${notificationId}`;
    const { data } = await axiosInstance.delete(url);
    return data;
  } catch (error) {
    throw error;
  }
};
