"use client";

import { User, UserCircle } from "lucide-react";

import StatisticCard from "@/components/molecules/StatisticCard/StatisticCard";
import CardWrapper from "@/components/atoms/CardWrapper/CardWrapper";

interface AdminSummaryProps {
  adminStat: {
    role_name: string;
    count: number;
  }[];
  totalAdmin: number;
  isLoading: boolean;
}

const AdminSummary = ({
  adminStat,
  totalAdmin,
  isLoading,
}: AdminSummaryProps) => {
  return (
    <CardWrapper loading={isLoading}>
      <StatisticCard
        title="Total admin"
        color="green"
        value={totalAdmin}
        icon={<User className="w-6 h-6" />}
      />
      {adminStat?.map((admin, i) => (
        <StatisticCard
          key={i}
          title={admin?.role_name}
          value={admin?.count}
          icon={<UserCircle className="w-6 h-6" />}
          color="yellow"
        />
      ))}
    </CardWrapper>
  );
};

export default AdminSummary;
