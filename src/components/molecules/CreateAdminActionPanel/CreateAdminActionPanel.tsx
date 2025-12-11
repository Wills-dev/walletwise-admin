"use client";

import dynamic from "next/dynamic";

import Button from "@/components/atoms/Button/Button";

import { useCreateAdmin } from "@/features/users/hooks/useCreateAdmin";

const CreateAdminModal = dynamic(
  () => import("../modals/CreateAdminModal/CreateAdminModal")
);

const CreateAdminActionPanel = () => {
  const {
    handleChange,
    handleSubmit,
    isPending,
    openModal,
    setOpenModal,
    isFormFilled,
    togglePasswordVisibility,
    showPassword,
    adminDetails,
  } = useCreateAdmin();
  return (
    <div className="flex justify-end">
      <Button onClick={() => setOpenModal(true)}>Create new admin</Button>
      <CreateAdminModal
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isFormFilled={isFormFilled}
        isPending={isPending}
        openModal={openModal}
        showPassword={showPassword}
        togglePasswordVisibility={togglePasswordVisibility}
        adminDetails={adminDetails}
        setOpenModal={setOpenModal}
      />
    </div>
  );
};

export default CreateAdminActionPanel;
