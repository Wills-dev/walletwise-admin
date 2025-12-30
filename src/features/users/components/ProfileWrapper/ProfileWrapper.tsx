"use client";

import { useState } from "react";

import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import AdminInfoLoader from "@/components/atoms/skeleton/AdminInfoLoader";
import StatusBubbleLoader from "@/components/atoms/skeleton/StatusBubbleLoader";
import AdminInfoHeader from "../AdminInfoHeader/AdminInfoHeader";
import AdminPermissionSection from "../AdminPermissionSection/AdminPermissionSection";

import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";

const ProfileWrapper = () => {
  const { data, isLoading } = useCurrentUser();

  const [expandedSection, setExpandedSection] = useState<null | string>(
    "permissions"
  );

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <PageTitle title="Profile" description="" />
        {isLoading ? (
          <StatusBubbleLoader />
        ) : (
          <div
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              data?.status === "active"
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                : "bg-red-500/10 text-red-400 border border-red-500/20"
            }`}
          >
            {data?.status.charAt(0).toUpperCase() + data?.status.slice(1)}
          </div>
        )}
      </div>
      {isLoading ? (
        <AdminInfoLoader />
      ) : (
        <>
          <AdminInfoHeader adminData={data} />
          <AdminPermissionSection
            permissions={data?.permissions || []}
            toggleSection={toggleSection}
            expandedSection={expandedSection}
          />
        </>
      )}
    </div>
  );
};

export default ProfileWrapper;
