import { useSelector } from "react-redux";

import { RootState } from "@/store";
import { restrictViewByPermissions } from "../helpers/restrictViewByPermissions";

export const useAdminPermission = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const userPermission = user?.permissions || [];
  const requriedEarningsPermission = [
    "admin_management.read",
    "admin_management.write",
    "admin_management.create",
  ];

  const hasPermission = restrictViewByPermissions(
    userPermission,
    requriedEarningsPermission
  );

  return { hasPermission };
};
