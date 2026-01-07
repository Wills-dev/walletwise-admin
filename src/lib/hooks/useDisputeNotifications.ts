import { useEffect, useState, useCallback, useRef } from "react";
import {
  connectSocket,
  disconnectSocket,
  NotificationPayload,
} from "../helpers/socketService";
import { readAuthCookie } from "../helpers/cookie";

export const useDisputeNotifications = () => {
  const [notifications, setNotifications] = useState<NotificationPayload[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const socketRef = useRef<ReturnType<typeof connectSocket> | null>(null); // ✅ Store socket reference

  // Initialize audio
  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio("/assets/sound/notification.mp3");
    }
  }, []);

  // Request notification permission
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      "Notification" in window &&
      Notification.permission === "default"
    ) {
      Notification.requestPermission().then((permission) => {
        console.log("Notification permission:", permission);
      });
    }
  }, []);

  const showNotification = useCallback((notification: NotificationPayload) => {
    if (
      typeof window === "undefined" ||
      !("Notification" in window) ||
      Notification.permission !== "granted"
    ) {
      console.log("Browser notifications not available or not granted");
      return;
    }

    // Show browser notification
    new Notification(notification?.title ?? "New Notification", {
      body: notification?.message,
      icon: "/logo.png",
    });

    // Play sound
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current
        .play()
        .catch((e) => console.log("Audio play failed:", e));
    }
  }, []);

  useEffect(() => {
    const token = readAuthCookie("walletwiseToken");

    console.log("Connecting to socket...");
    console.log("Backend URL:", process.env.NEXT_PUBLIC_BACKEND_BASE_URL);

    const socket = connectSocket(token);
    socketRef.current = socket;

    // ✅ Handle connection events properly
    const handleConnect = () => {
      console.log("✅ Socket connected");
      setIsConnected(true);
    };

    const handleDisconnect = (reason: string) => {
      console.log("❌ Socket disconnected:", reason);
      setIsConnected(false);
    };

    const handleNotification = (notification: NotificationPayload) => {
      console.log("📩 New notification received:", notification);
      setNotifications((prev) => [notification, ...prev]);
      showNotification(notification);
    };

    // Attach event listeners
    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);
    socket.on("notification", handleNotification);

    // ✅ Cleanup function
    return () => {
      console.log("🧹 Cleaning up socket listeners");
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
      socket.off("notification", handleNotification);

      // Only disconnect if this is the last component using the socket
      // For multiple components, you might want to keep the connection alive
      disconnectSocket();
    };
  }, [showNotification]); // ✅ Keep showNotification in dependencies

  return {
    notifications,
    isConnected,
  };
};
