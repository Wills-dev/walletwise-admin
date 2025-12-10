import { axiosInstance } from "@/lib/axiosInstance";
import { fetchDataProps } from "@/lib/types";

export const getAdmins = async ({
  currentPage,
  limit,
  search,
}: fetchDataProps) => {
  try {
    const url = `/admins?page=${currentPage}&limit=${limit}${
      search ? `&search=${search}` : ""
    }`;

    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};
