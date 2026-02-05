import { useEffect, useState, useCallback, useRef } from "react";

import { Socket } from "socket.io-client";

import { connectSocket, disconnectSocket } from "../helpers/socketService";
import { readAuthCookie } from "../helpers/cookie";
import { NotificationPayload } from "../types";

export const useDisputeNotifications = () => {
  const [notifications, setNotifications] = useState<NotificationPayload[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio("/assets/sound/notification.mp3");
    }
  }, []);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      "Notification" in window &&
      Notification.permission === "default"
    ) {
      Notification.requestPermission();
    }
  }, []);

  const showNotification = useCallback((notification: NotificationPayload) => {
    if (
      typeof window === "undefined" ||
      !("Notification" in window) ||
      Notification.permission !== "granted"
    ) {
      return;
    }

    new Notification(notification.title ?? "New Notification", {
      body: notification.message,
      icon: "/logo.png",
    });

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const token = readAuthCookie("walletwiseToken");

    const socket = connectSocket(token);
    socketRef.current = socket;

    const handleConnect = () => {
      setIsConnected(true);
    };

    const handleDisconnect = (reason: string) => {
      console.log("❌ Socket disconnected:", reason);
      setIsConnected(false);
    };

    const handleNotification = (notification: NotificationPayload) => {
      setNotifications((prev) => [notification, ...prev]);
      showNotification(notification);
    };

    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);
    socket.on("notification", handleNotification);

    return () => {
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
      socket.off("notification", handleNotification);

      disconnectSocket();
    };
  }, [showNotification]);

  return {
    notifications,
    isConnected,
  };
};
