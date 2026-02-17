import { UserCheck, UserMinus, Users, UserX } from "lucide-react";

import CardWrapper from "@/components/atoms/CardWrapper/CardWrapper";
import StatisticCard from "@/components/molecules/StatisticCard/StatisticCard";

interface UserSummaryProps {
  isLoading: boolean;
  handleStatusChange: (value: string) => void;
  activeUsers: number;
  totalUsers: number;
  unknownUsers: number;
  inactiveUsers: number;
  deletedUsers: number;
}

const UserSummary = ({
  isLoading,
  totalUsers,
  unknownUsers,
  inactiveUsers,
  activeUsers,
  handleStatusChange,
  deletedUsers,
}: UserSummaryProps) => {
  return (
    <CardWrapper loading={isLoading}>
      <StatisticCard
        title="Total users"
        value={totalUsers}
        onClick={() => handleStatusChange("")}
        icon={<Users />}
        color="blue"
      />
      <StatisticCard
        title="Active users"
        value={activeUsers || 0}
        onClick={() => handleStatusChange("active")}
        icon={<UserCheck />}
        color="green"
      />

      <StatisticCard
        title="Inactive users"
        value={unknownUsers || 0}
        onClick={() => handleStatusChange("unknown")}
        icon={<UserMinus />}
        color="yellow"
      />
      <StatisticCard
        title="Suspended users"
        value={inactiveUsers || 0}
        onClick={() => handleStatusChange("inactive")}
        icon={<UserX />}
        color="red"
      />
      <StatisticCard
        title="Deleted users"
        value={deletedUsers || 0}
        onClick={() => handleStatusChange("deleted")}
        icon={<UserX />}
        color="red"
      />
    </CardWrapper>
  );
};

export default UserSummary;
