import { axiosInstance } from "@/lib/axiosInstance";

export const userAccountStatement = async ({
  userId,
  startDate,
  endDate,
}: {
  userId: string;
  startDate: string;
  endDate: string;
}) => {
  try {
    const url = `/users/statement/${userId}/pdf?filterType=customRange&filterValue=${startDate},${endDate}`;
    const { data } = await axiosInstance.get(url, {
      responseType: "blob",
    });
    return data;
  } catch (error) {
    throw error;
  }
};
