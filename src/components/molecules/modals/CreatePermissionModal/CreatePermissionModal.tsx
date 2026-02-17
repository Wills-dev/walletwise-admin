import React from "react";

import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import Label from "@/components/atoms/Label/Label";
import ModalWrapper from "@/components/atoms/ModalWrapper/ModalWrapper";

const CreatePermissionModal = ({
  openModal,
  onClose,
  permission,
  setPermission,
  onSubmit,
  isSubmitting,
}: {
  openModal: boolean;
  onClose: (open: boolean) => void;
  permission: string;
  setPermission: (permission: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}) => {
  return (
    <ModalWrapper
      open={openModal}
      onClose={onClose}
      title="Create New Permission"
      description="Enter the name of the new permission to be created."
    >
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label title="Permission Name" />
          <Input
            type="text"
            name="permission"
            value={permission}
            onChange={(e) => setPermission(e.target.value)}
          />
        </div>
        <Button
          type="submit"
          disabled={!permission || isSubmitting}
          loading={isSubmitting}
        >
          Create Permission
        </Button>
      </form>
    </ModalWrapper>
  );
};

export default CreatePermissionModal;
