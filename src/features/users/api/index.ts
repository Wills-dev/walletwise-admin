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

export const getUsers = async ({
  currentPage,
  limit,
  search,
  status,
  filter,
}: fetchDataProps) => {
  try {
    const params = new URLSearchParams();

    params.set("page", currentPage.toString());
    params.set("limit", limit.toString());

    if (search) params.set("search", search);
    if (filter?.[0]) params.set("sortOrder", filter[0]);
    if (status) params.set("status", status);

    const url = `/users?${params.toString()}`;

    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const getUserInfo = async ({
  userId,
  limit,
  currentPage,
}: {
  userId: string;
  limit: number;
  currentPage: number;
}) => {
  try {
    const { data } = await axiosInstance.get(
      `/users/${userId}/details?page=${currentPage}&limit=${limit}&sessionPage=1&sessionLimit=${limit}
        `
    );
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const suspendUser = async ({
  email,
  messageContent,
}: {
  email: string;
  messageContent: string;
}) => {
  try {
    const { data } = await axiosInstance.post(`/users/suspend`, {
      email,
      messageContent,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const reactivateUser = async ({
  email,
  messageContent,
}: {
  email: string;
  messageContent: string;
}) => {
  try {
    const { data } = await axiosInstance.post(`/users/unsuspend`, {
      email,
      messageContent,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const getUserCount = async ({ year }: { year?: string }) => {
  try {
    const url = `/statistics/users-count-by-month${
      year ? `?year=${year}` : ""
    }`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};
