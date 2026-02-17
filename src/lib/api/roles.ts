import { axiosInstance } from "../axiosInstance";

export const getRoles = async () => {
  try {
    const url = `/role-permissions/roles`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const createRole = async (roleData: {
  name: string;
  permissionIds: string[];
}) => {
  try {
    const url = `/role-permissions/roles`;
    const { data } = await axiosInstance.post(url, roleData);
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateRole = async ({
  roleId,
  ...roleData
}: {
  roleId: string;
  name?: string;
  permissionIds?: string[];
}) => {
  try {
    const url = `/role-permissions/roles/${roleId}`;
    const { data } = await axiosInstance.patch(url, roleData);
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteRole = async (roleId: string) => {
  try {
    const url = `/roles/${roleId}`;
    const { data } = await axiosInstance.delete(url);
    return data;
  } catch (error) {
    throw error;
  }
};
