import { io, Socket } from "socket.io-client";
import { NotificationPayload } from "../types";

let socket: Socket | null = null;

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL_SOCKET;

const path: string = `${backendUrl}/latest`;

export const connectSocket = (token?: string): Socket => {
  if (!backendUrl) {
    throw new Error("NEXT_PUBLIC_BACKEND_BASE_URL is not defined");
  }

  if (!socket || !socket.connected) {
    socket = io(path, {
      path: "/api/v1/socket.io",
      transports: ["websocket", "polling"],
      withCredentials: true,
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionAttempts: 5,
      timeout: 10000,
      auth: token ? { token } : undefined,
    });

    socket.on("connect", () => {});

    socket.on("disconnect", (reason) => {
      console.log("❌ Disconnected from real-time notifications:", reason);
    });

    socket.on("connect_error", (error) => {
      console.error("❌ Connection error:", error.message);
      console.error("Attempting to connect to:", path);
    });

    socket.on("error", (error) => {
      console.error("❌ Socket error:", error);
    });
  }

  return socket;
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};

export const onNotification = (
  callback: (data: NotificationPayload) => void,
): void => {
  socket?.on("notification", callback);
};

export const offNotification = (
  callback?: (data: NotificationPayload) => void,
): void => {
  if (callback) {
    socket?.off("notification", callback);
  } else {
    socket?.off("notification");
  }
};
