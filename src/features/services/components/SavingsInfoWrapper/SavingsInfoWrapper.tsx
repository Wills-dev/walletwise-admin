"use client";

import { useGetSavingsInfo } from "../../hooks/useGetSavingsInfo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, CheckCircle2, CreditCard, Hash, Info } from "lucide-react";

import PageTitle from "@/components/atoms/PageTitle/PageTitle";
import AppBreadcrumb from "@/components/molecules/AppBreadcrumb/AppBreadcrumb";
import TypeBadge from "@/components/atoms/TypeBadge/TypeBadge";
import UserInformation from "../UserInformation/UserInformation";
import TransactionSummaryCard from "../TransactionSummaryCard/TransactionSummaryCard";

import InfoItem from "@/components/atoms/InfoItem/InfoItem";
import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";
import AdminInfoLoader from "@/components/atoms/skeleton/AdminInfoLoader";

const SavingsInfoWrapper = ({ savingsId }: { savingsId: string }) => {
  const { data, isLoading } = useGetSavingsInfo(savingsId);

  const savingsBreadcrumb = [
    { label: `Savings Management`, href: `/services/savings` },
    { label: "Transaction Info" },
  ];

  return (
    <div className="space-y-4">
      {isLoading ? (
        <AdminInfoLoader />
      ) : (
        <>
          <PageTitle
            title="Transaction Details"
            description={`ID: #${savingsId}`}
          />
          <AppBreadcrumb items={savingsBreadcrumb} />
          <TypeBadge type={data?.transaction_type || ""} />
          <div className="lg:col-span-1">
            <TransactionSummaryCard data={data} />
          </div>
          <div className="w-full">
            <Card className="border-border/50 dark:bg-gray-800 shadow-sm w-full col-span-1">
              {" "}
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  Transaction Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-1">
                <InfoItem
                  icon={Hash}
                  label="Transaction ID"
                  value={<span className="font-mono text-xs">{data?.id}</span>}
                />
                <InfoItem
                  icon={CreditCard}
                  label="Plan type"
                  value={<span className="capitalize">{data?.plan_type}</span>}
                />
                <InfoItem
                  icon={CheckCircle2}
                  label="Status"
                  value={<StatusBubble status={data?.plan_status} />}
                />{" "}
                <InfoItem
                  icon={Calendar}
                  label="Date"
                  value={new Date(data?.transaction_created_at).toLocaleString(
                    "en-NG",
                    {
                      dateStyle: "medium",
                      timeStyle: "medium",
                    },
                  )}
                />
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1">
            <UserInformation data={data} />
          </div>
        </>
      )}
    </div>
  );
};

export default SavingsInfoWrapper;
