"use client";

import { motion } from "framer-motion";

import { SummaryProps } from "@/lib/types";

import ServiceCardWrapper from "../ServiceCardWrapper/ServiceCardWrapper";

const ServiceSummary = ({
  statusCount,
  totalRevenue,
  totalTransactions,
  totalCompanyCommission,
  totalUserCommission,
  isLoading,
  onClick,
  totalAmountUsd,
  totalCommissionUsd,
  service,
}: SummaryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="space-y-6"
    >
      <ServiceCardWrapper
        totalRevenue={totalRevenue}
        totalTransactions={totalTransactions}
        totalCommission={totalCompanyCommission}
        totalUserCommission={totalUserCommission}
        totalAmountUsd={totalAmountUsd}
        totalCommissionUsd={totalCommissionUsd}
        success={statusCount?.success}
        reversed={statusCount?.reversed}
        pending={statusCount?.pending}
        failed={statusCount?.failed}
        loading={isLoading}
        onClick={onClick}
        service={service}
      />
    </motion.div>
  );
};

export default ServiceSummary;
