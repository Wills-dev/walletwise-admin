import { FormEvent } from "react";

import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import Label from "@/components/atoms/Label/Label";
import ModalWrapper from "@/components/atoms/ModalWrapper/ModalWrapper";
import Textarea from "@/components/atoms/TextArea/Textarea";

import { areAllFieldsFilled } from "@/lib/helpers/areAllFieldsFilled";

interface PushNotificationModalProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  handleSubmit: (e: FormEvent) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  notificationInfo: { subject: string; message: string };
  isPending: boolean;
}

const PushNotificationModal = ({
  openModal,
  setOpenModal,
  handleChange,
  handleSubmit,
  isPending,
  notificationInfo,
}: PushNotificationModalProps) => {
  const isAllFilled = areAllFieldsFilled(notificationInfo);

  return (
    <ModalWrapper
      open={openModal}
      onClose={setOpenModal}
      title="Push New Notification"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label title="Subject" />
          <Input
            value={notificationInfo.subject}
            onChange={handleChange}
            type="text"
            name="subject"
            placeholder=""
          />
        </div>
        <div className="space-y-2">
          <Label title="Message" />
          <Textarea
            value={notificationInfo.message}
            onChange={handleChange}
            rows={5}
            name="message"
            placeholder=""
          />
        </div>
        <Button
          type="submit"
          loading={isPending}
          disabled={!isAllFilled || isPending}
        >
          Submit
        </Button>
      </form>
    </ModalWrapper>
  );
};

export default PushNotificationModal;
