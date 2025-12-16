"use client";

import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

import { RootState } from "@/store";
import { checkPermissions } from "@/lib/helpers/checkPermissions";

interface ProtectedPageProps {
  children: React.ReactNode;
  requiredPermissions: string[];
  requireAll?: boolean;
  redirectTo?: string;
}

export function ProtectedPage({
  children,
  requiredPermissions,
  requireAll = true,
  redirectTo = "/unauthorized",
}: ProtectedPageProps) {
  const { user } = useSelector((state: RootState) => state.auth);

  if (!user) {
    redirect("/login");
  }

  const hasAccess = checkPermissions(
    user.permissions,
    requiredPermissions,
    requireAll
  );

  if (!hasAccess) {
    redirect(redirectTo);
  }

  return <>{children}</>;
}
