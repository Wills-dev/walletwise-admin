import { useState } from "react";

import { AdminFormType } from "../types";
import { areAllFieldsFilled } from "@/lib/helpers/areAllFieldsFilled";
import { formatInputTextNumber } from "@/lib/helpers/formatNumbers";

export const useCreateAdminState = () => {
  const [openModal, setOpenModal] = useState(false);
  const [showPassword, setShowPassword] = useState<"text" | "password">(
    "password"
  );
  const [adminDetails, setAdminDetails] = useState<AdminFormType>({
    firstName: "",
    lastName: "",
    role: "",
    email: "",
    phoneNumber: "",
    password: "",
    gender: "",
  });

  const resetForm = () => {
    setOpenModal(false);
    setAdminDetails({
      firstName: "",
      lastName: "",
      role: "",
      email: "",
      phoneNumber: "",
      password: "",
      gender: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setAdminDetails({
      ...adminDetails,
      [name]: name === "phoneNumber" ? formatInputTextNumber(value) : value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => (prev === "password" ? "text" : "password"));
  };

  const isFormFilled = areAllFieldsFilled(adminDetails);

  return {
    handleChange,
    resetForm,
    openModal,
    setOpenModal,
    adminDetails,
    isFormFilled,
    togglePasswordVisibility,
    showPassword,
  };
};
