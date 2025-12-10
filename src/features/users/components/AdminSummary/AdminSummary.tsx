"use client";

import { motion } from "framer-motion";
import { User, UserCircle } from "lucide-react";

import SummaryCardLoader from "@/components/atoms/skeleton/SummaryCardLoader";
import StatisticCard from "@/components/molecules/StatisticCard/StatisticCard";

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {isLoading ? (
        <SummaryCardLoader />
      ) : (
        <>
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
        </>
      )}
    </motion.div>
  );
};

export default AdminSummary;
