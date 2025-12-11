import { axiosInstance } from "@/lib/axiosInstance";
import { fetchDataProps } from "@/lib/types";
import { AdminFormType } from "../types";

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

export const suspendAdmin = async ({ adminId }: { adminId: string }) => {
  try {
    const { data } = await axiosInstance.patch(`/admins/${adminId}/suspend`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const activateAdmin = async ({ adminId }: { adminId: string }) => {
  try {
    const { data } = await axiosInstance.patch(`/admins/${adminId}/unsuspend`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteAdmin = async ({ adminId }: { adminId: string }) => {
  try {
    const { data } = await axiosInstance.delete(`/admins/${adminId}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getAdminInfo = async ({ adminId }: { adminId: string }) => {
  try {
    const { data } = await axiosInstance.get(`/admins/${adminId}/details`);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const createAdmin = async (adminDetails: AdminFormType) => {
  try {
    const { firstName, lastName, role, email, phoneNumber, password, gender } =
      adminDetails;
    const payload = {
      firstName,
      lastName,
      email,
      password,
      roleId: Number(role),
      phoneNumber,
      status: "active",
      gender,
    };
    const { data } = await axiosInstance.post(`/admins/create`, payload);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getRolePermissions = async () => {
  try {
    const { data } = await axiosInstance.get(`/role-permissions/roles`);
    return data?.data;
  } catch (error) {
    throw error;
  }
};
