import { FormEvent } from "react";

import ModalWrapper from "@/components/atoms/ModalWrapper/ModalWrapper";
import Textarea from "@/components/atoms/TextArea/Textarea";
import Label from "@/components/atoms/Label/Label";
import Button from "@/components/atoms/Button/Button";

interface UpdateUserStatusModalProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  onSubmit: (e: FormEvent) => void;
  title: string;
  description: string;
  messageContent: string;
  setMessage: (open: string) => void;
  isLoading: boolean;
}

const UpdateUserStatusModal = ({
  openModal,
  setOpenModal,
  onSubmit,
  title,
  description,
  messageContent,
  setMessage,
  isLoading,
}: UpdateUserStatusModalProps) => {
  return (
    <ModalWrapper
      open={openModal}
      onClose={setOpenModal}
      title={title}
      description={description}
    >
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-2 w-full">
          <Label title="Reason" />
          <Textarea
            value={messageContent}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
          />
        </div>
        <Button type="submit" loading={isLoading} disabled={!messageContent}>
          Submit
        </Button>
      </form>
    </ModalWrapper>
  );
};

export default UpdateUserStatusModal;
