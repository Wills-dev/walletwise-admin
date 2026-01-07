import { io, Socket } from "socket.io-client";

export interface NotificationPayload {
  id?: string;
  title?: string;
  message?: string;
  createdAt?: string;
  [key: string]: unknown;
}

let socket: Socket | null = null;
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL_SOCKET;

export const connectSocket = (token?: string): Socket => {
  if (!socket || !socket.connected) {
    socket = io(`${backendUrl}/latest`, {
      transports: ["websocket", "polling"],
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionAttempts: 5,
      timeout: 10000,
      auth: token
        ? {
            token,
          }
        : undefined,
    });

    socket.on("connect", () => {
      console.log("✅ Connected to real-time notifications");
      console.log("Socket ID:", socket?.id);
    });

    socket.on("disconnect", (reason) => {
      console.log("❌ Disconnected from real-time notifications:", reason);
    });

    socket.on("connect_error", (error) => {
      console.error("❌ Connection error:", error.message);
      console.error("Attempting to connect to:", `${backendUrl}/latest`);
    });

    socket.on("error", (error) => {
      console.error("❌ Socket error:", error);
    });
  }

  return socket;
};

export const onNotification = (
  callback: (data: NotificationPayload) => void
) => {
  if (socket) {
    socket.on("notification", callback);
  }
};

export const offNotification = () => {
  if (socket) {
    socket.off("notification");
  }
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};

export const isSocketConnected = (): boolean => {
  return socket?.connected ?? false;
};
