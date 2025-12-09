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
    const { data } = await axiosInstance.get("/auth/current-user");
    return data;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    await axiosInstance.get("/auth/log-out");
  } catch (error) {
    throw error;
  }
};
