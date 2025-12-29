"use client";

import { useState } from "react";

import { useSelector } from "react-redux";

import CurrentYearEarningChart from "../CurrentYearEarningChart/CurrentYearEarningChart";
import PageTitleSkeleton from "@/components/atoms/skeleton/PageTitleSkeleton";
import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import ReusableDropdown from "@/components/molecules/ReusableDropdown/ReusableDropdown";
import OverviewSummary from "@/components/molecules/OverviewSummary/OverviewSummary";
import TopServices from "@/components/molecules/TopServices/TopServices";
import RecentTransactions from "@/components/molecules/RecentTransactions/RecentTransactions";
import UserCountWrapper from "@/features/users/components/UserCountWrapper/UserCountWrapper";

import { RootState } from "@/store";
import { years } from "@/lib/constants";
import { PermissionGate } from "@/components/PermissionGate";

const OverviewWrapper = () => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear.toString());
  const { user, isLoading } = useSelector((state: RootState) => state.auth);

  return (
    <div className="space-y-6">
      {isLoading ? (
        <PageTitleSkeleton />
      ) : (
        <PageTitle
          title={`Welcome ${user?.first_name}`}
          description="Check your performance and find tips on improvement."
        />
      )}
      <div className="space-y-2">
        <ReusableDropdown
          onChange={setSelectedYear}
          value={selectedYear}
          buttonLabel="Select year"
          filterLabel="Select year"
          filterOptions={years}
        />
        <div className="flex gap-6 max-xl:flex-col">
          <PermissionGate
            permissions={[
              "admin_management.read",
              "admin_management.write",
              "admin_management.create",
            ]}
            requireAll={false}
          >
            <div className="xl:w-2/5 w-full">
              <CurrentYearEarningChart selectedYear={selectedYear} />
            </div>
          </PermissionGate>
          <div className="flex-1 max-w-full w-full">
            <OverviewSummary />
          </div>
        </div>
      </div>
      <div className="flex gap-6 flex-wrap">
        <PermissionGate
          permissions={[
            "admin_management.read",
            "admin_management.write",
            "admin_management.create",
          ]}
          requireAll={false}
        >
          <TopServices />
        </PermissionGate>
        <RecentTransactions />
        <UserCountWrapper year={selectedYear} />
      </div>
    </div>
  );
};

export default OverviewWrapper;
