"use client";

import { useSelector } from "react-redux";

import { RootState } from "@/store";
import { checkPermissions } from "@/lib/helpers/checkPermissions";

interface PermissionGateProps {
  permissions: string[];
  requireAll?: boolean;
  fallback?: React.ReactNode;
  children: React.ReactNode;
}

export function PermissionGate({
  permissions,
  requireAll = true,
  fallback = null,
  children,
}: PermissionGateProps) {
  const { user } = useSelector((state: RootState) => state.auth);

  if (!user) return <>{fallback}</>;

  const hasAccess = checkPermissions(user.permissions, permissions, requireAll);

  if (!hasAccess) return <>{fallback}</>;

  return <>{children}</>;
}
