import { FormEvent } from "react";

import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import Label from "@/components/atoms/Label/Label";
import ModalWrapper from "@/components/atoms/ModalWrapper/ModalWrapper";
import Select from "@/components/atoms/Select/Select";

import { genderRole } from "@/features/users/constants";
import { useGetRoles } from "@/features/users/hooks/useGetRoles";
import { AdminFormType } from "@/features/users/types";

interface CreateAdminModalProps {
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  adminDetails: AdminFormType;
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  handleSubmit: (e: FormEvent) => void;
  isFormFilled: boolean;
  togglePasswordVisibility: () => void;
  showPassword: "text" | "password";
  isPending: boolean;
}

const CreateAdminModal = ({
  openModal,
  setOpenModal,
  handleChange,
  handleSubmit,
  adminDetails,
  isFormFilled,
  togglePasswordVisibility,
  showPassword,
  isPending,
}: CreateAdminModalProps) => {
  const { isLoading, roles } = useGetRoles();

  const newRolesFormat = roles?.map((item: { name: string; id: string }) => ({
    label: item.name,
    value: item.id,
  }));

  return (
    <ModalWrapper open={openModal} onClose={setOpenModal} title="">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label title="First Name" />
          <Input
            value={adminDetails.firstName}
            onChange={handleChange}
            type="text"
            name="firstName"
            placeholder=""
          />
        </div>
        <div className="space-y-2">
          <Label title="Last Name" />
          <Input
            value={adminDetails.lastName}
            onChange={handleChange}
            type="text"
            name="lastName"
            placeholder=""
          />
        </div>
        <div className="space-y-2">
          <Label title="Email" />
          <Input
            value={adminDetails.email}
            onChange={handleChange}
            type="email"
            name="email"
            placeholder=""
          />
        </div>
        <div className="space-y-2">
          <Label title="PhoneNumber" />
          <Input
            value={adminDetails.phoneNumber}
            onChange={handleChange}
            type="text"
            name="phoneNumber"
            placeholder=""
          />
        </div>
        <div className="space-y-2">
          <Label title="Gender" />
          <Select
            value={adminDetails.gender}
            onChange={handleChange}
            options={genderRole}
            name="gender"
          />
        </div>
        <div className="space-y-2">
          <Label title="Role" />
          {isLoading ? (
            <p className="text-sm">Loading roles...</p>
          ) : (
            <Select
              value={adminDetails.role}
              onChange={handleChange}
              options={newRolesFormat}
              name="role"
            />
          )}
        </div>
        <div className="space-y-2">
          <Label title="Password" />
          <Input
            value={adminDetails.password}
            onChange={handleChange}
            type={showPassword}
            showPassword={showPassword}
            name="password"
            onTogglePassword={togglePasswordVisibility}
            placeholder=""
          />
        </div>
        <Button type="submit" loading={isPending} disabled={!isFormFilled}>
          Submit
        </Button>
      </form>
    </ModalWrapper>
  );
};

export default CreateAdminModal;
