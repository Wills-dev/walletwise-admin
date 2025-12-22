"use client";

import Button from "@/components/atoms/Button/Button";
import PushNotificationModal from "../modals/PushNotificationModal/PushNotificationModal";

import { usePushNewNotification } from "@/lib/hooks/usePushNewNotification";

const NotificationActionPanel = () => {
  const {
    handleChange,
    handleSubmit,
    isPending,
    openModal,
    setOpenModal,
    notificationInfo,
  } = usePushNewNotification();
  return (
    <div className="flex justify-end">
      <Button onClick={() => setOpenModal(true)}>Push new notification</Button>
      <PushNotificationModal
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isPending={isPending}
        openModal={openModal}
        setOpenModal={setOpenModal}
        notificationInfo={notificationInfo}
      />
    </div>
  );
};

export default NotificationActionPanel;
