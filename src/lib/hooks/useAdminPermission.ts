import { useSelector } from "react-redux";

import { RootState } from "@/store";
import { restrictViewByPermissions } from "../helpers/restrictViewByPermissions";

export const useAdminPermission = (
  requriedEarningsPermission = [
    "admin_management.read",
    "admin_management.write",
    "admin_management.create",
  ]
) => {
  const { user } = useSelector((state: RootState) => state.auth);

  const userPermission = user?.permissions || [];

  const hasPermission = restrictViewByPermissions(
    userPermission,
    requriedEarningsPermission
  );

  return { hasPermission };
};
