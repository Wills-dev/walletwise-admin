import { axiosInstance } from "../axiosInstance";

export const getPermissions = async () => {
  try {
    const url = `/role-permissions/permissions`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const createPermission = async ({ name }: { name: string }) => {
  try {
    const url = `/role-permissions/permissions`;
    const { data } = await axiosInstance.post(url, { name });
    return data;
  } catch (error) {
    throw error;
  }
};
