import Button from "@/components/atoms/Button/Button";
import Label from "@/components/atoms/Label/Label";
import ModalWrapper from "@/components/atoms/ModalWrapper/ModalWrapper";
import Select from "@/components/atoms/Select/Select";
import Textarea from "@/components/atoms/TextArea/Textarea";

import React, { FormEvent } from "react";

const FlagUserModal = ({
  open,
  setOpen,
  handleSubmit,
  flagUserAcc,
  isUpdating,
  handleChange,
  isFlagged,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  handleSubmit: (e: FormEvent) => void;
  flagUserAcc: { is_suspicious: boolean; reason: string };
  isUpdating: boolean;
  handleChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>,
  ) => void;
  isFlagged: boolean;
}) => {
  return (
    <ModalWrapper
      open={open}
      onClose={setOpen}
      title={isFlagged ? "Unflag user acccount" : "Flag user account"}
    >
      <form onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label title="Status" />
          <Select
            value={flagUserAcc.is_suspicious ? "flag" : "unflag"}
            name="is_suspicious"
            onChange={handleChange}
            options={[
              { value: "", label: "Select Status" },
              { value: "flag", label: "Flag" },
              { value: "unflag", label: "Unflag" },
            ]}
          />
        </div>
        <div className="space-y-2">
          <Label title="Reason" />
          <Textarea
            rows={5}
            value={flagUserAcc.reason}
            name="reason"
            onChange={handleChange}
          />
        </div>
        <div className="">
          <Button type="submit" loading={isUpdating}>
            Update
          </Button>
        </div>
      </form>
    </ModalWrapper>
  );
};

export default FlagUserModal;
