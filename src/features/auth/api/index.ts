import { axiosInstance } from "@/lib/axiosInstance";

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", {
      email,
      password,
    });
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const verifyLogin = async ({
  otp,
  adminId,
}: {
  otp: string;
  adminId: string;
}) => {
  try {
    const { data } = await axiosInstance.post(
      `/auth/verify-otp?adminId=${adminId}`,
      {
        otp,
      }
    );
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const forgotPassword = async ({ email }: { email: string }) => {
  try {
    const { data } = await axiosInstance.post("/auth/forgot-password", {
      email,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const resetPassword = async ({
  token,
  password,
}: {
  token: string;
  password: string;
}) => {
  try {
    const { data } = await axiosInstance.post("/auth/reset-password", {
      token,
      password,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const getCurrentUser = async () => {
  try {
    const { data } = await axiosInstance.get("/admins/me");
    return data;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    await axiosInstance.get("/auth/logout");
  } catch (error) {
    throw error;
  }
};

export const changePassword = async ({
  oldPassword,
  newPassword,
  confirmPassword,
}: {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}) => {
  try {
    const url = `/admins/me/password`;
    const { data } = await axiosInstance.post(url, {
      oldPassword,
      newPassword,
      confirmPassword,
    });
    return data;
  } catch (error) {
    throw error;
  }
};
