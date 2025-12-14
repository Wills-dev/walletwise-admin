"use client";

import { FormEvent } from "react";

import Button from "@/components/atoms/Button/Button";
import UpdateUserStatusModal from "@/components/molecules/modals/UpdateUserStatusModal/UpdateUserStatusModal";

import { useSuspendUser } from "../../hooks/useSuspendUser";
import { useReactivateUser } from "../../hooks/useReactivateUser";

const UserActionButton = ({
  userId,
  email,
  status,
}: {
  userId: string;
  email: string;
  status: string;
}) => {
  const {
    isOpen,
    messageContent,
    setMessage,
    setIsOpen,
    isPending,
    handleSubmit,
  } = useSuspendUser(userId);
  const { open, msg, setMsg, setOpen, isReactivating, handleReactivate } =
    useReactivateUser(userId);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSubmit(e, email);
  };

  const onReactivateSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleReactivate(e, email);
  };

  const toggleStatusUpdate = () => {
    if (status === "inactive") {
      setOpen(true);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className="w-fit pt-6">
      {
        <Button onClick={toggleStatusUpdate}>
          {" "}
          {status === "inactive" ? "Activate Account" : "Suspend Account"}
        </Button>
      }
      <UpdateUserStatusModal
        openModal={isOpen}
        messageContent={messageContent}
        setMessage={setMessage}
        setOpenModal={setIsOpen}
        title="Suspend user"
        description="Are you sure you want to suspend this user? They will lose access to their account until they are reactivated"
        onSubmit={onSubmit}
        isLoading={isPending}
      />
      <UpdateUserStatusModal
        openModal={open}
        messageContent={msg}
        setMessage={setMsg}
        setOpenModal={setOpen}
        title="Activate user"
        description="Are you sure you want to reactivate this user? They will regain access to their account immediately"
        onSubmit={onReactivateSubmit}
        isLoading={isReactivating}
      />
    </div>
  );
};

export default UserActionButton;
