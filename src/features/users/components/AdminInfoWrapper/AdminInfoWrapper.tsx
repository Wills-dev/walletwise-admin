"use client";

import { useState } from "react";

import { adminBreadcrumb } from "../../constants";
import { useGetAdminInfo } from "../../hooks/useGetAdminInfo";

import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import AppBreadcrumb from "@/components/molecules/AppBreadcrumb/AppBreadcrumb";
import AdminInfoHeader from "../AdminInfoHeader/AdminInfoHeader";
import AdminPermissionSection from "../AdminPermissionSection/AdminPermissionSection";
import StatusBubbleLoader from "@/components/atoms/skeleton/StatusBubbleLoader";
import AdminInfoLoader from "@/components/atoms/skeleton/AdminInfoLoader";
import AdminActivityLog from "../AdminActivityLog/AdminActivityLog";

const AdminInfoWrapper = ({ adminId }: { adminId: string }) => {
  const { data, isLoading } = useGetAdminInfo(adminId);

  const [expandedSection, setExpandedSection] = useState<null | string>(
    "permissions"
  );

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <PageTitle
          title="Admin Details"
          description="Manage administrator information and permissions"
        />
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

      <AppBreadcrumb items={adminBreadcrumb} />
      {isLoading ? (
        <AdminInfoLoader />
      ) : (
        <>
          <AdminInfoHeader adminData={data} />
          <AdminPermissionSection
            permissions={data?.permissions}
            toggleSection={toggleSection}
            expandedSection={expandedSection}
          />
          <AdminActivityLog
            logs={data?.logs}
            toggleSection={toggleSection}
            expandedSection={expandedSection}
          />
        </>
      )}
    </div>
  );
};

export default AdminInfoWrapper;
