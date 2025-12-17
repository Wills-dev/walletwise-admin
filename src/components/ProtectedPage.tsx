"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useSelector } from "react-redux";

import { RootState } from "@/store";
import { checkPermissions } from "@/lib/helpers/checkPermissions";
import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";

import MainLoader from "./atoms/MainLoader/MainLoader";

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
  const router = useRouter();

  const { isLoading } = useCurrentUser();
  const { user, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace("/login");
      return;
    }

    if (
      !isLoading &&
      isAuthenticated &&
      !checkPermissions(user?.permissions, requiredPermissions, requireAll)
    ) {
      router.replace(redirectTo);
    }
  }, [
    isLoading,
    isAuthenticated,
    user,
    requiredPermissions,
    requireAll,
    redirectTo,
    router,
  ]);

  if (isLoading || !isAuthenticated) {
    return <MainLoader />;
  }

  return <>{children}</>;
}
